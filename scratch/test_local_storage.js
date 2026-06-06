const puppeteer = require('puppeteer-core');

async function main() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  const page = await browser.newPage();

  // Intercept requests to fail /api/db to force localStorage fallback
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().includes('/api/db')) {
      console.log('Intercepted API request, forcing failure...');
      request.respond({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Connection refused' })
      });
    } else {
      request.continue();
    }
  });

  // Listen for console events
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.error(`[BROWSER ERROR] ${err.toString()}`);
  });

  console.log('Navigating to http://localhost:3000/');
  
  // Set localStorage value before loading the page
  await page.evaluateOnNewDocument(() => {
    // Construct a mock db that has calendar events but might be missing fields or have null values
    const mockDb = {
      users: [
        { id: "USR-LUANA", name: "Luana Ortega", nombre: "Luana Ortega", email: "luana@murex.cl", password: "admin", role: "admin", rol: "MANAGER", avatar_initials: "LO" },
        { id: "USR-BENJAMIN", name: "Benjamín Cerda", role: "tutor", rol: "TUTOR", avatar_initials: "BC" },
        { id: "USR-FRANCISCA", name: "Francisca Le Dantec", role: "consultant", rol: "JUNIOR", avatar_initials: "FD", current_week: 1, avg_score: 0, status: "on_track" }
      ],
      week_templates: [
        { week_number: 1, title: "Semana 1", checklist_items: ["Item 1", "Item 2"] }
      ],
      consultant_progress: {
        "USR-FRANCISCA": {
          completed_weeks: [],
          checklist_states: {},
          test_scores: {},
          test_attempts: {},
          test_times: {},
          deliverables: {},
          comments: {},
          game_scores: {}
        }
      },
      questions: {},
      tutor_junior_mapping: { "USR-FRANCISCA": "USR-BENJAMIN" },
      mentoring_logs: [],
      smtp_outbox: [],
      troubleshooting_db: [],
      cert_checklists: {},
      calendar_events: [
        {
          id: 'ev-test-1',
          title: 'Citrix y TradeQuery',
          type: 'tutoring',
          junior_id: 'USR-FRANCISCA',
          expert_id: 'USR-BENJAMIN',
          block_day: '2026-06-15',
          time_start: null,
          time_end: '15:30',
          planned_minutes: 90,
          executed_minutes: 120,
          status: 'ejecutado',
          block_reason: 'NA',
          week_number: 2
        },
        {
          id: 'ev-test-2',
          title: 'E-tradepad',
          type: 'tutoring',
          junior_id: 'USR-FRANCISCA',
          expert_id: 'USR-BENJAMIN',
          block_day: '2026-06-15',
          time_start: '16:00',
          time_end: '18:00',
          planned_minutes: 120,
          executed_minutes: 120,
          status: 'ejecutado',
          block_reason: 'NA',
          week_number: 2
        }
      ]
    };
    localStorage.setItem('mxboard_db_v3', JSON.stringify(mockDb));
  });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  console.log('Logging in as Luana...');
  await page.type('#login-email', 'luana@murex.cl');
  await page.type('#login-password', 'admin');
  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 1000));

  console.log('Clicking on Calendario Hub tab...');
  await page.click('#admin-tab-calendar');

  await new Promise(r => setTimeout(r, 1000));

  console.log('Taking screenshot...');
  await page.screenshot({ path: '/Users/admin/Downloads/Investigación Pasantía Benja Garmin /mxboard/calendar_local_storage_screenshot.png' });

  await browser.close();
}

main().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
