// MXBoard demo video scene — built on animations.jsx (Stage/Sprite/TextSprite/etc)
// All copy below is lifted directly from the real MXBoard source (index.html / app.js)
const { Sprite, useSprite, Easing, interpolate } = window;

// ---------- Design tokens (Apple minimal: White & Murex Red #D4215B) ----------
const C = {
  primary: '#D4215B',
  primaryLight: '#FFF0F3',
  primaryText: '#D4215B',
  success: '#D4215B', // Completed uses Murex Red as per Apple minimal spec
  successLight: '#FFF0F3',
  warning: '#888888',
  warningLight: '#F2F2F2',
  danger: '#D4215B',
  dangerLight: '#FFF0F3',
  neutralDark: '#0A0A0A', // Pure rich black for text
  neutralMuted: '#888888', // Apple grey secondary text
  neutralLight: '#F2F2F2', // Minimal light grey
  neutralBorder: '#F2F2F2', // Minimal border grey
  bgApp: '#FFFFFF',
  bgCard: '#FFFFFF',
};

const FONT = "'Inter', system-ui, sans-serif";
const FONT_D = "'Outfit', 'Inter', sans-serif";

function Icon({ name, size = 16, color, style }) {
  return <i className={`ti ti-${name}`} style={{ fontSize: size, color, lineHeight: 1, ...style }} />;
}

const FRAME = { x: 210, y: 130, w: 1500, h: 800, topbar: 44 };

// ---------- Minimal Pure White Background Container ----------
function AnimatedBackground() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: '#FFFFFF',
      zIndex: -1,
    }} />
  );
}

// ---------- Shared minimal browser window frame (No Sidebars, clean navigation) ----------
function BrowserFrame({ children, scale = 1, opacity = 1, ty = 0, activeTab, noNavbar = false }) {
  const content = noNavbar ? (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', overflow: 'hidden', background: 'white' }}>
      {children}
    </div>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      {/* Top Navbar */}
      <div style={{
        height: 60, background: 'white', borderBottom: `1.5px solid ${C.neutralBorder}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px',
        boxSizing: 'border-box', flexShrink: 0,
      }}>
        {/* Left Brand Logo */}
        <div style={{
          fontFamily: FONT_D, fontWeight: 800, fontSize: 22, color: C.neutralDark, display: 'flex',
          alignItems: 'center', gap: 8
        }}>
          MX<span style={{ color: C.primary }}>Board</span>
        </div>
        
        {/* Center navigation tabs mock */}
        <div style={{ display: 'flex', gap: 28, fontSize: 13.5, fontWeight: 700, color: C.neutralMuted }}>
          <span style={{ color: activeTab === 'dashboard' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'dashboard' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Consultant Board</span>
          <span style={{ color: activeTab === 'calendar' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'calendar' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Calendar Hub</span>
          <span style={{ color: activeTab === 'admin' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'admin' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Administration</span>
          <span style={{ color: activeTab === 'evaluation' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'evaluation' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Live Evaluation</span>
          <span style={{ color: activeTab === 'deliverables' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'deliverables' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Deliverables</span>
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
      <div style={{ flex: 1, height: 'calc(100% - 60px)', overflow: 'hidden', position: 'relative', background: '#FFFFFF' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{
      position: 'absolute', left: FRAME.x, top: FRAME.y + ty, width: FRAME.w, height: FRAME.h,
      borderRadius: 18, background: C.bgCard, overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.02)',
      border: `1.5px solid ${C.neutralBorder}`, boxSizing: 'border-box',
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
    }}>
      {/* Window Title Bar */}
      <div style={{
        height: FRAME.topbar, display: 'flex', alignItems: 'center', gap: 8,
        padding: '0 18px', background: '#FFFFFF', borderBottom: `1.5px solid ${C.neutralBorder}`,
        boxSizing: 'border-box', zIndex: 10
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F2F2F2' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F2F2F2' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F2F2F2' }} />
        </div>
        <div style={{
          margin: '0 auto', fontFamily: FONT, fontSize: 12.5, color: C.neutralMuted,
          background: '#FFFFFF', padding: '4px 24px', borderRadius: 20, letterSpacing: 0.2,
          border: `1.5px solid ${C.neutralBorder}`, display: 'inline-flex', alignItems: 'center', gap: 6
        }}>
          <Icon name="lock" size={11} color={C.primary} /> mxboard.vercel.app
        </div>
      </div>
      
      {/* Content wrapper */}
      <div style={{
        position: 'absolute', left: 0, top: FRAME.topbar, width: '100%', height: FRAME.h - FRAME.topbar,
        overflow: 'hidden', background: '#FFFFFF', boxSizing: 'border-box',
      }}>
        {content}
      </div>
    </div>
  );
}


// ================= INDIVIDUAL SCENE COMPONENTS =================

// SCENE 1 — COLD OPEN `0:00–0:06`
function ColdOpen() {
  const { localTime } = useSprite();
  
  let opacity = 0;
  if (localTime >= 2 && localTime < 3) {
    opacity = 1;
  } else if (localTime >= 3 && localTime < 3.8) {
    opacity = interpolate([3, 3.8], [1, 0], Easing.linear)(localTime);
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#FFFFFF'
    }}>
      <div style={{
        fontFamily: FONT, fontSize: 44, fontWeight: 300, color: C.neutralDark,
        opacity, transition: 'opacity 0.1s', letterSpacing: '-0.01em'
      }}>
        10 months.
      </div>
    </div>
  );
}

// SCENE 2 — TITLE ARRIVAL `0:06–0:10`
function TitleArrival() {
  const { localTime } = useSprite();
  
  const t = Math.min(localTime / 0.6, 1);
  const opacity = t;
  const scale = interpolate([0, 1], [0.8, 1.0], Easing.easeOutQuad)(t);

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#FFFFFF'
    }}>
      <div style={{
        fontFamily: FONT_D, fontSize: 94, fontWeight: 600, color: C.primary,
        letterSpacing: '-0.02em', opacity, transform: `scale(${scale})`
      }}>
        MXBoard
      </div>
    </div>
  );
}

// SCENE 3 — LOGIN `0:10–20`
function LoginScene() {
  const { localTime } = useSprite();
  
  // Zoom in dolly scale: 1 -> 3.2 using cubic-bezier-like easeOutQuart (0s to 3s)
  const zoomT = Math.min(localTime / 3.0, 1);
  const scale = interpolate([0, 1], [1, 3.2], Easing.easeOutQuart)(zoomT);
  
  // Character typing mock (3.5s to 5.0s)
  const username = "Newcomer";
  let typedUser = "";
  if (localTime >= 3.5) {
    const sliceLen = Math.floor(Math.min((localTime - 3.5) / 1.2, 1) * username.length);
    typedUser = username.slice(0, sliceLen);
  }

  // Password typing mock (5.5s to 7.0s)
  let typedPass = "";
  if (localTime >= 5.5) {
    const dotsCount = Math.floor(Math.min((localTime - 5.5) / 1.2, 1) * 8);
    typedPass = "● ".repeat(dotsCount).trim();
  }

  // Murex Red Bouncing Arrow (7.0s to 9.0s)
  const showArrow = localTime >= 7.0 && localTime < 9.0;
  let arrowDy = 0;
  if (showArrow) {
    arrowDy = Math.abs(Math.sin((localTime - 7.0) * Math.PI * 2)) * 6;
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#FFFFFF', display: 'flex',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
    }}>
      <div style={{
        width: FRAME.w, height: FRAME.h, border: `1.5px solid ${C.neutralBorder}`,
        background: '#FFFFFF', borderRadius: 18, position: 'relative', overflow: 'hidden',
        transform: `scale(${scale})`, transformOrigin: 'center center'
      }}>
        {/* Browser Top Header */}
        <div style={{
          height: FRAME.topbar, display: 'flex', alignItems: 'center',
          padding: '0 18px', background: '#FFFFFF', borderBottom: `1.5px solid ${C.neutralBorder}`
        }}>
          <div style={{ display: 'flex', gap: 7 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F2F2F2' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F2F2F2' }} />
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F2F2F2' }} />
          </div>
        </div>
        
        {/* Browser Content (Zoom Target) */}
        <div style={{
          position: 'absolute', inset: `${FRAME.topbar}px 0 0 0`, display: 'flex',
          alignItems: 'center', justifyContent: 'center', background: '#FFFFFF'
        }}>
          {/* Login Window Card */}
          <div style={{
            width: 320, padding: '24px 28px', border: `1.5px solid ${C.neutralBorder}`,
            borderRadius: 12, background: 'white', display: 'flex', flexDirection: 'column',
            gap: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.02)', position: 'relative'
          }}>
            <div style={{ fontFamily: FONT_D, fontSize: 22, fontWeight: 800, color: C.primary, textAlign: 'center', marginBottom: 4 }}>
              MX<span style={{ color: C.primary }}>Board</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Username</label>
              <div style={{ padding: '8px 12px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 6, fontSize: 13, fontWeight: 600, color: C.neutralDark, minHeight: 34, background: '#FFFFFF', display: 'flex', alignItems: 'center' }}>
                {typedUser}
                {localTime >= 3.5 && localTime < 5.0 && <span style={{ borderLeft: '2px solid black', marginLeft: 2, height: 14 }} />}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Password</label>
              <div style={{ padding: '8px 12px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 6, fontSize: 13, fontWeight: 600, color: C.neutralDark, minHeight: 34, background: '#FFFFFF', display: 'flex', alignItems: 'center' }}>
                {typedPass}
                {localTime >= 5.5 && localTime < 7.0 && <span style={{ borderLeft: '2px solid black', marginLeft: 2, height: 14 }} />}
              </div>
            </div>
            
            <div style={{
              padding: '10px', background: localTime >= 9.0 ? '#B01A47' : '#D4215B', color: 'white',
              borderRadius: 8, fontSize: 13, fontWeight: 700, textAlign: 'center', marginTop: 8,
              cursor: 'pointer'
            }}>
              Sign In
            </div>

            {/* Murex Red Bouncing Arrow */}
            {showArrow && (
              <div style={{
                position: 'absolute', left: 148, bottom: -20 - arrowDy,
                color: C.primary, display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// SCENE 4 — DASHBOARD REVEAL `0:20–0:32`
function WeekBlock({ n, state, title, opacity, translateY }) {
  const isCompleted = state === 'completed';
  const isCurrent = state === 'current';
  
  const bg = isCompleted ? '#D4215B' : '#FFFFFF';
  const border = isCompleted ? 'none' : isCurrent ? '2px solid #D4215B' : '1.5px solid #F2F2F2';
  const color = isCompleted ? '#FFFFFF' : '#0A0A0A';
  const subColor = isCompleted ? 'rgba(255,255,255,0.7)' : '#888888';
  
  return (
    <div style={{
      background: bg, border, borderRadius: 10, padding: '12px 14px',
      minHeight: 82, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', opacity, transform: `translateY(${translateY}px)`, boxSizing: 'border-box',
      boxShadow: isCompleted ? '0 4px 12px rgba(212,33,91,0.06)' : 'none',
      willChange: 'transform, opacity'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 15, color }}>Week {n}</span>
        {isCompleted && <Icon name="circle-check" size={14} color="#FFFFFF" />}
        {isCurrent && <Icon name="player-play" size={14} color="#D4215B" />}
      </div>
      <div style={{ fontSize: 11.5, fontWeight: 700, color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {title}
      </div>
      <div style={{ fontSize: 10, color: subColor, fontWeight: 600 }}>
        {isCompleted ? 'Completed ✓' : isCurrent ? 'Active now' : 'Locked'}
      </div>
    </div>
  );
}

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

function DashboardScene() {
  const { localTime } = useSprite();
  
  // 1. Zoom Out (0s to 1.8s): scale 3.2 -> 1.0
  const zoomOutT = Math.min(localTime / 1.8, 1);
  const zoomScale = interpolate([0, 1], [3.2, 1.0], Easing.easeOutQuad)(zoomOutT);

  const weeks = [
    { n: 1, state: 'completed', title: 'Induction & General Flow' },
    { n: 2, state: 'completed', title: 'Trade Lifecycle & Accounting' },
    { n: 3, state: 'completed', title: 'Accounts & Operational Logistics' },
    { n: 4, state: 'completed', title: 'Accounting Rules' },
    { n: 5, state: 'completed', title: 'Parameterization & Flow Rules' },
    { n: 6, state: 'completed', title: 'Mark-to-Market & EOD Close' },
    { n: 7, state: 'completed', title: 'Past Corrections (Fixing)' },
    { n: 8, state: 'completed', title: 'Technical Autonomy Rehearsal' },
    { n: 9, state: 'completed', title: 'Go Live with the Finance Team' },
    { n: 10, state: 'completed', title: 'Housekeeper & CTT Creation' },
    { n: 11, state: 'completed', title: 'Calendars & Accruals Processing' },
    { n: 12, state: 'current', title: 'Accounting Liquidation' },
  ];

  return (
    <BrowserFrame scale={zoomScale} activeTab="dashboard">
      <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
        {/* Top Banner */}
        <div style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, #B01A47 100%)`, borderRadius: 12,
          padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxSizing: 'border-box', boxShadow: '0 8px 24px rgba(212,33,91,0.12)', flexShrink: 0
        }}>
          <div>
            <span style={{
              background: 'rgba(255,255,255,0.18)', color: 'white', fontSize: 10.5, fontWeight: 700,
              padding: '4px 12px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: 1,
              backdropFilter: 'blur(4px)'
            }}>Phase: Induction</span>
            <div style={{ color: 'white', fontSize: 28, fontWeight: 700, fontFamily: FONT_D, margin: '8px 0 4px', letterSpacing: -0.5 }}>Hello, Javier Pérez</div>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginBottom: 12, maxWidth: 600, fontWeight: 500 }}>Your technical onboarding journey at Murex Chile. Complete weekly tasks and tests to advance.</div>
            <div style={{ background: 'rgba(0,0,0,0.12)', borderRadius: 10, padding: '8px 14px', width: 380, boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: 11.5, fontWeight: 700, marginBottom: 4 }}>
                <span>Onboarding Progress</span><span>11 of 12 weeks completed (91%)</span>
              </div>
              <div style={{ height: 5, background: 'rgba(255,255,255,0.25)', borderRadius: 20 }}>
                <div style={{ width: '91%', height: '100%', background: 'white', borderRadius: 20 }} />
              </div>
            </div>
          </div>
          <ScoreRing pct={91} />
        </div>
        
        {/* Weeks Grid */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="calendar-event" size={18} color={C.primary} /> Learning Roadmap (12 Weeks)
            </div>
            
            {/* Pulsing Active Badge */}
            <div style={{
              background: 'white', border: '1.5px solid #D4215B', color: '#D4215B', fontSize: 11, fontWeight: 700,
              padding: '4px 12px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: `0 0 0 ${4 + Math.sin(localTime * 4.5) * 3.5}px rgba(212,33,91,0.12)`,
              willChange: 'box-shadow'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4215B' }} />
              WEEK 12 ACTIVE
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, flex: 1, overflowY: 'auto', paddingBottom: 10 }}>
            {weeks.map((w, i) => {
              const blockStart = 1.8 + i * 0.08;
              const t = clamp((localTime - blockStart) / 0.5, 0, 1);
              const easeT = Easing.easeOutQuad(t);
              const opacity = t;
              const translateY = (1 - easeT) * 8;
              
              return (
                <WeekBlock
                  key={w.n}
                  n={w.n}
                  state={w.state}
                  title={w.title}
                  opacity={opacity}
                  translateY={translateY}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

// SCENE 5 — "WELCOME" MOMENT `0:32–0:42`
function WelcomeScene() {
  const { localTime, duration } = useSprite();
  
  // Dashboard fade out on entry (0s to 400ms)
  let dashOpacity = 1;
  let dashScale = 1;
  if (localTime < 0.4) {
    const t = localTime / 0.4;
    dashOpacity = 1 - t;
    dashScale = interpolate([0, 1], [1, 1.04], Easing.easeOutQuad)(t);
  } else {
    dashOpacity = 0;
  }
  
  // Welcome text entries
  let opacity1 = 0;
  let dy1 = 12;
  if (localTime >= 0.8 && localTime < 1.3) {
    const t = (localTime - 0.8) / 0.5;
    opacity1 = t;
    dy1 = (1 - Easing.easeOutQuad(t)) * 12;
  } else if (localTime >= 1.3) {
    opacity1 = 1;
    dy1 = 0;
  }
  
  let opacity2 = 0;
  let dy2 = 12;
  if (localTime >= 1.3 && localTime < 1.8) {
    const t = (localTime - 1.3) / 0.5;
    opacity2 = t;
    dy2 = (1 - Easing.easeOutQuad(t)) * 12;
  } else if (localTime >= 1.8) {
    opacity2 = 1;
    dy2 = 0;
  }
  
  // Lento fade out de ambos al final (duration-0.6 .. duration)
  const exitStart = duration - 0.6;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.6;
    opacity1 = 1 - t;
    opacity2 = 1 - t;
  }

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FFFFFF', overflow: 'hidden' }}>
      {/* Dissolving dashboard in background */}
      {dashOpacity > 0 && (
        <div style={{ position: 'absolute', inset: 0, opacity: dashOpacity, transform: `scale(${dashScale})`, transformOrigin: 'center center' }}>
          <DashboardScene />
        </div>
      )}
      
      {/* Centered minimal Apple titles */}
      {localTime >= 0.8 && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 12
        }}>
          <div style={{
            fontFamily: FONT_D, fontSize: 56, fontWeight: 300, color: C.neutralDark,
            opacity: opacity1, transform: `translateY(${dy1}px)`, willChange: 'transform, opacity',
            letterSpacing: '-0.5px'
          }}>
            Welcome to
          </div>
          <div style={{
            fontFamily: FONT_D, fontSize: 56, fontWeight: 300, color: C.neutralDark,
            opacity: opacity2, transform: `translateY(${dy2}px)`, willChange: 'transform, opacity',
            letterSpacing: '-0.5px'
          }}>
            the <span style={{ color: '#D4215B', fontWeight: 600 }}>redesign</span> of the process.
          </div>
        </div>
      )}
    </div>
  );
}

// SCENE 6 — INTERACTIVE ACTIVITIES `0:42–0:52`
function ActivityCard({ title, value, status, progressWidth, opacity, rotY, scale }) {
  const isCompleted = status === 'Completed';
  return (
    <div style={{
      width: 300, height: 190, border: '1.5px solid #D4215B', borderRadius: 16, background: '#FFFFFF',
      padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', opacity,
      transform: `perspective(800px) rotateY(${rotY}deg) scale(${scale})`,
      boxSizing: 'border-box', willChange: 'transform, opacity'
    }}>
      <div>
        <h4 style={{ fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark, margin: '0 0 4px' }}>{title}</h4>
        <div style={{ width: 40, height: 2, background: '#D4215B', margin: '8px 0 12px' }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: isCompleted ? '#D4215B' : '#888888' }}>
          {isCompleted ? '✓ Completed' : '● In Progress'}
        </span>
        <span style={{ fontSize: 14, fontWeight: 700, color: C.neutralDark }}>{value}</span>
      </div>
      
      {/* Base progress bar */}
      <div style={{ height: 3, background: '#F2F2F2', borderRadius: 99, overflow: 'hidden', width: '100%' }}>
        <div style={{ height: '100%', width: `${progressWidth}%`, background: '#D4215B', borderRadius: 99 }} />
      </div>
    </div>
  );
}

function ActivitiesScene() {
  const { localTime } = useSprite();
  
  const cards = [
    { title: 'Sandbox MX.3', value: 'Completed', status: 'Completed', target: 100 },
    { title: 'Week 12 Session', value: 'In Progress', status: 'In Progress', target: 70 },
    { title: 'Autonomy Check', value: '14 / 15', status: 'In Progress', target: 93 }
  ];

  // Progress bar filling: width 0 -> target from 0.5s to 2.5s
  const barT = clamp((localTime - 0.5) / 2.0, 0, 1);
  const easeBarT = Easing.easeOutQuad(barT);

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#FFFFFF', gap: 30
    }}>
      {cards.map((c, i) => {
        const start = i * 0.15;
        const t = clamp((localTime - start) / 0.5, 0, 1);
        const easeT = Easing.easeOutQuad(t);
        const rotY = 90 - easeT * 90;
        const opacity = t;
        const scale = 0.9 + easeT * 0.1;
        const progressWidth = easeBarT * c.target;
        
        return (
          <ActivityCard
            key={c.title}
            title={c.title}
            value={c.value}
            status={c.status}
            progressWidth={progressWidth}
            opacity={opacity}
            rotY={rotY}
            scale={scale}
          />
        );
      })}
    </div>
  );
}

// SCENE 7 — CERTIFICATION CLOSE `0:52–1:00`
function CertificationScene() {
  const { localTime, duration } = useSprite();
  
  // Spring Card entry (0s to 0.7s)
  const entryT = clamp(localTime / 0.7, 0, 1);
  const cardScale = Easing.easeOutBack(entryT);
  const cardOpacity = entryT;
  
  // Border draw outline (0.7s to 1.5s)
  const drawT = clamp((localTime - 0.7) / 0.8, 0, 1);
  const strokeOffset = 1800 * (1 - Easing.easeOutQuad(drawT));
  
  // Dissolving/fade out of card at the end (6.8s to 7.2s)
  let currentCardOpacity = cardOpacity;
  if (localTime >= 6.8 && localTime < 7.2) {
    currentCardOpacity = interpolate([6.8, 7.2], [1, 0], Easing.linear)(localTime);
  } else if (localTime >= 7.2) {
    currentCardOpacity = 0;
  }
  
  // Final logo MXBoard (7.2s to 7.6s fade in, stays to 8.0s)
  let logoOpacity = 0;
  if (localTime >= 7.2) {
    logoOpacity = clamp((localTime - 7.2) / 0.4, 0, 1);
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#FFFFFF'
    }}>
      {currentCardOpacity > 0 && (
        <div style={{
          width: 520, height: 380, borderRadius: 20, background: '#FFFFFF',
          padding: '40px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', opacity: currentCardOpacity, transform: `scale(${cardScale})`,
          boxSizing: 'border-box', willChange: 'transform, opacity'
        }}>
          {/* Animated SVG Border overlay */}
          <svg width="520" height="380" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <rect
              x="0.75" y="0.75" width="518.5" height="378.5" rx="20" ry="20"
              fill="none" stroke="#D4215B" strokeWidth="1.5"
              strokeDasharray="1800" strokeDashoffset={strokeOffset}
            />
          </svg>
          
          {/* Certificate Content */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 24, color: C.neutralDark }}>
              MX<span style={{ color: C.primary }}>Board</span>
            </div>
            <div style={{ width: 30, height: 1.5, background: C.primary, margin: '8px 0 4px' }} />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_D, fontSize: 28, fontWeight: 700, color: C.primary, marginBottom: 4 }}>
              Francisca Le Dantec
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: C.neutralDark, letterSpacing: -0.1 }}>
              reached full autonomy
            </div>
            <div style={{ fontSize: 13, color: C.neutralMuted, fontWeight: 600, marginTop: 4 }}>
              Finance &amp; PL · 2026
            </div>
          </div>
          
          {/* Signature and Verification footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${C.neutralLight}`, paddingTop: 18, fontSize: 12, fontWeight: 600, color: C.neutralMuted }}>
            <span>Certified</span>
            <span style={{ color: C.neutralDark }}>Luana Ortega</span>
          </div>
        </div>
      )}
      
      {/* Final Outro Logo */}
      {logoOpacity > 0 && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#FFFFFF', opacity: logoOpacity
        }}>
          <div style={{
            fontFamily: FONT_D, fontSize: 94, fontWeight: 600, color: C.primary,
            letterSpacing: '-0.02em'
          }}>
            MXBoard
          </div>
        </div>
      )}
    </div>
  );
}


// ================= MAIN TIMELINE SCENE ORCHESTRATION =================

function MXBoardDemoScene() {
  return (
    <>
      <AnimatedBackground />
      
      {/* 0:00–0:06  →  Cold open */}
      <Sprite start={0} end={6}>
        <ColdOpen />
      </Sprite>

      {/* 0:06–0:10  →  Title arrival */}
      <Sprite start={6} end={10}>
        <TitleArrival />
      </Sprite>

      {/* 0:10–0:20  →  Login sequence */}
      <Sprite start={10} end={20}>
        <LoginScene />
      </Sprite>

      {/* 0:20–0:32  →  Dashboard · 12 weeks reveal */}
      <Sprite start={20} end={32}>
        <DashboardScene />
      </Sprite>

      {/* 0:32–0:42  →  "Welcome to the redesign" */}
      <Sprite start={32} end={42}>
        <WelcomeScene />
      </Sprite>

      {/* 0:42–0:52  →  Interactive activities */}
      <Sprite start={42} end={52}>
        <ActivitiesScene />
      </Sprite>

      {/* 0:52–1:00  →  Certification close */}
      <Sprite start={52} end={60}>
        <CertificationScene />
      </Sprite>
    </>
  );
}

window.MXBoardDemoScene = MXBoardDemoScene;
