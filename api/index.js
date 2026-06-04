const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const fs = require('fs');

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

let pool;

const pgUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
if (pgUrl && !pgUrl.includes('[YOUR-PASSWORD]')) {
  pool = new Pool({
    connectionString: pgUrl,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

function convertSql(sql) {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

const db = {
  exec: async (sql) => {
    if (sql.includes('PRAGMA')) return; // Ignore SQLite PRAGMA statements
    return pool.query(sql);
  },
  get: async (sql, params = []) => {
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return res.rows[0];
  },
  all: async (sql, params = []) => {
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return res.rows;
  },
  run: async (sql, params = []) => {
    const converted = convertSql(sql);
    const res = await pool.query(converted, params);
    return {
      changes: res.rowCount
    };
  }
};

// Open database connection and create tables
async function initDatabase() {
  if (!pool) {
    const pgUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    if (!pgUrl || pgUrl.includes('[YOUR-PASSWORD]')) {
      console.warn('\n⚠️ WARNING: DATABASE_URL or POSTGRES_URL is not set.');
      console.warn('Please update the environment variables with your actual Supabase database password to run properly.');
      return;
    }

    pool = new Pool({
      connectionString: pgUrl,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }

  // Test pool connection
  try {
    const client = await pool.connect();
    client.release();
    console.log('✅ Supabase PostgreSQL connected successfully.');
  } catch (err) {
    console.error('❌ Failed to connect to Supabase PostgreSQL:', err.message);
    console.error('Please verify your DATABASE_URL password in the .env file.');
    return;
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
      progreso_mallas_json TEXT
    )
  `);

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
      game_scores_json TEXT
    )
  `);

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

  // Create Troubleshooting DB table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS troubleshooting_db (
      code TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      steps_json TEXT
    )
  `);

  const usersCount = await db.get('SELECT COUNT(*) as count FROM users');
  if (!usersCount || parseInt(usersCount.count, 10) === 0) {
    console.log('Seeding default users into Supabase...');
    const defaultUsers = [
      { id: "USR-LUANA", name: "Luana Ortega", nombre: "Luana Ortega", email: "luana@murex.cl", password: "admin", role: "admin", rol: "MANAGER", avatar_initials: "LO" },
      { id: "USR-FERNANDO", name: "Fernando Araya", nombre: "Fernando Araya", email: "fernando.araya@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "FA" },
      { id: "USR-SANDRA", name: "Sandra Segura", nombre: "Sandra Segura", email: "sandra.segura@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "SS" },
      { id: "USR-ALEJANDRA", name: "Alejandra González", nombre: "Alejandra González", email: "alejandra.gonzalez@murex.cl", password: "password", role: "senior", rol: "SENIOR", avatar_initials: "AG" },
      { id: "USR-BENJAMIN", name: "Benjamín Cerda", nombre: "Benjamín Cerda", email: "benjamin.cerda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "BC" },
      { id: "USR-JUAN", name: "Juan Francisco Orrego", nombre: "Juan Francisco Orrego", email: "juan.orrego@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "JO" },
      { id: "USR-CAROLINA", name: "Carolina Sepúlveda", nombre: "Carolina Sepúlveda", email: "carolina.sepulveda@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "CS" },
      { id: "USR-VALENTINA", name: "Valentina Lara", nombre: "Valentina Lara", email: "valentina.lara@murex.cl", password: "password", role: "tutor", rol: "TUTOR", avatar_initials: "VL" },
      { id: "USR-FRANCISCA", name: "Francisca Le Dantec", nombre: "Francisca Le Dantec", email: "francisca.ledantec@murex.cl", password: "password", role: "consultant", rol: "JUNIOR", avatar_initials: "FD", current_week: 1, avg_score: 0, status: "on_track" }
    ];

    for (const u of defaultUsers) {
      await db.run(
        `INSERT INTO users (id, name, nombre, email, password, role, rol, avatar_initials, current_week, avg_score, status, progreso_mallas_json) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [u.id, u.name, u.nombre, u.email, u.password, u.role, u.rol, u.avatar_initials, u.current_week || 1, u.avg_score || 0, u.status || 'on_track', JSON.stringify([])]
      );
    }

    // Seed mappings
    await db.run(`INSERT INTO tutor_junior_mapping (junior_id, tutor_id) VALUES ('USR-FRANCISCA', 'USR-BENJAMIN')`);
    
    // Seed initial progress for Francisca (starting at week 1)
    const initialProgress = {
      completed_weeks: [],
      checklist_states: {},
      test_scores: {},
      test_attempts: {},
      test_times: {},
      deliverables: {},
      comments: {},
      game_scores: {}
    };

    await db.run(
      `INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        'USR-FRANCISCA',
        JSON.stringify(initialProgress.completed_weeks),
        JSON.stringify(initialProgress.checklist_states),
        JSON.stringify(initialProgress.test_scores),
        JSON.stringify(initialProgress.test_attempts),
        JSON.stringify(initialProgress.test_times),
        JSON.stringify(initialProgress.deliverables),
        JSON.stringify(initialProgress.comments),
        JSON.stringify(initialProgress.game_scores)
      ]
    );

    console.log('Default users and basic progress seeded successfully.');
  }

  console.log('Database initialized successfully.');
}

// GET API to fetch full state
app.get('/api/db', async (req, res) => {
  try {
    if (!pool) {
      return res.status(500).json({ error: 'Database is not initialized.' });
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
        game_scores: JSON.parse(row.game_scores_json || '{}')
      };
    });

    // Map cert_checklists back to object
    const cert_checklists = {};
    certRows.forEach(row => {
      cert_checklists[row.user_id] = JSON.parse(row.cert_checklist_json || '{}');
    });

    // Parse user objects
    const parsedUsers = users.map(u => ({
      id: u.id,
      name: u.name,
      nombre: u.nombre || u.name,
      email: u.email,
      password: u.password,
      role: u.role,
      rol: u.rol,
      avatar_initials: u.avatar_initials,
      current_week: u.current_week,
      semana_actual: u.current_week,
      avg_score: u.avg_score,
      status: u.status,
      progreso_mallas: JSON.parse(u.progreso_mallas_json || '[]')
    }));

    // Parse evaluation history
    const parsedEvaluations = evaluations.map(e => ({
      evaluacion_id: e.evaluacion_id,
      usuario_id: e.usuario_id,
      semana_malla: e.semana_malla,
      fecha_rendicion: e.fecha_rendicion,
      puntaje_obtenido: e.puntaje_obtenido,
      total_preguntas: e.total_preguntas,
      respuestas_usuario: JSON.parse(e.respuestas_usuario_json || '{}')
    }));

    // Parse calendar events
    const parsedEvents = events.map(ev => ({
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
      week_number: ev.week_number
    }));

    // Parse templates
    const parsedTemplates = templates.map(t => JSON.parse(t.template_json));

    // Parse questions dictionary
    const parsedQuestions = {};
    questions.forEach(q => {
      parsedQuestions[q.week_number] = JSON.parse(q.questions_json);
    });

    // Parse troubleshooting items
    const parsedTroubleshooting = troubleshooting.map(t => ({
      code: t.code,
      title: t.title,
      description: t.description,
      steps: JSON.parse(t.steps_json || '[]')
    }));

    // Parse SMTP outbox emails
    const parsedSmtp = smtpRows.map(s => JSON.parse(s.email_json));

    res.json({
      users: parsedUsers,
      week_templates: parsedTemplates,
      consultant_progress,
      questions: parsedQuestions,
      tutor_junior_mapping,
      mentoring_logs: logs.map(l => ({
        id: l.id,
        junior_id: l.junior_id,
        tutor_name: l.tutor_name,
        date: l.date,
        topic: l.topic,
        duration: l.duration,
        ids: l.ids
      })),
      smtp_outbox: parsedSmtp,
      troubleshooting_db: parsedTroubleshooting,
      cert_checklists,
      calendar_events: parsedEvents,
      historial_evaluaciones: parsedEvaluations
    });
  } catch (err) {
    console.error('Error fetching database state:', err);
    res.status(500).json({ error: err.message });
  }
});

let dbMutex = Promise.resolve();

// POST API to save full state
app.post('/api/db/save', (req, res) => {
  const data = req.body;
  if (!data || !data.users) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  if (!pool) {
    return res.status(500).json({ error: 'Database is not initialized.' });
  }

  dbMutex = dbMutex.then(async () => {
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
          `INSERT INTO users (id, name, nombre, email, password, role, rol, avatar_initials, current_week, avg_score, status, progreso_mallas_json) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
          [u.id, u.name, u.nombre || u.name, u.email, u.password, u.role, u.rol, u.avatar_initials, u.current_week || u.semana_actual, u.avg_score, u.status, JSON.stringify(u.progreso_mallas || [])]
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
            `INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
              user_id,
              JSON.stringify(p.completed_weeks || []),
              JSON.stringify(p.checklist_states || {}),
              JSON.stringify(p.test_scores || {}),
              JSON.stringify(p.test_attempts || {}),
              JSON.stringify(p.test_times || {}),
              JSON.stringify(p.deliverables || {}),
              JSON.stringify(p.comments || {}),
              JSON.stringify(p.game_scores || {})
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
            `INSERT INTO calendar_events (id, title, type, junior_id, expert_id, block_day, time_start, time_end, planned_minutes, executed_minutes, status, block_reason, week_number) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [ev.id, ev.title, ev.type, ev.junior_id, ev.expert_id, ev.block_day, ev.time_start, ev.time_end, ev.planned_minutes, ev.executed_minutes, ev.status, ev.block_reason, ev.week_number]
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
            [t.code, t.title, t.description, JSON.stringify(t.steps || [])]
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

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  initDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  }).catch(err => {
    console.error('Failed to initialize database:', err);
  });
} else {
  // Eagerly initialize DDL setup on serverless boot
  initDatabase().catch(err => console.error('Serverless DB DDL failed:', err));
}

module.exports = app;
