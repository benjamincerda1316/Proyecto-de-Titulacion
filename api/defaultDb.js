const fs = require('fs');
const path = require('path');

let defaultDbData = null;

try {
  const backupPath = path.join(__dirname, '..', 'scratch', 'backup_db_before_translation.json');
  if (fs.existsSync(backupPath)) {
    defaultDbData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  }
} catch (e) {
  console.warn('Could not read backup json at build time:', e.message);
}

if (!defaultDbData) {
  const scoresList = [85, 88, 90, 84, 86, 92, 85, 88, 90, 85, 88, 92];
  const completedWeeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const checklistStates = {};
  const testScores = {};
  const testAttempts = {};
  const testTimes = {};
  const deliverables = {};
  const gameScores = {
    '2': { score: 25, total: 25, completedAt: '2026-06-15T10:00:00.000Z' },
    '4': { score: 100, total: 100, completedAt: '2026-07-02T14:30:00.000Z' }
  };

  for (let w = 1; w <= 12; w++) {
    checklistStates[w] = {};
    testScores[w] = scoresList[w - 1];
    testAttempts[w] = 1;
    testTimes[w] = `${10 + w}m 30s`;
    deliverables[w] = {
      fileName: `evidencia_semana_${w}_fd.pdf`,
      fileSize: "1.8 MB",
      status: "approved",
      submittedAt: new Date(Date.now() - (12 - w + 1) * 7 * 24 * 3600 * 1000).toISOString()
    };
    for (let idx = 0; idx < 10; idx++) {
      checklistStates[w][idx] = true;
    }
  }

  defaultDbData = {
    users: [
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
      { id: "USR-FRANCISCA", name: "Francisca Le Dantec", nombre: "Francisca Le Dantec", email: "francisca.ledantec@murex.cl", password: "password", role: "consultant", rol: "JUNIOR", avatar_initials: "FD", current_week: 12, avg_score: 88, status: "completed", entry_date: "2026-04-13" },
      { id: "u-5qymlk2bj", name: "Juanito Perez", nombre: "Juanito Perez", email: "juanperez@murex.cl", password: "password", role: "consultant", rol: "JUNIOR", avatar_initials: "JP", current_week: 4, avg_score: 91, status: "on_track", entry_date: "2026-06-08" }
    ],
    tutor_junior_mapping: { "USR-FRANCISCA": "USR-BENJAMIN" },
    consultant_progress: {
      "USR-FRANCISCA": {
        completed_weeks: completedWeeks,
        checklist_states: checklistStates,
        test_scores: testScores,
        test_attempts: testAttempts,
        test_times: testTimes,
        deliverables: deliverables,
        comments: {},
        game_scores: gameScores
      }
    },
    mentoring_logs: [],
    calendar_events: [
      { id: "ev-import-1", title: "Citrix y TradeQuery", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-21", time_start: "14:00", time_end: "15:30", planned_minutes: 90, executed_minutes: 120, status: "ejecutado", block_reason: "NA", week_number: 2 },
      { id: "ev-import-2", title: "E-tradepad", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-22", time_start: "14:00", time_end: "16:00", planned_minutes: 120, executed_minutes: 120, status: "ejecutado", block_reason: "NA", week_number: 2 },
      { id: "ev-import-3", title: "QA and Test", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-24", time_start: "15:00", time_end: "16:00", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 2 },
      { id: "ev-import-4", title: "Introduction to Simple Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-27", time_start: "11:00", time_end: "13:00", planned_minutes: 120, executed_minutes: 120, status: "ejecutado", block_reason: "NA", week_number: 3 },
      { id: "ev-import-5", title: "Introduction to Dynamic Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-28", time_start: "16:00", time_end: "17:00", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 3 },
      { id: "ev-import-6", title: "Introduction to Formula Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-29", time_start: "11:00", time_end: "12:36", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 3 },
      { id: "ev-import-7", title: "Q&A and Review", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-04-30", time_start: "11:00", time_end: "13:00", planned_minutes: 120, executed_minutes: 120, status: "ejecutado", block_reason: "NA", week_number: 3 },
      { id: "ev-import-8", title: "Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-04", time_start: "11:00", time_end: "11:30", planned_minutes: 30, executed_minutes: 30, status: "ejecutado", block_reason: "NA", week_number: 4 },
      { id: "ev-import-9", title: "Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-05", time_start: "11:00", time_end: "11:30", planned_minutes: 30, executed_minutes: 30, status: "ejecutado", block_reason: "NA", week_number: 4 },
      { id: "ev-import-10", title: "Q&A and Review", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-08", time_start: "15:00", time_end: "16:00", planned_minutes: 90, executed_minutes: 90, status: "ejecutado", block_reason: "NA", week_number: 4 },
      { id: "ev-import-11", title: "Introduction to Rules", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-11", time_start: "11:00", time_end: "12:00", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 5 },
      { id: "ev-import-12", title: "Introduction to Rules", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-12", time_start: "12:00", time_end: "12:48", planned_minutes: 48, executed_minutes: 48, status: "ejecutado", block_reason: "NA", week_number: 5 },
      { id: "ev-import-13", title: "Rules & Accounts", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-14", time_start: "15:00", time_end: "15:34", planned_minutes: 34, executed_minutes: 34, status: "ejecutado", block_reason: "NA", week_number: 5 },
      { id: "ev-import-14", title: "Q&A and Review", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-15", time_start: "16:00", time_end: "17:00", planned_minutes: 57, executed_minutes: 57, status: "ejecutado", block_reason: "NA", week_number: 5 },
      { id: "ev-import-15", title: "Drop 1", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-18", time_start: "11:00", time_end: "11:30", planned_minutes: 30, executed_minutes: 30, status: "ejecutado", block_reason: "NA", week_number: 6 },
      { id: "ev-import-16", title: "Recap: Back from Jambo", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-25", time_start: "11:00", time_end: "11:15", planned_minutes: 15, executed_minutes: 15, status: "ejecutado", block_reason: "NA", week_number: 7 },
      { id: "ev-import-17", title: "Accounting Rules for flows", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-05-29", time_start: "11:15", time_end: "12:45", planned_minutes: 90, executed_minutes: 90, status: "ejecutado", block_reason: "NA", week_number: 7 },
      { id: "ev-import-18", title: "Q&A Liquidation", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-CAROLINA", block_day: "2026-05-25", time_start: "17:00", time_end: "18:05", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 7 },
      { id: "ev-import-19", title: "Q&A Liquidation", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-CAROLINA", block_day: "2026-06-01", time_start: "17:00", time_end: "18:00", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 8 },
      { id: "ev-import-20", title: "Q&A Liquidation", type: "extra_support", junior_id: "USR-FRANCISCA", expert_id: "USR-CAROLINA", block_day: "2026-06-02", time_start: "11:00", time_end: "12:00", planned_minutes: 60, executed_minutes: 60, status: "ejecutado", block_reason: "NA", week_number: 8 },
      { id: "ev-import-21", title: "1-1 Luana", type: "coaching", junior_id: "USR-FRANCISCA", expert_id: "USR-LUANA", block_day: "2026-06-03", time_start: "11:30", time_end: "12:00", planned_minutes: 30, executed_minutes: 30, status: "ejecutado", block_reason: "NA", week_number: 8 },
      { id: "ev-import-22", title: "Feedback: Feedback", type: "FEEDBACK_ALINEAMIENTO", junior_id: "USR-FRANCISCA", expert_id: "USR-LUANA", block_day: "2026-06-08", time_start: "11:00", time_end: "12:00", planned_minutes: null, executed_minutes: null, status: null, block_reason: "NA", week_number: 9 },
      { id: "ev-import-23", title: "Tutoría: Revisión de Ejercicio", type: "tutoring", junior_id: "USR-FRANCISCA", expert_id: "USR-BENJAMIN", block_day: "2026-06-10", time_start: "16:00", time_end: "18:00", planned_minutes: 120, executed_minutes: 120, status: "ejecutado", block_reason: "NA", week_number: 8 },
      { id: "ev-import-24", title: "Llegada de Francisca Le Dantec", type: "llegada", junior_id: "USR-FRANCISCA", expert_id: "USR-LUANA", block_day: "2026-04-13", time_start: "09:30", time_end: "10:30", planned_minutes: null, executed_minutes: null, status: null, block_reason: "NA", week_number: 1 },
      { id: "ev-import-25", title: "Llegada de Juanito Perez", type: "llegada", junior_id: "u-5qymlk2bj", expert_id: "USR-LUANA", block_day: "2026-06-08", time_start: "09:30", time_end: "10:30", planned_minutes: null, executed_minutes: null, status: null, block_reason: "NA", week_number: 1 }
    ]
  };
}

module.exports = defaultDbData;
