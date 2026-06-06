const { Client } = require('pg');

const pgUrl = 'postgresql://postgres:Realaudiencia1316@db.jrssnzvcjodwfsgeiuou.supabase.co:5432/postgres';

async function updateDb() {
  const client = new Client({
    connectionString: pgUrl,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✅ Connected to Supabase database.');

    // 1. Update users table
    const progresoMallas = Array(12).fill(null).map((_, i) => ({ completado: i < 7, nota: i < 7 ? 80 : null }));
    await client.query(
      `UPDATE users 
       SET current_week = 8, progreso_mallas_json = $1 
       WHERE id = 'USR-FRANCISCA'`,
      [JSON.stringify(progresoMallas)]
    );
    console.log('✅ Updated users table for USR-FRANCISCA.');

    // 2. Prepare progress details
    const completedWeeks = [1, 2, 3, 4, 5, 6, 7];
    const checklistStates = {};
    const testScores = {};
    const testAttempts = {};
    const testTimes = {};
    const deliverables = {};
    const comments = {};
    const gameScores = {};

    for (let w = 1; w <= 12; w++) {
      checklistStates[w] = {};
      if (w <= 7) {
        testScores[w] = 80;
        testAttempts[w] = 1;
        testTimes[w] = `${10 + w}m 30s`;
        deliverables[w] = {
          fileName: `evidencia_semana_${w}_fd.pdf`,
          fileSize: "1.8 MB",
          status: "approved",
          submittedAt: new Date(Date.now() - (7 - w + 1) * 7 * 24 * 3600 * 1000).toISOString()
        };
        for (let idx = 0; idx < 10; idx++) {
          checklistStates[w][idx] = true;
        }
      } else {
        for (let idx = 0; idx < 10; idx++) {
          checklistStates[w][idx] = (w === 8 && idx < 2);
        }
      }
    }

    // 3. Check if consultant_progress row exists
    const checkRes = await client.query("SELECT 1 FROM consultant_progress WHERE user_id = 'USR-FRANCISCA'");
    if (checkRes.rows.length > 0) {
      await client.query(
        `UPDATE consultant_progress 
         SET completed_weeks_json = $1, 
             checklist_states_json = $2, 
             test_scores_json = $3, 
             test_attempts_json = $4, 
             test_times_json = $5, 
             deliverables_json = $6, 
             comments_json = $7, 
             game_scores_json = $8
         WHERE user_id = 'USR-FRANCISCA'`,
        [
          JSON.stringify(completedWeeks),
          JSON.stringify(checklistStates),
          JSON.stringify(testScores),
          JSON.stringify(testAttempts),
          JSON.stringify(testTimes),
          JSON.stringify(deliverables),
          JSON.stringify(comments),
          JSON.stringify(gameScores)
        ]
      );
      console.log('✅ Updated consultant_progress table.');
    } else {
      await client.query(
        `INSERT INTO consultant_progress (user_id, completed_weeks_json, checklist_states_json, test_scores_json, test_attempts_json, test_times_json, deliverables_json, comments_json, game_scores_json) 
         VALUES ('USR-FRANCISCA', $1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          JSON.stringify(completedWeeks),
          JSON.stringify(checklistStates),
          JSON.stringify(testScores),
          JSON.stringify(testAttempts),
          JSON.stringify(testTimes),
          JSON.stringify(deliverables),
          JSON.stringify(comments),
          JSON.stringify(gameScores)
        ]
      );
      console.log('✅ Inserted consultant_progress table.');
    }

    console.log('🎉 Done! Francisca Le Dantec is now in week 8 in Supabase!');
  } catch (err) {
    console.error('❌ Error updating database:', err);
  } finally {
    await client.end();
  }
}

updateDb();
