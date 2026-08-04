const Database = require('better-sqlite3');
const { Client } = require('pg');
const path = require('path');
const fs = require('fs');

// Load environment variables manually
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.substring(1, value.length - 1);
        }
        process.env[key] = value.trim();
      }
    });
  }
} catch (e) {
  console.warn('Failed to parse .env file:', e);
}

const pgUrl = process.env.DATABASE_URL;

function convertSql(sql) {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

async function runMigration() {
  if (!pgUrl || pgUrl.includes('[YOUR-PASSWORD]')) {
    console.error('❌ ERROR: DATABASE_URL is not set or still contains [YOUR-PASSWORD] in .env file.');
    console.error('Please configure your real Supabase password in the .env file first.');
    process.exit(1);
  }

  const sqlitePath = path.join(__dirname, 'mxboard.db');
  if (!fs.existsSync(sqlitePath)) {
    console.log('⚠️ No local mxboard.db found. Skipping data migration.');
    process.exit(0);
  }

  console.log('🔄 Connecting to SQLite database...');
  const sqliteDb = new Database(sqlitePath);

  console.log('🔄 Connecting to Supabase PostgreSQL database...');
  const pgClient = new Client({
    connectionString: pgUrl,
    ssl: {
      rejectUnauthorized: false
    }
  });
  await pgClient.connect();

  console.log('Creating tables in Postgres if they do not exist...');
  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      nombre TEXT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT,
      rol TEXT,
      avatar_initials TEXT,
      current_week INTEGER,
      avg_score INTEGER,
      status TEXT,
      progreso_mallas_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS tutor_junior_mapping (
      junior_id TEXT PRIMARY KEY,
      tutor_id TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS consultant_progress (
      user_id TEXT PRIMARY KEY,
      completed_weeks_json TEXT,
      checklist_states_json TEXT,
      test_scores_json TEXT,
      test_attempts_json TEXT,
      test_times_json TEXT,
      deliverables_json TEXT,
      comments_json TEXT,
      game_scores_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS mentoring_logs (
      id TEXT PRIMARY KEY,
      junior_id TEXT,
      tutor_name TEXT,
      date TEXT,
      topic TEXT,
      duration INTEGER,
      ids INTEGER
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS calendar_events (
      id TEXT PRIMARY KEY,
      title TEXT,
      type TEXT,
      junior_id TEXT,
      expert_id TEXT,
      block_day TEXT,
      time_start TEXT,
      time_end TEXT,
      planned_minutes INTEGER,
      executed_minutes INTEGER,
      status TEXT,
      block_reason TEXT,
      week_number INTEGER
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS historial_evaluaciones (
      evaluacion_id TEXT PRIMARY KEY,
      usuario_id TEXT,
      semana_malla INTEGER,
      fecha_rendicion TEXT,
      puntaje_obtenido INTEGER,
      total_preguntas INTEGER,
      respuestas_usuario_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS cert_checklists (
      user_id TEXT PRIMARY KEY,
      cert_checklist_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS smtp_outbox (
      id SERIAL PRIMARY KEY,
      email_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS week_templates (
      week_number INTEGER PRIMARY KEY,
      template_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS questions (
      week_number TEXT PRIMARY KEY,
      questions_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS troubleshooting_db (
      code TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      steps_json TEXT
    )
  `);

  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS onboarding_progress (
      user_id TEXT PRIMARY KEY,
      onboarding_check_states_json TEXT
    )
  `);

  const tables = [
    { name: 'users', fields: ['id', 'name', 'nombre', 'email', 'password', 'role', 'rol', 'avatar_initials', 'current_week', 'avg_score', 'status', 'progreso_mallas_json'] },
    { name: 'tutor_junior_mapping', fields: ['junior_id', 'tutor_id'] },
    { name: 'consultant_progress', fields: ['user_id', 'completed_weeks_json', 'checklist_states_json', 'test_scores_json', 'test_attempts_json', 'test_times_json', 'deliverables_json', 'comments_json', 'game_scores_json'] },
    { name: 'mentoring_logs', fields: ['id', 'junior_id', 'tutor_name', 'date', 'topic', 'duration', 'ids'] },
    { name: 'calendar_events', fields: ['id', 'title', 'type', 'junior_id', 'expert_id', 'block_day', 'time_start', 'time_end', 'planned_minutes', 'executed_minutes', 'status', 'block_reason', 'week_number'] },
    { name: 'historial_evaluaciones', fields: ['evaluacion_id', 'usuario_id', 'semana_malla', 'fecha_rendicion', 'puntaje_obtenido', 'total_preguntas', 'respuestas_usuario_json'] },
    { name: 'cert_checklists', fields: ['user_id', 'cert_checklist_json'] },
    { name: 'smtp_outbox', fields: ['id', 'email_json'] },
    { name: 'week_templates', fields: ['week_number', 'template_json'] },
    { name: 'questions', fields: ['week_number', 'questions_json'] },
    { name: 'troubleshooting_db', fields: ['code', 'title', 'description', 'steps_json'] },
    { name: 'onboarding_progress', fields: ['user_id', 'onboarding_check_states_json'] }
  ];

  console.log('🔄 Starting data migration...');
  for (const table of tables) {
    console.log(`Migrating table "${table.name}"...`);
    const rows = sqliteDb.prepare(`SELECT * FROM ${table.name}`).all();
    console.log(`Found ${rows.length} rows in SQLite.`);
    
    // Clear existing data in target table
    await pgClient.query(`DELETE FROM ${table.name}`);

    for (const row of rows) {
      const values = table.fields.map(field => row[field]);
      const placeholders = table.fields.map((_, i) => `$${i + 1}`).join(', ');
      const query = `INSERT INTO ${table.name} (${table.fields.join(', ')}) VALUES (${placeholders})`;
      await pgClient.query(query, values);
    }
    console.log(`✅ Table "${table.name}" migrated successfully.`);
  }

  // Adjust serial sequence for smtp_outbox if any rows were inserted
  try {
    await pgClient.query(`SELECT setval(pg_get_serial_sequence('smtp_outbox', 'id'), coalesce(max(id), 1), max(id) IS NOT null) FROM smtp_outbox`);
  } catch (e) {
    console.warn('Could not reset sequence for smtp_outbox:', e.message);
  }

  console.log('🎉 Database migration completed successfully!');
  sqliteDb.close();
  await pgClient.end();
}

runMigration().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
