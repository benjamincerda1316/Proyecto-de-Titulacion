const { Sprite, useSprite, Easing, interpolate } = window;

// ---------- Design tokens (from MXBoard's own style.css) ----------
const C = {
  primary: '#A6192E',
  primaryLight: '#F7E5E8',
  primaryText: '#85101E',
  success: '#1D9E75',
  successLight: '#E1F5EE',
  warning: '#EF9F27',
  warningLight: '#FFF4E5',
  danger: '#E24B4A',
  dangerLight: '#FDECEC',
  neutralDark: '#1E1B2C',
  neutralMuted: '#6B687E',
  neutralLight: '#F5F5FA',
  neutralBorder: '#E6E5EC',
  bgApp: '#FAF9FC',
  bgCard: '#FFFFFF',
};

const FONT = "'Inter', system-ui, sans-serif";
const FONT_D = "'Outfit', 'Inter', sans-serif";

function Icon({ name, size = 16, color, style }) {
  return <i className={`ti ti-${name}`} style={{ fontSize: size, color, lineHeight: 1, ...style }} />;
}

const FRAME = { x: 210, y: 130, w: 1500, h: 800, topbar: 44 };

// ---------- Premium Animated Background with floating blurred blobs ----------
function AnimatedBackground() {
  const { time } = window.useTimeline();
  
  // Slow harmonic drifting of gradient circles
  const blob1X = 150 + Math.sin(time * 0.3) * 120;
  const blob1Y = 200 + Math.cos(time * 0.25) * 80;
  
  const blob2X = 1600 + Math.cos(time * 0.4) * 140;
  const blob2Y = 850 + Math.sin(time * 0.35) * 100;
  
  const blob3X = 850 + Math.sin(time * 0.45) * 160;
  const blob3Y = 450 + Math.cos(time * 0.4) * 120;

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#F7F6FA',
      overflow: 'hidden',
      zIndex: -1,
    }}>
      {/* Floating blurred color mesh */}
      <div style={{
        position: 'absolute', left: blob1X, top: blob1Y,
        width: 650, height: 650, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(166,25,46,0.07) 0%, rgba(166,25,46,0) 70%)',
        filter: 'blur(70px)',
        transform: 'translate(-50%, -50%)',
      }} />
      <div style={{
        position: 'absolute', left: blob2X, top: blob2Y,
        width: 750, height: 750, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(29,158,117,0.06) 0%, rgba(29,158,117,0) 70%)',
        filter: 'blur(80px)',
        transform: 'translate(-50%, -50%)',
      }} />
      <div style={{
        position: 'absolute', left: blob3X, top: blob3Y,
        width: 550, height: 550, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239,159,39,0.05) 0%, rgba(239,159,39,0) 70%)',
        filter: 'blur(60px)',
        transform: 'translate(-50%, -50%)',
      }} />
      
      {/* Premium dotted grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(#1e1b2c 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.035,
      }} />
    </div>
  );
}

// ---------- Sidebar Navigation Panel (SaaS Feel) ----------
function Sidebar({ activeTab }) {
  const items = [
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Consultant Board' },
    { id: 'calendar', icon: 'calendar', label: 'Calendar Hub' },
    { id: 'admin', icon: 'shield-check', label: 'Administration' },
    { id: 'evaluation', icon: 'vocabulary', label: 'Live Evaluation' },
    { id: 'deliverables', icon: 'file-check', label: 'Deliverables' },
  ];
  return (
    <div style={{
      width: 240, background: '#12101B', height: '100%', display: 'flex', flexDirection: 'column',
      borderRight: `1px solid rgba(255,255,255,0.06)`, padding: '24px 16px', boxSizing: 'border-box',
      flexShrink: 0,
    }}>
      {/* Brand logo */}
      <div style={{
        fontFamily: FONT_D, fontWeight: 800, fontSize: 23, color: 'white', display: 'flex',
        alignItems: 'center', gap: 8, marginBottom: 36, paddingLeft: 8
      }}>
        MX<span style={{ color: C.primary }}>Board</span>
      </div>
      
      {/* Navigation items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map(item => {
          const isActive = item.id === activeTab;
          return (
            <div key={item.id} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 8,
              fontSize: 13.5, fontWeight: 600,
              background: isActive ? C.primary : 'transparent',
              color: isActive ? 'white' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <Icon name={item.icon} size={17} color={isActive ? 'white' : 'rgba(255,255,255,0.5)'} />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- Shared browser chrome frame with smooth entry/exit animations ----------
function BrowserFrame({ children, scale = 1, opacity = 1, ty = 0, activeTab, noSidebar = false }) {
  const content = noSidebar ? (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'hidden', background: 'white' }}>
      {children}
    </div>
  ) : (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Sidebar activeTab={activeTab} />
      <div style={{ flex: 1, height: '100%', background: C.bgApp, display: 'flex', flexDirection: 'column' }}>
        {/* Top Navbar */}
        <div style={{
          height: 60, background: 'white', borderBottom: `1px solid ${C.neutralBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px',
          boxSizing: 'border-box', flexShrink: 0,
        }}>
          {/* Left search mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: C.neutralLight, padding: '6px 14px', borderRadius: 8, border: `1px solid ${C.neutralBorder}` }}>
            <Icon name="search" size={14} color={C.neutralMuted} />
            <span style={{ fontSize: 12.5, color: C.neutralMuted, fontWeight: 500 }}>Search onboarding resources...</span>
          </div>
          {/* Right profile info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <Icon name="bell" size={17} color={C.neutralMuted} />
            <div style={{ width: 1, height: 20, background: C.neutralBorder }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, fontFamily: FONT_D }}>JP</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.neutralDark }}>Javier Pérez</div>
            </div>
          </div>
        </div>
        
        {/* Content body */}
        <div style={{ flex: 1, height: 'calc(100% - 60px)', overflow: 'hidden', position: 'relative' }}>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'absolute', left: FRAME.x, top: FRAME.y + ty, width: FRAME.w, height: FRAME.h,
      borderRadius: 18, background: C.bgCard, overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(30,27,44,0.16), 0 4px 20px rgba(30,27,44,0.06)',
      border: `1px solid ${C.neutralBorder}`, boxSizing: 'border-box',
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
    }}>
      {/* Window Title Bar */}
      <div style={{
        height: FRAME.topbar, display: 'flex', alignItems: 'center', gap: 8,
        padding: '0 18px', background: '#F5F5FA', borderBottom: `1px solid ${C.neutralBorder}`,
        boxSizing: 'border-box', zIndex: 10
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#E24B4A' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#EF9F27' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#1D9E75' }} />
        </div>
        <div style={{
          margin: '0 auto', fontFamily: FONT, fontSize: 12.5, color: C.neutralMuted,
          background: '#FFFFFF', padding: '4px 24px', borderRadius: 20, letterSpacing: 0.2,
          border: `1px solid ${C.neutralBorder}`, display: 'inline-flex', alignItems: 'center', gap: 6
        }}>
          <Icon name="lock" size={11} color={C.success} /> mxboard.vercel.app
        </div>
      </div>
      
      {/* Content wrapper */}
      <div style={{
        position: 'absolute', left: 0, top: FRAME.topbar, width: '100%', height: FRAME.h - FRAME.topbar,
        overflow: 'hidden', background: C.bgApp, boxSizing: 'border-box',
      }}>
        {content}
      </div>
    </div>
  );
}

function useKenBurns(from = 1, to = 1.035) {
  const { localTime, duration } = useSprite();
  return interpolate([0, duration], [from, to], Easing.easeOutQuad)(localTime);
}

// ---------- Caption system (Apple-minimal transition-matching) ----------
function Caption({ kicker, title, x = 130, y = 900 }) {
  const { localTime, duration } = useSprite();
  const entryDur = 0.7;
  const exitDur = 0.5;
  const exitStart = duration - exitDur;
  
  let opacity = 1;
  let dy = 0;
  
  if (localTime < entryDur) {
    const t = Easing.easeOutQuad(localTime / entryDur);
    opacity = t;
    dy = (1 - t) * 15;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad((localTime - exitStart) / exitDur);
    opacity = 1 - t;
    dy = -t * 10;
  }
  
  return (
    <div style={{ position: 'absolute', left: x, top: y, opacity, transform: `translateY(${dy}px)`, willChange: 'transform, opacity' }}>
      <div style={{
        fontFamily: FONT, fontSize: 18, fontWeight: 700, color: C.primary,
        letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8,
      }}>{kicker}</div>
      <div style={{
        fontFamily: FONT_D, fontSize: 40, fontWeight: 700, color: C.neutralDark,
        letterSpacing: -0.5,
      }}>{title}</div>
    </div>
  );
}

// ================= SCENE CONTENT MOCKS =================

function ScoreRing({ pct = 91 }) {
  const r = 46, c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: 108, height: 108, flexShrink: 0 }}>
      <svg width="108" height="108" style={{ transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
        </defs>
        <circle cx="54" cy="54" r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
        <circle cx="54" cy="54" r={r} fill="none" stroke="url(#ringGrad)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: 'white', letterSpacing: -0.5 }}>{pct}%</div>
        <div style={{ fontFamily: FONT, fontSize: 9, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 0.8, fontWeight: 700 }}>Avg. Score</div>
      </div>
    </div>
  );
}

function WeekCard({ n, state, score, title }) {
  const cfg = {
    completed: { border: C.success, bg: '#F4FAF8', icon: 'circle-check', iconColor: C.success, bar: C.success },
    current: { border: C.primary, bg: 'white', icon: 'player-play', iconColor: C.primary, bar: C.primary },
    review: { border: C.warning, bg: '#FFFBF5', icon: 'clock-hour-4', iconColor: C.warning, bar: C.warning },
    locked: { border: C.neutralBorder, bg: '#F8F8FA', icon: 'lock', iconColor: C.neutralMuted, bar: 'transparent' },
  }[state];
  return (
    <div style={{
      background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: 12, padding: '16px 18px',
      minHeight: 105, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', opacity: state === 'locked' ? 0.6 : 1, boxSizing: 'border-box',
      boxShadow: '0 4px 10px rgba(30,27,44,0.02)', transition: 'transform 0.2s',
    }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: cfg.bar, borderRadius: '12px 0 0 12px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 18, color: C.neutralDark }}>W{n}</span>
        <Icon name={cfg.icon} size={16} color={cfg.iconColor} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralDark, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 10.5, color: C.neutralMuted, fontWeight: 600 }}>{state === 'completed' ? 'Passed' : state === 'current' ? 'Active now' : state === 'review' ? 'Reviewing' : 'Locked'}</div>
      </div>
      {score != null && (
        <span style={{
          position: 'absolute', right: 12, bottom: 12, fontSize: 10.5, fontWeight: 800,
          color: C.success, background: C.successLight, padding: '2px 8px', borderRadius: 6
        }}>{score}%</span>
      )}
    </div>
  );
}

function DashboardMock() {
  const weeks = [
    { n: 1, state: 'completed', score: 92, title: 'Induction & General Flow' },
    { n: 2, state: 'completed', score: 88, title: 'Trade Lifecycle & Accounting' },
    { n: 3, state: 'completed', score: 95, title: 'Accounts & Operational Logistics' },
    { n: 4, state: 'review', score: null, title: 'Accounting Rules' },
    { n: 5, state: 'current', score: null, title: 'Parameterization & Flow Rules' },
    { n: 6, state: 'locked', title: 'Mark-to-Market & EOD Close' },
    { n: 7, state: 'locked', title: 'Past Corrections (Fixing)' },
    { n: 8, state: 'locked', title: 'Technical Autonomy Rehearsal' },
  ];
  return (
    <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'hidden' }}>
      <div style={{
        background: `linear-gradient(135deg, ${C.primary} 0%, #7D1220 100%)`, borderRadius: 16,
        padding: '24px 34px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        boxSizing: 'border-box', boxShadow: '0 12px 30px rgba(166,25,46,0.15)'
      }}>
        <div>
          <span style={{
            background: 'rgba(255,255,255,0.18)', color: 'white', fontSize: 11, fontWeight: 700,
            padding: '5px 14px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: 1,
            backdropFilter: 'blur(4px)'
          }}>Phase: Induction</span>
          <div style={{ color: 'white', fontSize: 34, fontWeight: 700, fontFamily: FONT_D, margin: '12px 0 6px', letterSpacing: -0.5 }}>Hello, Javier Pérez</div>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 16, maxWidth: 520, fontWeight: 500 }}>Your technical onboarding journey at Murex Chile. Complete weekly tasks and tests to advance.</div>
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: 12, padding: '10px 16px', width: 380, boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: 12, fontWeight: 700, marginBottom: 6 }}>
              <span>Onboarding Progress</span><span>6 of 12 weeks completed (50%)</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 20 }}>
              <div style={{ width: '50%', height: '100%', background: 'white', borderRadius: 20 }} />
            </div>
          </div>
        </div>
        <ScoreRing pct={91} />
      </div>
      
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark, marginBottom: 14 }}>
          <Icon name="calendar-event" size={19} color={C.primary} /> Learning Roadmap (Weeks 1 - 8)
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {weeks.map(w => <WeekCard key={w.n} {...w} />)}
        </div>
      </div>
    </div>
  );
}

function CalendarMock() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const events = {
    2: { label: 'Weekly Tutoring', sub: 'Benjamín · 10:00', color: C.primary, icon: 'user' },
    4: { label: 'Manager Review', sub: 'Luana Ortega · 15:00', color: C.success, icon: 'shield-check' },
  };
  
  return (
    <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', gap: 24, overflow: 'hidden' }}>
      {/* Calendar Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 20, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="calendar" size={20} color={C.primary} /> My Calendar Hub
            </div>
            <div style={{ fontSize: 13, color: C.neutralMuted, marginTop: 2, fontWeight: 500 }}>Monthly schedule of mandatory tutoring, reviews, and syncs.</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', padding: '6px 14px', borderRadius: 8, border: `1px solid ${C.neutralBorder}` }}>
            <Icon name="chevron-left" size={14} color={C.neutralMuted} />
            <span style={{ fontWeight: 700, fontSize: 13, color: C.neutralDark, fontFamily: FONT_D }}>July 2026</span>
            <Icon name="chevron-right" size={14} color={C.neutralMuted} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, flex: 1 }}>
          {days.map((d, i) => (
            <div key={d} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: C.neutralMuted, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{d}</div>
              <div style={{
                background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 12, flex: 1,
                padding: 12, display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box',
                boxShadow: '0 4px 10px rgba(30,27,44,0.01)',
              }}>
                <div style={{ fontSize: 13, color: C.neutralDark, fontWeight: 700 }}>{i + 14}</div>
                {events[i + 1] && (
                  <div style={{
                    background: `${events[i + 1].color}08`, border: `1px solid ${events[i + 1].color}40`, color: events[i + 1].color,
                    fontSize: 12, fontWeight: 600, padding: '10px 12px', borderRadius: 8,
                    borderLeft: `3px solid ${events[i + 1].color}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                      <Icon name={events[i + 1].icon} size={11} color={events[i + 1].color} />
                      <strong>{events[i + 1].label}</strong>
                    </div>
                    <div style={{ fontWeight: 500, color: C.neutralMuted, fontSize: 11 }}>{events[i + 1].sub}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sidebar Panel */}
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Next session card */}
        <div style={{ background: `linear-gradient(135deg, #1E1B2C 0%, #110F1A 100%)`, borderRadius: 14, padding: 20, color: 'white', boxShadow: '0 8px 24px rgba(30,27,44,0.15)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Next Up</div>
          <h4 style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: 'white', margin: '0 0 6px' }}>Tutoring Session</h4>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
            <Icon name="clock" size={13} color="rgba(255,255,255,0.7)" /> Tomorrow, 10:00 AM
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.06)', padding: 10, borderRadius: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>BC</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>Benjamín Cerda</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Mentor &amp; Tutor</div>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div style={{ background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 14, padding: 20, flex: 1, boxSizing: 'border-box' }}>
          <div style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.neutralDark, marginBottom: 12 }}>Categories</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: C.neutralMuted, fontWeight: 500 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: `${C.primary}12`, border: `1px solid ${C.primary}` }} />
              Mandatory Tutoring
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: C.neutralMuted, fontWeight: 500 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: `${C.success}12`, border: `1px solid ${C.success}` }} />
              Manager Session
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: C.neutralMuted, fontWeight: 500 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: 'rgba(147,51,234,0.12)', border: '1px solid #9333ea' }} />
              Team Masterclass
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: C.neutralMuted, fontWeight: 500 }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: 'rgba(100,116,139,0.12)', border: '1px solid #64748b' }} />
              Completed Sync
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, sub, color, icon }) {
  const isUp = color === C.success;
  const strokeColor = color || C.primary;
  
  return (
    <div style={{ background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: C.neutralMuted }}>
          <Icon name={icon} size={15} color={C.neutralMuted} /> {label}
        </div>
        <div>
          <div style={{ fontFamily: FONT_D, fontSize: 28, fontWeight: 800, color: C.neutralDark, margin: '8px 0 2px', letterSpacing: -0.5 }}>{value}</div>
          <div style={{ fontSize: 11.5, color: color || C.neutralMuted, fontWeight: 600 }}>{sub}</div>
        </div>
      </div>
      
      {/* Sparkline chart */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', minHeight: 40 }}>
        <svg width="60" height="25" style={{ overflow: 'visible' }}>
          <path
            d={isUp ? "M0,20 L15,14 L30,16 L45,8 L60,4" : "M0,6 L15,14 L30,10 L45,18 L60,22"}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function AdminMock() {
  const rows = [
    { name: 'Javier Pérez', role: 'Week 9', progress: 75, score: 91, risk: false, status: 'On track' },
    { name: 'Matías Gutiérrez', role: 'Week 5', progress: 40, score: 71, risk: true, status: 'At risk' },
    { name: 'Camila Reyes', role: 'Week 11', progress: 91, score: 95, risk: false, status: 'On track' },
  ];
  return (
    <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{
            background: C.neutralDark, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px',
            borderRadius: 20, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 6,
            fontFamily: FONT_D, letterSpacing: 0.5
          }}><Icon name="shield-check" size={12} color="white" /> Administration Panel</span>
          <div style={{ fontFamily: FONT_D, fontSize: 24, fontWeight: 700, color: C.neutralDark, letterSpacing: -0.5 }}>Overview of Team Progress</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, background: C.primary, color: 'white', fontSize: 13,
          fontWeight: 700, padding: '10px 18px', borderRadius: 8, boxShadow: '0 4px 12px rgba(166,25,46,0.15)', cursor: 'pointer'
        }}><Icon name="user-plus" size={15} color="white" /> Register Consultant</div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <MetricCard label="Active Consultants" value="5" sub="+1 this month" color={C.success} icon="users" />
        <MetricCard label="Average Week" value="8.4" sub="out of 12 weeks" icon="calendar-stats" />
        <MetricCard label="Passing Rate" value="87%" sub="↑ vs target of 70%" color={C.success} icon="discount-check" />
        <MetricCard label="Pending Reviews" value="2" sub="Require evaluation" color={C.warning} icon="clipboard-list" />
      </div>
      
      <div style={{ background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(30,27,44,0.01)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr', padding: '14px 20px', background: C.neutralLight, fontSize: 11.5, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5, boxSizing: 'border-box' }}>
          <span>Consultant</span><span>Current Week</span><span>Progress</span><span>Avg. Score</span>
        </div>
        {rows.map(r => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr', padding: '14px 20px', borderTop: `1px solid ${C.neutralLight}`, alignItems: 'center', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: r.risk ? C.dangerLight : C.successLight,
                color: r.risk ? C.danger : C.success, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_D, fontWeight: 800, fontSize: 13, flexShrink: 0,
              }}>{r.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: C.neutralDark }}>{r.name}</div>
                <div style={{ fontSize: 11, color: r.risk ? C.danger : C.neutralMuted, fontWeight: 600 }}>{r.status}</div>
              </div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.neutralDark }}>{r.role}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 6, background: C.neutralLight, borderRadius: 20 }}>
                <div style={{ width: `${r.progress}%`, height: '100%', borderRadius: 20, background: r.risk ? C.warning : C.success }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.neutralDark }}>{r.progress}%</span>
            </div>
            <span style={{
              fontWeight: 800, fontSize: 12, background: r.risk ? C.dangerLight : C.successLight,
              color: r.risk ? C.danger : C.success, padding: '3px 10px', borderRadius: 6, width: 'fit-content'
            }}>{r.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestMock() {
  const options = [
    { k: 'A', text: 'Analyze and execute customer transactions on the trading platform.' },
    { k: 'B', text: 'Define accounting rules and balance journal ledger positions.' },
    { k: 'C', text: 'Set up end-of-day automation workflows and parameters.' },
    { k: 'D', text: 'Monitor system security escalation channels and accounts.' }
  ];
  return (
    <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: 720, background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 16, padding: '24px 30px', boxSizing: 'border-box', boxShadow: '0 12px 30px rgba(30,27,44,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: 0.8, marginBottom: 16, fontFamily: FONT_D }}>
          <span>MX.3 PLATFORM CERTIFICATION</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, background: C.warningLight, color: '#B26500', padding: '4px 12px', borderRadius: 8, fontWeight: 700 }}>
            <Icon name="clock" size={13} color="#B26500" /> 14:38
          </span>
        </div>
        <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, marginBottom: 18 }}>
          <div style={{ width: '42%', height: '100%', background: C.primary, borderRadius: 20 }} />
        </div>
        <div style={{ fontSize: 12.5, color: C.neutralMuted, fontWeight: 700, marginBottom: 6 }}>Question 5 of 12</div>
        <div style={{ fontSize: 17, fontWeight: 700, color: C.neutralDark, marginBottom: 20, lineHeight: 1.4 }}>
          What is the primary operational responsibility of the Front Office group?
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map((o, i) => (
            <div key={o.k} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10,
              fontSize: 13.5, border: `1px solid ${i === 0 ? C.primary : C.neutralBorder}`,
              background: i === 0 ? C.primaryLight : 'white', color: i === 0 ? C.primaryText : C.neutralDark,
              fontWeight: i === 0 ? 700 : 500, boxSizing: 'border-box', cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              <span style={{
                width: 20, height: 20, borderRadius: '50%',
                border: `2px solid ${i === 0 ? C.primary : C.neutralMuted}`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, flexShrink: 0,
                background: i === 0 ? C.primary : 'transparent',
                color: i === 0 ? 'white' : C.neutralMuted
              }}>
                {o.k}
              </span>
              {o.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeliverableMock() {
  const items = [
    { t: 'Complete the MX.3 Module Map induction', done: true },
    { t: 'Execute trade query audit cases', done: true },
    { t: 'Simulate accounts parameterization sandbox', done: false },
  ];
  return (
    <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24, overflow: 'hidden' }}>
      <div style={{ background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 14, padding: 22, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontWeight: 700, fontSize: 16, marginBottom: 16, color: C.neutralDark }}>
            <Icon name="checkbox" size={18} color={C.primary} /> Checklist Items
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map(it => (
              <div key={it.t} style={{
                display: 'flex', alignItems: 'center', gap: 10, background: it.done ? '#FAFCF9' : '#FFFFFF',
                border: `1px solid ${it.done ? C.success + '40' : C.neutralBorder}`, borderRadius: 10, padding: 12, boxSizing: 'border-box',
              }}>
                <Icon name={it.done ? 'circle-check' : 'circle'} size={17} color={it.done ? C.success : C.neutralMuted} />
                <span style={{ fontSize: 13, fontWeight: 600, color: it.done ? C.neutralMuted : C.neutralDark, textDecoration: it.done ? 'line-through' : 'none' }}>{it.t}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ background: C.neutralLight, padding: 12, borderRadius: 10, fontSize: 11.5, color: C.neutralMuted, fontWeight: 500 }}>
          Tick off checklist tasks as you complete them in the Sandbox environment to update your progress.
        </div>
      </div>
      
      <div style={{ background: 'white', border: `1px solid ${C.neutralBorder}`, borderRadius: 14, padding: 22, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontWeight: 700, fontSize: 16, marginBottom: 14, color: C.neutralDark }}>
            <Icon name="file-symlink" size={18} color={C.primary} /> Weekly Deliverables
          </div>
          <div style={{
            border: `2px dashed ${C.neutralBorder}`, borderRadius: 12, padding: '34px 16px', background: C.neutralLight, textAlign: 'center', boxSizing: 'border-box',
          }}>
            <Icon name="cloud-upload" size={34} color={C.primary} style={{ marginBottom: 10 }} />
            <div style={{ fontSize: 13, fontWeight: 700, color: C.neutralDark }}>Drag &amp; drop file here</div>
            <div style={{ fontSize: 12, color: C.neutralMuted, marginTop: 4 }}>or <span style={{ color: C.primary, textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>browse your files</span></div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: C.primaryLight, padding: '10px 14px', borderRadius: 8, border: `1px solid ${C.primary}30` }}>
          <Icon name="info-circle" size={16} color={C.primary} />
          <div style={{ fontSize: 11.5, color: C.primaryText, fontWeight: 600 }}>Weekly PPT/ZIP templates are located in the resources tab.</div>
        </div>
      </div>
    </div>
  );
}

function CertificateMock() {
  return (
    <div style={{ padding: 40, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F5F3EC' }}>
      <div style={{
        border: '12px double #C5A059', borderRadius: 8, padding: 6, background: 'white', width: 720, boxSizing: 'border-box',
        boxShadow: '0 20px 50px rgba(0,0,0,0.12)'
      }}>
        <div style={{ border: '1px solid rgba(197, 160, 89, 0.4)', padding: '36px 40px', textAlign: 'center', position: 'relative' }}>
          {/* Top decorative badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 15 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: C.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #C5A059' }}>
              <Icon name="award" size={22} color="#C5A059" />
            </div>
          </div>
          
          <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 24, color: C.neutralDark, marginBottom: 12 }}>
            MX<span style={{ color: C.primary }}>Board</span>
          </div>
          
          <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 22, color: C.primaryText, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 4 }}>Technical Qualification Certificate</div>
          <div style={{ fontSize: 13.5, color: C.neutralMuted, fontWeight: 700, marginBottom: 24, letterSpacing: 0.5 }}>Finance &amp; PL · MX.3 Platform</div>
          
          <div style={{ fontSize: 13, color: C.neutralMuted, fontStyle: 'italic', marginBottom: 6 }}>This is to certify that</div>
          <div style={{
            fontFamily: FONT_D, fontSize: 28, fontWeight: 700, color: C.neutralDark, margin: '4px 0 18px',
            borderBottom: '2px solid #C5A059', display: 'inline-block', padding: '0 40px 6px',
          }}>Javier Pérez</div>
          
          <div style={{ fontSize: 13, color: C.neutralMuted, maxWidth: 500, margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
            has successfully completed all 12 weeks of technical onboarding, masterclasses, and sandbox evaluations for the Finance &amp; Product Control track at Murex Chile.
          </div>
          
          {/* Signatures */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 36, borderTop: `1px solid ${C.neutralBorder}`, paddingTop: 20 }}>
            <div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 600, color: C.neutralDark, fontStyle: 'italic' }}>Luana Ortega</div>
              <div style={{ fontSize: 11, color: C.neutralMuted, fontWeight: 600, marginTop: 4 }}>Practice Manager</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 600, color: C.neutralDark, fontStyle: 'italic' }}>Benjamín Cerda</div>
              <div style={{ fontSize: 11, color: C.neutralMuted, fontWeight: 600, marginTop: 4 }}>Technical Tutor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= SCENE WRAPPERS (Sprite + kenburns + caption) =================

function KBFrame({ children, from = 1, to = 1.035, activeTab, noSidebar = false }) {
  const { localTime, duration } = useSprite();
  
  const entryDur = 0.8;
  const exitDur = 0.6;
  const exitStart = duration - exitDur;
  
  let opacity = 1;
  let animScale = 1;
  let ty = 0;
  
  // 1. Ken burns drift value (over the whole duration)
  const kbVal = interpolate([0, duration], [from, to], Easing.easeOutQuad)(localTime);
  
  // 2. Entry animation (0 .. entryDur)
  if (localTime < entryDur) {
    const t = localTime / entryDur;
    opacity = interpolate([0, entryDur], [0, 1], Easing.linear)(localTime);
    animScale = interpolate([0, entryDur], [0.93, 1], Easing.easeOutBack)(localTime);
    ty = interpolate([0, entryDur], [40, 0], Easing.easeOutBack)(localTime);
  }
  // 3. Exit animation (exitStart .. duration)
  else if (localTime > exitStart) {
    const t = (localTime - exitStart) / exitDur;
    opacity = interpolate([exitStart, duration], [1, 0], Easing.linear)(localTime);
    animScale = interpolate([exitStart, duration], [1, 0.96], Easing.easeInQuad)(localTime);
    ty = interpolate([exitStart, duration], [0, -25], Easing.easeInQuad)(localTime);
  }
  
  // Combine scales
  const finalScale = kbVal * animScale;
  
  return (
    <BrowserFrame scale={finalScale} opacity={opacity} ty={ty} activeTab={activeTab} noSidebar={noSidebar}>
      {children}
    </BrowserFrame>
  );
}

function IntroScene() {
  const { localTime, duration } = useSprite();
  
  const op = interpolate([0, 0.8, duration - 0.6, duration], [0, 1, 1, 0], Easing.easeInOutQuad)(localTime);
  const scale = interpolate([0, duration], [0.94, 1.02], Easing.easeOutQuad)(localTime);
  const letterSpacing = interpolate([0, duration], [-1, 2], Easing.easeOutQuad)(localTime);

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', opacity: op, transform: `scale(${scale})`,
      background: '#F5F5FA',
    }}>
      {/* Background blobs for title */}
      <div style={{
        position: 'absolute', width: 450, height: 450, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(166,25,46,0.08) 0%, rgba(166,25,46,0) 70%)',
        filter: 'blur(55px)',
      }} />
      
      <div style={{
        fontFamily: FONT_D, fontWeight: 800, fontSize: 94, color: C.neutralDark,
        letterSpacing: letterSpacing, display: 'flex', alignItems: 'center', zIndex: 1
      }}>
        MX<span style={{ color: C.primary }}>Board</span>
      </div>
      
      <div style={{
        fontFamily: FONT, fontWeight: 600, fontSize: 20, color: C.neutralMuted,
        marginTop: 16, letterSpacing: 0.5, zIndex: 1, opacity: localTime > 0.4 ? 1 : 0,
        transition: 'opacity 0.8s ease'
      }}>
        Technical Onboarding Hub · Murex Chile
      </div>
    </div>
  );
}

function OutroScene() {
  const { localTime } = useSprite();
  const op = interpolate([0, 0.8], [0, 1], Easing.easeOutQuad)(localTime);
  const scale = interpolate([0, 3], [0.98, 1.02], Easing.easeOutQuad)(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', opacity: op, transform: `scale(${scale})`,
      background: '#F5F5FA',
    }}>
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(166,25,46,0.08) 0%, rgba(166,25,46,0) 70%)',
        filter: 'blur(50px)',
      }} />
      
      <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 52, color: C.neutralDark, letterSpacing: -1, marginBottom: 12, zIndex: 1 }}>
        MX<span style={{ color: C.primary }}>Board</span>
      </div>
      <div style={{ fontFamily: FONT, fontSize: 18, color: C.neutralMuted, fontWeight: 600, letterSpacing: 0.2, zIndex: 1 }}>mxboard.vercel.app</div>
    </div>
  );
}

function FeatureScene({ kicker, title, from, to, children, activeTab, noSidebar = false }) {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <KBFrame from={from} to={to} activeTab={activeTab} noSidebar={noSidebar}>{children}</KBFrame>
      <Caption kicker={kicker} title={title} />
    </div>
  );
}

function MXBoardDemoScene() {
  return (
    <>
      <AnimatedBackground />
      
      <Sprite start={0} end={4}><IntroScene /></Sprite>

      <Sprite start={4} end={11}>
        <FeatureScene kicker="Consultant Dashboard" title="A 12-week roadmap, always clear." from={1} to={1.04} activeTab="dashboard">
          <DashboardMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={11} end={17}>
        <FeatureScene kicker="Calendar Hub" title="Tutoring and sessions, in one place." from={1} to={1.035} activeTab="calendar">
          <CalendarMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={17} end={24}>
        <FeatureScene kicker="Administration Panel" title="Full visibility into the whole team." from={1} to={1.03} activeTab="admin">
          <AdminMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={24} end={30}>
        <FeatureScene kicker="Live Evaluations" title="Technical knowledge, put to the test." from={1} to={1.04} activeTab="evaluation">
          <TestMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={30} end={36}>
        <FeatureScene kicker="Deliverables &amp; Checklists" title="Simple tracking of every milestone." from={1} to={1.03} activeTab="deliverables">
          <DeliverableMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={36} end={42}>
        <FeatureScene kicker="Certification" title="Achievement, formally recognized." from={1} to={1.035} noSidebar={true}>
          <CertificateMock />
        </FeatureScene>
      </Sprite>

      <Sprite start={42} end={45}><OutroScene /></Sprite>
    </>
  );
}

window.MXBoardDemoScene = MXBoardDemoScene;
