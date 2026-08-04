const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');
const dns = require('dns');

if (typeof dns.setDefaultResultOrder === 'function') {
  dns.setDefaultResultOrder('ipv4first');
}

// Load environment variables manually from .env file (one level up from api/)
try {
  const envPath = path.join(__dirname, '..', '.env');
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

const app = express();
app.use(express.json({ limit: '50mb' })); // Allow large payloads for DB states
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Enable CORS and disable browser caching for frontend/backend integration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Disable browser caching for development
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve frontend static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

let pool = null;
let sqliteDb = null;
let useSqlite = false;
let postgresConnected = false;
let initPromise = null;

let Database = null;
if (!process.env.VERCEL) {
  try {
    Database = require('better-sqlite3');
  } catch (err) {
    console.warn('better-sqlite3 not available in this environment:', err.message);
  }
}

const DEFAULT_SUPABASE_URL = 'postgresql://postgres:Realaudiencia1316@db.jrssnzvcjodwfsgeiuou.supabase.co:5432/postgres';
const pgUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || DEFAULT_SUPABASE_URL;

if (pgUrl && !pgUrl.includes('[YOUR-PASSWORD]')) {
  try {
    pool = new Pool({
      connectionString: pgUrl,
      ssl: {
        rejectUnauthorized: false
      },
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 10000
    });
  } catch (e) {
    console.warn('Failed to construct Postgres Pool:', e.message);
  }
}

function convertSql(sql) {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

const db = {
  exec: async (sql) => {
    if (useSqlite) {
      if (sql.includes('PRAGMA')) return;
      return sqliteDb.exec(sql);
    }
    if (sql.includes('PRAGMA')) return;
    return pool.query(sql);
  },
  get: async (sql, params = []) => {
    if (useSqlite) {
      return sqliteDb.prepare(sql).get(...params);
    }
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return res.rows[0];
  },
  all: async (sql, params = []) => {
    if (useSqlite) {
      return sqliteDb.prepare(sql).all(...params);
    }
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return res.rows;
  },
  run: async (sql, params = []) => {
    if (useSqlite) {
      const res = sqliteDb.prepare(sql).run(...params);
      return { changes: res.changes };
    }
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return {
      changes: res.rowCount
    };
  }
};

// Open database connection and create tables
async function initDatabase() {
  postgresConnected = false;

  if (pool) {
    try {
      const client = await pool.connect();
      client.release();
      postgresConnected = true;
      useSqlite = false;
      console.log('✅ Supabase PostgreSQL connected successfully.');
    } catch (err) {
      console.warn('⚠️ Could not connect to Supabase PostgreSQL:', err.message);
    }
  }

  if (!postgresConnected) {
    if (!Database) {
      console.warn('⚠️ No PostgreSQL connection and better-sqlite3 module unavailable.');
      return;
    }
    console.log('🔄 Falling back to local SQLite database (mxboard.db)...');
    try {
      const sqlitePath = path.join(__dirname, '..', 'mxboard.db');
      sqliteDb = new Database(sqlitePath);
      sqliteDb.pragma('journal_mode = WAL');
      useSqlite = true;
      console.log('✅ Local SQLite database (mxboard.db) connected successfully.');
    } catch (err) {
      console.error('❌ Failed to connect to local SQLite database:', err.message);
      return;
    }
  }

  // Create Users table
  await db.exec(`
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
      progreso_mallas_json TEXT,
      entry_date TEXT
    )
  `);

  // Run dynamic schema migration to ensure entry_date exists in live databases
  try {
    const alterSql = useSqlite ? `ALTER TABLE users ADD COLUMN entry_date TEXT` : `ALTER TABLE users ADD COLUMN IF NOT EXISTS entry_date TEXT`;
    await db.exec(alterSql);
  } catch (err) {
    // Column already exists
  }

  // Create Tutor Junior Mapping table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tutor_junior_mapping (
      junior_id TEXT PRIMARY KEY,
      tutor_id TEXT
    )
  `);

  // Create Consultant Progress table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS consultant_progress (
      user_id TEXT PRIMARY KEY,
      completed_weeks_json TEXT,
      checklist_states_json TEXT,
      test_scores_json TEXT,
      test_attempts_json TEXT,
      test_times_json TEXT,
      deliverables_json TEXT,
      comments_json TEXT,
      game_scores_json TEXT,
      quiz_spent_json TEXT
    )
  `);

  try {
    const alterSql = useSqlite ? `ALTER TABLE consultant_progress ADD COLUMN quiz_spent_json TEXT` : `ALTER TABLE consultant_progress ADD COLUMN IF NOT EXISTS quiz_spent_json TEXT`;
    await db.exec(alterSql);
  } catch (err) {
    // Column already exists
  }

  // Create Mentoring Logs table
  await db.exec(`
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

  // Create Calendar Events table
  await db.exec(`
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

  // Add extra columns if they don't exist
  const calCols = [
    { col: 'organizador_id', type: 'TEXT' },
    { col: 'expertos_asistentes_ids', type: 'TEXT' },
    { col: 'group_id', type: 'TEXT' },
    { col: 'tipo_sesion', type: 'TEXT' },
    { col: 'estado_confirmacion', type: 'TEXT' },
    { col: 'bloqueado_edicion', type: 'BOOLEAN DEFAULT FALSE' }
  ];
  for (const c of calCols) {
    try {
      const alterSql = useSqlite ? `ALTER TABLE calendar_events ADD COLUMN ${c.col} ${c.type}` : `ALTER TABLE calendar_events ADD COLUMN IF NOT EXISTS ${c.col} ${c.type}`;
      await db.exec(alterSql);
    } catch (err) {
      // Column already exists
    }
  }

  // Create Historial Evaluaciones table
  await db.exec(`
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

  // Create Cert Checklists table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS cert_checklists (
      user_id TEXT PRIMARY KEY,
      cert_checklist_json TEXT
    )
  `);

  // Create SMTP Outbox table (using serial in Postgres)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS smtp_outbox (
      id SERIAL PRIMARY KEY,
      email_json TEXT
    )
  `);

  // Create Week Templates table (static templates)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS week_templates (
      week_number INTEGER PRIMARY KEY,
      template_json TEXT
    )
  `);

  // Create Questions table (static question banks)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS questions (
      week_number TEXT PRIMARY KEY,
      questions_json TEXT
    )
  `);

  // Create Onboarding Progress table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS onboarding_progress (
      user_id TEXT PRIMARY KEY,
      onboarding_check_states_json TEXT
    )
  `);

  // Create Troubleshooting DB table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS troubleshooting_db (
      code TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      steps_json TEXT
    )
  `);

  // Create Uploaded Files table (to persist deliverables without localstorage limit)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS uploaded_files (
      user_id TEXT,
      week_number INTEGER,
      file_name TEXT,
      file_type TEXT,
      file_data TEXT,
      PRIMARY KEY (user_id, week_number)
    )
  `);

  const usersCount = await db.get('SELECT COUNT(*) as count FROM users');
  if (!usersCount || parseInt(usersCount.count, 10) === 0) {
    console.log('Seeding default users into Supabase...');
    const defaultUsers = [
      { id: "USR-LUANA", name: "Luana Ortega", nombre: "Luana Ortega", email: "luana@murex.cl", password: "admin", role: "admin", rol: "MANAGER", avatar_initials: "LO" },
      { id: "USR-BORIS", name: "Boris Castro", nombre: "Boris Castro", email: "bcastro@murex.cl", password: "admin", role: "admin", rol: "MANAGER", avatar_initials: "BC" },
      { id: "USR-FERNANDO", name: "Fernando Araya", nombre: "Fernando Araya", email: "fernando.araya@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "FA" },
      { id: "USR-SANDRA", name: "Sandra Segura", nombre: "Sandra Segura", email: "sandra.segura@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "SS" },
      { id: "USR-ALEJANDRA", name: "Alejandra González", nombre: "Alejandra González", email: "alejandra.gonzalez@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "AG" },
      { id: "USR-BENJAMIN", name: "Benjamín Cerda", nombre: "Benjamín Cerda", email: "benjamin.cerda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "BC" },
      { id: "USR-JUAN", name: "Juan Francisco Orrego", nombre: "Juan Francisco Orrego", email: "juan.orrego@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "JO" },
      { id: "USR-CAROLINA", name: "Carolina Sepúlveda", nombre: "Carolina Sepúlveda", email: "carolina.sepulveda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "CS" },
      { id: "USR-VALENTINA", name: "Valentina Lara", nombre: "Valentina Lara", email: "valentina.lara@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "VL" },
      { id: "USR-MUREX-LEARNING", name: "Murex Learning", nombre: "Murex Learning", email: "murex.learning@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "ML" },
      { id: "USR-FRANCISCA", name: "Francisca Le Dantec", nombre: "Francisca Le Dantec", email: "francisca.ledantec@murex.cl", password: "password", role: "consultant", rol: "JUNIOR", avatar_initials: "FD", current_week: 12, avg_score: 88, status: "completed", entry_date: "2026-04-13" }
    ];

    const scoresList = [85, 88, 90, 84, 86, 92, 85, 88, 90, 85, 88, 92];
    const progresoMallas = Array(12).fill(null).map((_, i) => ({ completado: true, nota: scoresList[i] }));

    for (const u of defaultUsers) {
      await db.run(
        `INSERT INTO users (id, name, nombre, email, password, role, rol, avatar_initials, current_week, avg_score, status, progreso_mallas_json, entry_date) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [u.id, u.name, u.nombre, u.email, u.password, u.role, u.rol, u.avatar_initials, u.current_week || 1, u.avg_score || 0, u.status || 'on_track', JSON.stringify(u.id === 'USR-FRANCISCA' ? progresoMallas : []), u.entry_date || null]
      );
    }

    // Seed mappings
    await db.run(`INSERT INTO tutor_junior_mapping (junior_id, tutor_id) VALUES ('USR-FRANCISCA', 'USR-BENJAMIN')`);
    
    // Seed initial progress for Francisca (All 12 weeks completed)
    const initialProgress = {
      completed_weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      checklist_states: {},
      test_scores: {},
      test_attempts: {},
      test_times: {},
      deliverables: {},
      comments: {},
      game_scores: {}
    };

    const weekCount = 12;
    const completedCount = 12;
    for (let w = 1; w <= weekCount; w++) {
      initialProgress.checklist_states[w] = {};
      if (w <= completedCount) {
        initialProgress.test_scores[w] = 80;
        initialProgress.test_attempts[w] = 1;
        initialProgress.test_times[w] = `${10 + w}m 30s`;
        initialProgress.deliverables[w] = {
          fileName: `evidencia_semana_${w}_fd.pdf`,
          fileSize: "1.8 MB",
          status: "approved",
          submittedAt: new Date(Date.now() - (completedCount - w + 1) * 7 * 24 * 3600 * 1000).toISOString()
        };
        // Seed game score for Week 2
        if (w === 2) {
          initialProgress.game_scores[2] = {
            score: 25,
            total: 25,
            completedAt: new Date(Date.now() - (completedCount - 2 + 1) * 7 * 24 * 3600 * 1000).toISOString()
          };
        }
        // Mark all items as true (assume max 10 items)
        for (let idx = 0; idx < 10; idx++) {
          initialProgress.checklist_states[w][idx] = true;
        }
      } else {
        // Active or locked weeks
        for (let idx = 0; idx < 10; idx++) {
          initialProgress.checklist_states[w][idx] = (w === completedCount + 1 && idx < 2);
        }
      }
    }

    await db.run(
      `INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json, quiz_spent_json) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'USR-FRANCISCA',
        JSON.stringify(initialProgress.completed_weeks),
        JSON.stringify(initialProgress.checklist_states),
        JSON.stringify(initialProgress.test_scores),
        JSON.stringify(initialProgress.test_attempts),
        JSON.stringify(initialProgress.test_times),
        JSON.stringify(initialProgress.deliverables),
        JSON.stringify(initialProgress.comments),
        JSON.stringify(initialProgress.game_scores),
        JSON.stringify({})
      ]
    );

    console.log('Default users and basic progress seeded successfully.');
  }

  // Ensure default entry dates for existing users (Francisca Le Dantec and Juanito Perez)
  try {
    await db.run("UPDATE users SET entry_date = '2026-04-13' WHERE id = 'USR-FRANCISCA' AND (entry_date IS NULL OR entry_date = '')");
    await db.run("UPDATE users SET entry_date = '2026-06-08' WHERE email = 'juanperez@murex.cl' AND (entry_date IS NULL OR entry_date = '')");
    console.log('Migrated entry dates for Francisca and Juanito Perez successfully.');
  } catch (err) {
    console.error('Failed to migrate entry_dates for existing users:', err.message);
  }

  // Ensure all JUNIORs have a "Llegada" event on their entry date at 09:30
  try {
    const juniors = await db.all("SELECT id, name, entry_date FROM users WHERE rol = 'JUNIOR' AND entry_date IS NOT NULL AND entry_date != ''");
    for (const jr of juniors) {
      const eventId = `ev-llegada-${jr.id}`;
      const existingEvent = await db.get("SELECT id FROM calendar_events WHERE id = ?", [eventId]);
      if (!existingEvent) {
        await db.run(
          `INSERT INTO calendar_events (id, title, type, junior_id, expert_id, block_day, time_start, time_end, planned_minutes, status, block_reason, week_number, organizador_id, estado_confirmacion, bloqueado_edicion)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            eventId,
            `Llegada de ${jr.name}`,
            'llegada',
            jr.id,
            'USR-LUANA',
            jr.entry_date,
            '09:30',
            '10:30',
            60,
            'aprobado',
            `Primer día de ingreso del Junior ${jr.name} al equipo de Finance & PL.`,
            1,
            'USR-LUANA',
            'FIXED',
            true
          ]
        );
        console.log(`Created arrival event for ${jr.name} on ${jr.entry_date}`);
      }
    }
  } catch (err) {
    console.error('Failed to create arrival events for existing juniors:', err.message);
  }

  console.log('Database initialized successfully.');
}

// GET API to fetch full state
app.get('/api/db', async (req, res) => {
  try {
    if (initPromise) {
      await Promise.race([
        initPromise,
        new Promise(resolve => setTimeout(resolve, 3000))
      ]);
    }

    if (!postgresConnected && !useSqlite) {
      console.warn('DB pool and sqliteDb unavailable, returning complete default memory state.');
      try {
        const backupData = require('../scratch/backup_db_before_translation.json');
        return res.json(backupData);
      } catch (err) {
        return res.json({ users: [], calendar_events: [], consultant_progress: {} });
      }
    }

    const usersCount = await db.get('SELECT COUNT(*) as count FROM users');
    if (!usersCount || parseInt(usersCount.count, 10) === 0) {
      return res.json({ empty: true });
    }

    const users = await db.all('SELECT * FROM users');
    const mappingRows = await db.all('SELECT * FROM tutor_junior_mapping');
    const progressRows = await db.all('SELECT * FROM consultant_progress');
    const logs = await db.all('SELECT * FROM mentoring_logs');
    const events = await db.all('SELECT * FROM calendar_events');
    const evaluations = await db.all('SELECT * FROM historial_evaluaciones');
    const certRows = await db.all('SELECT * FROM cert_checklists');
    const smtpRows = await db.all('SELECT * FROM smtp_outbox');
    const templates = await db.all('SELECT * FROM week_templates');
    const questions = await db.all('SELECT * FROM questions');
    const troubleshooting = await db.all('SELECT * FROM troubleshooting_db');
    const onboardingRows = await db.all('SELECT * FROM onboarding_progress');

    // Map onboarding_progress back to object
    const onboarding_progress = {};
    onboardingRows.forEach(row => {
      onboarding_progress[row.user_id] = JSON.parse(row.onboarding_check_states_json || '{}');
    });

    // Map tutor_junior_mapping back to object
    const tutor_junior_mapping = {};
    mappingRows.forEach(row => {
      tutor_junior_mapping[row.junior_id] = row.tutor_id;
    });

    // Map consultant_progress back to object
    const consultant_progress = {};
    progressRows.forEach(row => {
      consultant_progress[row.user_id] = {
        completed_weeks: JSON.parse(row.completed_weeks_json || '[]'),
        checklist_states: JSON.parse(row.checklist_states_json || '{}'),
        test_scores: JSON.parse(row.test_scores_json || '{}'),
        test_attempts: JSON.parse(row.test_attempts_json || '{}'),
        test_times: JSON.parse(row.test_times_json || '{}'),
        deliverables: JSON.parse(row.deliverables_json || '{}'),
        comments: JSON.parse(row.comments_json || '{}'),
        game_scores: JSON.parse(row.game_scores_json || '{}'),
        quiz_spent: JSON.parse(row.quiz_spent_json || '{}')
      };
    });

    // Map cert_checklists back to object
    const cert_checklists = {};
    certRows.forEach(row => {
      cert_checklists[row.user_id] = JSON.parse(row.cert_checklist_json || '[]');
    });

    // Map questions back to object
    const questionsMap = {};
    questions.forEach(row => {
      questionsMap[row.week_number] = JSON.parse(row.questions_json || '[]');
    });

    // Parse SMTP outbox emails
    const smtp_outbox = smtpRows.map(row => JSON.parse(row.email_json || '{}'));

    // Parse week templates
    const parsedTemplates = templates.map(row => JSON.parse(row.template_json || '{}'));

    // Parse troubleshooting steps
    const parsedTroubleshooting = troubleshooting.map(row => ({
      code: row.code,
      name: row.title,
      description: row.description,
      steps: JSON.parse(row.steps_json || '[]')
    }));

    // Format calendar events
    const formattedEvents = events.map(ev => ({
      id: ev.id,
      title: ev.title,
      type: ev.type,
      junior_id: ev.junior_id,
      expert_id: ev.expert_id,
      block_day: ev.block_day,
      time_start: ev.time_start,
      time_end: ev.time_end,
      planned_minutes: ev.planned_minutes,
      executed_minutes: ev.executed_minutes,
      status: ev.status,
      block_reason: ev.block_reason,
      week_number: ev.week_number,
      organizador_id: ev.organizador_id || (ev.type === 'extra_support' ? ev.junior_id : ev.expert_id),
      expertos_asistentes_ids: ev.expertos_asistentes_ids ? JSON.parse(ev.expertos_asistentes_ids) : null,
      group_id: ev.group_id || null,
      tipo_sesion: ev.tipo_sesion || null,
      estado_confirmacion: ev.estado_confirmacion || null,
      bloqueado_edicion: ev.bloqueado_edicion ? true : false
    }));

    // Format users with progress parsing
    const formattedUsers = users.map(u => ({
      ...u,
      progreso_mallas: JSON.parse(u.progreso_mallas_json || '[]')
    }));

    // Format historial_evaluaciones
    const formattedEvaluaciones = evaluations.map(e => ({
      ...e,
      respuestas_usuario: JSON.parse(e.respuestas_usuario_json || '{}')
    }));

    res.json({
      users: formattedUsers,
      tutor_junior_mapping,
      consultant_progress,
      mentoring_logs: logs,
      calendar_events: formattedEvents,
      historial_evaluaciones: formattedEvaluaciones,
      cert_checklists,
      smtp_outbox,
      week_templates: parsedTemplates,
      questions: questionsMap,
      troubleshooting_db: parsedTroubleshooting,
      onboarding_progress
    });
  } catch (err) {
    console.error('Error fetching database state:', err);
    res.status(500).json({ error: err.message });
  }
});

// Mutex queue to prevent concurrent writes from corrupting transactions
let dbMutex = Promise.resolve();

// POST API to bulk update full state
app.post('/api/db/save', async (req, res) => {
  const data = req.body;
  if (!data || !data.users) {
    return res.status(400).json({ error: 'Invalid database payload.' });
  }

  if (initPromise) {
    await initPromise;
  }
  if (!pool && !sqliteDb) {
    return res.status(500).json({ error: 'Database is not initialized.' });
  }

  dbMutex = dbMutex.then(async () => {
    if (useSqlite) {
      try {
        const tx = sqliteDb.transaction(() => {
          sqliteDb.prepare('DELETE FROM users').run();
          const stmtUser = sqliteDb.prepare(`INSERT INTO users (id, name, nombre, email, password, role, rol, avatar_initials, current_week, avg_score, status, progreso_mallas_json, entry_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
          for (const u of data.users) {
            stmtUser.run(u.id, u.name, u.nombre || u.name, u.email, u.password, u.role, u.rol, u.avatar_initials, u.current_week || u.semana_actual, u.avg_score, u.status, JSON.stringify(u.progreso_mallas || []), u.entry_date || null);
          }

          sqliteDb.prepare('DELETE FROM tutor_junior_mapping').run();
          if (data.tutor_junior_mapping) {
            const stmtMapping = sqliteDb.prepare(`INSERT INTO tutor_junior_mapping (junior_id, tutor_id) VALUES (?, ?)`);
            for (const [junior_id, tutor_id] of Object.entries(data.tutor_junior_mapping)) {
              stmtMapping.run(junior_id, tutor_id);
            }
          }

          sqliteDb.prepare('DELETE FROM consultant_progress').run();
          if (data.consultant_progress) {
            const stmtProg = sqliteDb.prepare(`INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json, quiz_spent_json) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
            for (const [user_id, p] of Object.entries(data.consultant_progress)) {
              stmtProg.run(
                user_id,
                JSON.stringify(p.completed_weeks || []),
                JSON.stringify(p.checklist_states || {}),
                JSON.stringify(p.test_scores || {}),
                JSON.stringify(p.test_attempts || {}),
                JSON.stringify(p.test_times || {}),
                JSON.stringify(p.deliverables || {}),
                JSON.stringify(p.comments || {}),
                JSON.stringify(p.game_scores || {}),
                JSON.stringify(p.quiz_spent || {})
              );
            }
          }

          sqliteDb.prepare('DELETE FROM mentoring_logs').run();
          if (data.mentoring_logs) {
            const stmtLogs = sqliteDb.prepare(`INSERT INTO mentoring_logs (id, junior_id, tutor_name, date, topic, duration, ids) VALUES (?, ?, ?, ?, ?, ?, ?)`);
            for (const l of data.mentoring_logs) {
              stmtLogs.run(l.id, l.junior_id, l.tutor_name, l.date, l.topic, l.duration, l.ids);
            }
          }

          sqliteDb.prepare('DELETE FROM calendar_events').run();
          if (data.calendar_events) {
            const stmtEv = sqliteDb.prepare(`INSERT INTO calendar_events (id, title, type, junior_id, expert_id, block_day, time_start, time_end, planned_minutes, executed_minutes, status, block_reason, week_number, organizador_id, expertos_asistentes_ids, group_id, tipo_sesion, estado_confirmacion, bloqueado_edicion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
            for (const ev of data.calendar_events) {
              stmtEv.run(
                ev.id, ev.title, ev.type, ev.junior_id, ev.expert_id, ev.block_day, ev.time_start, ev.time_end, ev.planned_minutes, ev.executed_minutes, ev.status, ev.block_reason, ev.week_number,
                ev.organizador_id || null, ev.expertos_asistentes_ids ? JSON.stringify(ev.expertos_asistentes_ids) : null, ev.group_id || null, ev.tipo_sesion || null, ev.estado_confirmacion || null, ev.bloqueado_edicion ? 1 : 0
              );
            }
          }

          sqliteDb.prepare('DELETE FROM historial_evaluaciones').run();
          if (data.historial_evaluaciones) {
            const stmtEval = sqliteDb.prepare(`INSERT INTO historial_evaluaciones (evaluacion_id, usuario_id, semana_malla, fecha_rendicion, puntaje_obtenido, total_preguntas, respuestas_usuario_json) VALUES (?, ?, ?, ?, ?, ?, ?)`);
            for (const e of data.historial_evaluaciones) {
              stmtEval.run(e.evaluacion_id, e.usuario_id, e.semana_malla, e.fecha_rendicion, e.puntaje_obtenido, e.total_preguntas, JSON.stringify(e.respuestas_usuario || {}));
            }
          }

          sqliteDb.prepare('DELETE FROM cert_checklists').run();
          if (data.cert_checklists) {
            const stmtCert = sqliteDb.prepare(`INSERT INTO cert_checklists (user_id, cert_checklist_json) VALUES (?, ?)`);
            for (const [user_id, list] of Object.entries(data.cert_checklists)) {
              stmtCert.run(user_id, JSON.stringify(list));
            }
          }

          sqliteDb.prepare('DELETE FROM smtp_outbox').run();
          if (data.smtp_outbox) {
            const stmtSmtp = sqliteDb.prepare(`INSERT INTO smtp_outbox (email_json) VALUES (?)`);
            for (const s of data.smtp_outbox) {
              stmtSmtp.run(JSON.stringify(s));
            }
          }

          sqliteDb.prepare('DELETE FROM week_templates').run();
          if (data.week_templates) {
            const stmtWk = sqliteDb.prepare(`INSERT INTO week_templates (week_number, template_json) VALUES (?, ?)`);
            for (const t of data.week_templates) {
              stmtWk.run(t.week_number, JSON.stringify(t));
            }
          }

          sqliteDb.prepare('DELETE FROM questions').run();
          if (data.questions) {
            const stmtQ = sqliteDb.prepare(`INSERT INTO questions (week_number, questions_json) VALUES (?, ?)`);
            for (const [week, qlist] of Object.entries(data.questions)) {
              stmtQ.run(week, JSON.stringify(qlist));
            }
          }

          sqliteDb.prepare('DELETE FROM troubleshooting_db').run();
          if (data.troubleshooting_db) {
            const stmtTb = sqliteDb.prepare(`INSERT INTO troubleshooting_db (code, title, description, steps_json) VALUES (?, ?, ?, ?)`);
            for (const t of data.troubleshooting_db) {
              stmtTb.run(t.code, t.name || t.title, t.description, JSON.stringify(t.steps || []));
            }
          }

          sqliteDb.prepare('DELETE FROM onboarding_progress').run();
          if (data.onboarding_progress) {
            const stmtOnb = sqliteDb.prepare(`INSERT INTO onboarding_progress (user_id, onboarding_check_states_json) VALUES (?, ?)`);
            for (const [user_id, states] of Object.entries(data.onboarding_progress)) {
              stmtOnb.run(user_id, JSON.stringify(states));
            }
          }
        });
        tx();
        return res.json({ success: true });
      } catch (err) {
        console.error('Error saving SQLite database state:', err);
        return res.status(500).json({ error: err.message });
      }
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const txDb = {
        exec: (sql) => client.query(sql),
        run: (sql, params = []) => client.query(convertSql(sql), params)
      };

      // 1. Users
      await txDb.exec('DELETE FROM users');
      for (const u of data.users) {
        await txDb.run(
          `INSERT INTO users (id, name, nombre, email, password, role, rol, avatar_initials, current_week, avg_score, status, progreso_mallas_json, entry_date) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
          [u.id, u.name, u.nombre || u.name, u.email, u.password, u.role, u.rol, u.avatar_initials, u.current_week || u.semana_actual, u.avg_score, u.status, JSON.stringify(u.progreso_mallas || []), u.entry_date || null]
        );
      }

      // 2. Tutor Junior Mapping
      await txDb.exec('DELETE FROM tutor_junior_mapping');
      if (data.tutor_junior_mapping) {
        for (const [junior_id, tutor_id] of Object.entries(data.tutor_junior_mapping)) {
          await txDb.run(
            `INSERT INTO tutor_junior_mapping (junior_id, tutor_id) VALUES ($1, $2)`,
            [junior_id, tutor_id]
          );
        }
      }

      // 3. Consultant Progress
      await txDb.exec('DELETE FROM consultant_progress');
      if (data.consultant_progress) {
        for (const [user_id, p] of Object.entries(data.consultant_progress)) {
          await txDb.run(
            `INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json, quiz_spent_json) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [
              user_id,
              JSON.stringify(p.completed_weeks || []),
              JSON.stringify(p.checklist_states || {}),
              JSON.stringify(p.test_scores || {}),
              JSON.stringify(p.test_attempts || {}),
              JSON.stringify(p.test_times || {}),
              JSON.stringify(p.deliverables || {}),
              JSON.stringify(p.comments || {}),
              JSON.stringify(p.game_scores || {}),
              JSON.stringify(p.quiz_spent || {})
            ]
          );
        }
      }

      // 4. Mentoring Logs
      await txDb.exec('DELETE FROM mentoring_logs');
      if (data.mentoring_logs) {
        for (const l of data.mentoring_logs) {
          await txDb.run(
            `INSERT INTO mentoring_logs (id, junior_id, tutor_name, date, topic, duration, ids) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [l.id, l.junior_id, l.tutor_name, l.date, l.topic, l.duration, l.ids]
          );
        }
      }

      // 5. Calendar Events
      await txDb.exec('DELETE FROM calendar_events');
      if (data.calendar_events) {
        for (const ev of data.calendar_events) {
          await txDb.run(
            `INSERT INTO calendar_events (id, title, type, junior_id, expert_id, block_day, time_start, time_end, planned_minutes, executed_minutes, status, block_reason, week_number, organizador_id, expertos_asistentes_ids, group_id, tipo_sesion, estado_confirmacion, bloqueado_edicion) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`,
            [
              ev.id, 
              ev.title, 
              ev.type, 
              ev.junior_id, 
              ev.expert_id, 
              ev.block_day, 
              ev.time_start, 
              ev.time_end, 
              ev.planned_minutes, 
              ev.executed_minutes, 
              ev.status, 
              ev.block_reason, 
              ev.week_number,
              ev.organizador_id || null,
              ev.expertos_asistentes_ids ? JSON.stringify(ev.expertos_asistentes_ids) : null,
              ev.group_id || null,
              ev.tipo_sesion || null,
              ev.estado_confirmacion || null,
              ev.bloqueado_edicion || false
            ]
          );
        }
      }

      // 6. Historial Evaluaciones
      await txDb.exec('DELETE FROM historial_evaluaciones');
      if (data.historial_evaluaciones) {
        for (const e of data.historial_evaluaciones) {
          await txDb.run(
            `INSERT INTO historial_evaluaciones (evaluacion_id, usuario_id, semana_malla, fecha_rendicion, puntaje_obtenido, total_preguntas, respuestas_usuario_json) 
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [e.evaluacion_id, e.usuario_id, e.semana_malla, e.fecha_rendicion, e.puntaje_obtenido, e.total_preguntas, JSON.stringify(e.respuestas_usuario || {})]
          );
        }
      }

      // 7. Cert Checklists
      await txDb.exec('DELETE FROM cert_checklists');
      if (data.cert_checklists) {
        for (const [user_id, list] of Object.entries(data.cert_checklists)) {
          await txDb.run(
            `INSERT INTO cert_checklists (user_id, cert_checklist_json) VALUES ($1, $2)`,
            [user_id, JSON.stringify(list)]
          );
        }
      }

      // 8. SMTP Outbox
      await txDb.exec('DELETE FROM smtp_outbox');
      if (data.smtp_outbox) {
        for (const s of data.smtp_outbox) {
          await txDb.run(
            `INSERT INTO smtp_outbox (email_json) VALUES ($1)`,
            [JSON.stringify(s)]
          );
        }
      }

      // 9. Week Templates (Static configuration)
      await txDb.exec('DELETE FROM week_templates');
      if (data.week_templates) {
        for (const t of data.week_templates) {
          await txDb.run(
            `INSERT INTO week_templates (week_number, template_json) VALUES ($1, $2)`,
            [t.week_number, JSON.stringify(t)]
          );
        }
      }

      // 10. Questions (Static configuration)
      await txDb.exec('DELETE FROM questions');
      if (data.questions) {
        for (const [week, qlist] of Object.entries(data.questions)) {
          await txDb.run(
            `INSERT INTO questions (week_number, questions_json) VALUES ($1, $2)`,
            [week, JSON.stringify(qlist)]
          );
        }
      }

      // 11. Troubleshooting DB
      await txDb.exec('DELETE FROM troubleshooting_db');
      if (data.troubleshooting_db) {
        for (const t of data.troubleshooting_db) {
          await txDb.run(
            `INSERT INTO troubleshooting_db (code, title, description, steps_json) VALUES ($1, $2, $3, $4)`,
            [t.code, t.name || t.title, t.description, JSON.stringify(t.steps || [])]
          );
        }
      }

      // 12. Onboarding Progress
      await txDb.exec('DELETE FROM onboarding_progress');
      if (data.onboarding_progress) {
        for (const [user_id, states] of Object.entries(data.onboarding_progress)) {
          await txDb.run(
            `INSERT INTO onboarding_progress (user_id, onboarding_check_states_json) VALUES ($1, $2)`,
            [user_id, JSON.stringify(states)]
          );
        }
      }

      await client.query('COMMIT');
      res.json({ success: true });
    } catch (err) {
      try {
        await client.query('ROLLBACK');
      } catch (rollbackErr) {
        // Ignore rollback failure if no transaction was active
      }
      console.error('Error saving database state:', err);
      res.status(500).json({ error: err.message });
    } finally {
      client.release();
    }
  }).catch((e) => {
    console.error('Fatal queue error:', e);
  });
});

// POST /api/upload-file (persists trainee PDF upload)
app.post('/api/upload-file', async (req, res) => {
  try {
    if (initPromise) await initPromise;
    const { user_id, week_number, file_name, file_type, file_data } = req.body;
    if (!user_id || !week_number || !file_name || !file_data) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await db.run(
      `INSERT INTO uploaded_files (user_id, week_number, file_name, file_type, file_data)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT (user_id, week_number) DO UPDATE
       SET file_name = EXCLUDED.file_name, file_type = EXCLUDED.file_type, file_data = EXCLUDED.file_data`,
      [user_id, parseInt(week_number), file_name, file_type || 'application/pdf', file_data]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('Error in /api/upload-file:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/download-file (fetches trainee PDF upload)
app.get('/api/download-file', async (req, res) => {
  try {
    if (initPromise) await initPromise;
    const { user_id, week_number } = req.query;
    if (!user_id || !week_number) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const row = await db.get(
      'SELECT file_name, file_type, file_data FROM uploaded_files WHERE user_id = ? AND week_number = ?',
      [user_id, parseInt(week_number)]
    );

    if (!row) {
      return res.status(404).json({ error: 'File not found' });
    }

    res.json(row);
  } catch (err) {
    console.error('Error in /api/download-file:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  initPromise = initDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.error('Failed to initialize database:', err);
  });
} else {
  // Eagerly initialize DDL setup on serverless boot
  initPromise = initDatabase().catch(err => console.error('Serverless DB DDL failed:', err));
}

module.exports = app;
