// MXBoard demo video scene — built on animations.jsx (Stage/Sprite/TextSprite/etc)
// All copy below is lifted directly from the real MXBoard source (index.html / app.js)
const { Sprite, useSprite, Easing, interpolate } = window;

// ---------- Design tokens (Apple minimal: White & Murex Red #D4215B) ----------
const C = {
  primary: '#D4215B',
  primaryLight: '#FFF0F3',
  primaryText: '#D4215B',
  success: '#1D9E75', // Success green for stats
  successLight: '#E1F5EE',
  warning: '#EF9F27',
  warningLight: '#FFF4E5',
  danger: '#E24B4A',
  dangerLight: '#FDECEC',
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
          <span style={{ color: activeTab === 'timesheet' ? C.primary : C.neutralMuted, borderBottom: activeTab === 'timesheet' ? `2.5px solid ${C.primary}` : 'none', padding: '19px 0', cursor: 'pointer' }}>Timesheet Hub</span>
        </div>

        {/* Right profile info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Icon name="bell" size={17} color={C.neutralMuted} />
          <div style={{ width: 1, height: 20, background: C.neutralBorder }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, fontFamily: FONT_D }}>JP</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.neutralDark }}>Newcomer</div>
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
          border: `1px solid ${C.neutralBorder}`, display: 'inline-flex', alignItems: 'center', gap: 6
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

// ---------- Reusable Apple-style Transition Text Scene ----------
function TextTransition({ line1, line2, highlightWord }) {
  const { localTime, duration } = useSprite();
  
  const entryDur = 0.6;
  const exitDur = 0.5;
  const exitStart = duration - exitDur;
  
  let opacity1 = 0;
  let dy1 = 12;
  if (localTime >= 0.2 && localTime < 0.2 + entryDur) {
    const t = (localTime - 0.2) / entryDur;
    opacity1 = t;
    dy1 = (1 - Easing.easeOutQuad(t)) * 12;
  } else if (localTime >= 0.2 + entryDur) {
    opacity1 = 1;
    dy1 = 0;
  }
  
  let opacity2 = 0;
  let dy2 = 12;
  if (localTime >= 0.7 && localTime < 0.7 + entryDur) {
    const t = (localTime - 0.7) / entryDur;
    opacity2 = t;
    dy2 = (1 - Easing.easeOutQuad(t)) * 12;
  } else if (localTime >= 0.7 + entryDur) {
    opacity2 = 1;
    dy2 = 0;
  }
  
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / exitDur;
    opacity1 = 1 - t;
    opacity2 = 1 - t;
  }

  const renderLine2 = () => {
    if (!highlightWord) return line2;
    const parts = line2.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span style={{ color: '#D4215B', fontWeight: 600 }}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', gap: 12
    }}>
      <div style={{
        fontFamily: FONT_D, fontSize: 52, fontWeight: 300, color: C.neutralDark,
        opacity: opacity1, transform: `translateY(${dy1}px)`, willChange: 'transform, opacity',
        letterSpacing: '-0.5px'
      }}>
        {line1}
      </div>
      <div style={{
        fontFamily: FONT_D, fontSize: 52, fontWeight: 300, color: C.neutralDark,
        opacity: opacity2, transform: `translateY(${dy2}px)`, willChange: 'transform, opacity',
        letterSpacing: '-0.5px'
      }}>
        {renderLine2()}
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
        12 weeks.
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

// SCENE 3 — LOGIN `0:10–0:20` (Centered container, no cutoff)
function LoginScene() {
  const { localTime } = useSprite();
  
  const zoomT = Math.min(localTime / 3.0, 1);
  // Decreased zoom factor to avoid cutting off the container edges in smaller ratios
  const scale = interpolate([0, 1], [1, 1.3], Easing.easeOutQuart)(zoomT);
  
  const username = "Newcomer";
  let typedUser = "";
  if (localTime >= 3.5) {
    const sliceLen = Math.floor(Math.min((localTime - 3.5) / 1.2, 1) * username.length);
    typedUser = username.slice(0, sliceLen);
  }

  let typedPass = "";
  if (localTime >= 5.5) {
    const dotsCount = Math.floor(Math.min((localTime - 5.5) / 1.2, 1) * 8);
    typedPass = "● ".repeat(dotsCount).trim();
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
        {/* Browser Header */}
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
        
        {/* Centered Login Container */}
        <div style={{
          position: 'absolute', inset: `${FRAME.topbar}px 0 0 0`, display: 'flex',
          alignItems: 'center', justifyContent: 'center', background: '#FFFFFF'
        }}>
          <div style={{
            width: 360, padding: '32px 36px', border: `1.5px solid ${C.neutralBorder}`,
            borderRadius: 16, background: 'white', display: 'flex', flexDirection: 'column',
            gap: 20, boxShadow: '0 12px 36px rgba(0,0,0,0.03)', position: 'relative'
          }}>
            <div style={{ fontFamily: FONT_D, fontSize: 24, fontWeight: 800, color: C.primary, textAlign: 'center', marginBottom: 4 }}>
              MX<span style={{ color: C.primary }}>Board</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Username</label>
              <div style={{ padding: '10px 14px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 8, fontSize: 14, fontWeight: 600, color: C.neutralDark, minHeight: 38, background: '#FFFFFF', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
                {typedUser}
                {localTime >= 3.5 && localTime < 5.0 && <span style={{ borderLeft: '2px solid black', marginLeft: 2, height: 14 }} />}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Password</label>
              <div style={{ padding: '10px 14px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 8, fontSize: 14, fontWeight: 600, color: C.neutralDark, minHeight: 38, background: '#FFFFFF', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
                {typedPass}
                {localTime >= 5.5 && localTime < 7.0 && <span style={{ borderLeft: '2px solid black', marginLeft: 2, height: 14 }} />}
              </div>
            </div>
            
            <div style={{
              padding: '12px', background: localTime >= 9.0 ? '#B01A47' : '#D4215B', color: 'white',
              borderRadius: 8, fontSize: 14, fontWeight: 700, textAlign: 'center', marginTop: 8,
              cursor: 'pointer'
            }}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeekBlock({ n, state, title, opacity, translateY }) {
  const isCompleted = state === 'completed';
  const isCurrent = state === 'current';
  const bg = '#FFFFFF';
  
  const border = isCompleted 
    ? '1.5px solid #D4215B' 
    : isCurrent 
      ? '2.5px solid #D4215B' 
      : '1.5px solid #F2F2F2';
      
  const color = '#0A0A0A';
  const subColor = isCompleted ? '#D4215B' : '#888888';
  
  return (
    <div style={{
      background: bg, border, borderRadius: 10, padding: '12px 14px',
      minHeight: 82, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', opacity, transform: `translateY(${translateY}px)`, boxSizing: 'border-box',
      boxShadow: 'none', willChange: 'transform, opacity'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 15, color }}>Week {n}</span>
        {isCompleted && <Icon name="circle-check" size={14} color="#D4215B" />}
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

const clampVal = (val, min, max) => Math.min(Math.max(val, min), max);

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

// SCENE 4 — DASHBOARD REVEAL `0:20–0:30`
function DashboardScene() {
  const { localTime, duration } = useSprite();
  
  const zoomOutT = Math.min(localTime / 1.8, 1);
  let zoomScale = interpolate([0, 1], [3.2, 1.0], Easing.easeOutQuad)(zoomOutT);
  
  let dashOpacity = 1;
  const exitStart = duration - 0.4;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.4;
    dashOpacity = 1 - t;
    zoomScale = interpolate([0, 1], [1.0, 1.04], Easing.easeOutQuad)(t);
  }

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
    <div style={{ position: 'absolute', inset: 0, opacity: dashOpacity, transform: `scale(${zoomScale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="dashboard">
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
              <div style={{ color: 'white', fontSize: 28, fontWeight: 700, fontFamily: FONT_D, margin: '8px 0 4px', letterSpacing: -0.5 }}>Hello, Newcomer</div>
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
                const t = clampVal((localTime - blockStart) / 0.5, 0, 1);
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
    </div>
  );
}

// SCENE: ACCOUNTS MATCHING GAME MOCK `0:34–0:42` (Drag PPE into Asset bucket - Cursor/arrow removed)
function AccountsGameScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  // Animation values
  let cursorX = 850;
  let cursorY = 450;
  let cursorOpacity = 0;
  let isClicking = false;

  // Bricks relative coordinates:
  // Brick 1 (PPE): left: 40, top: 120
  // Brick 2 (Loans Payable): left: 40, top: 200
  // Brick 3 (Common Stock): left: 40, top: 280
  
  // Drop targets coordinates:
  // Slot 1 (Asset): left: 400, top: 120
  // Slot 2 (Liability): left: 400, top: 230
  // Slot 3 (Equity): left: 400, top: 340
  
  let ppeX = 40, ppeY = 120;
  let lpX = 40, lpY = 200;
  let csX = 40, csY = 280;

  let ppeDropped = false;
  let lpDropped = false;
  let csDropped = false;

  // Phase 1: Drag PPE (40, 120) -> Asset Slot (400, 120)
  if (localTime >= 1.0 && localTime < 1.4) {
    cursorOpacity = 1;
    const t = (localTime - 1.0) / 0.4;
    cursorX = interpolate([0, 1], [850, 40 + 150], Easing.easeInOutQuad)(t);
    cursorY = interpolate([0, 1], [450, 120 + 25], Easing.easeInOutQuad)(t);
  } else if (localTime >= 1.4 && localTime < 2.4) {
    cursorOpacity = 1;
    isClicking = true;
    const t = (localTime - 1.4) / 1.0;
    const easeT = Easing.easeInOutQuad(t);
    cursorX = interpolate([0, 1], [40 + 150, 400 + 225], easeT);
    cursorY = interpolate([0, 1], [120 + 25, 120 + 50], easeT);
    ppeX = cursorX - 150;
    ppeY = cursorY - 25;
  } else if (localTime >= 2.4) {
    ppeDropped = true;
  }

  // Phase 2: Drag Loans Payable (40, 200) -> Liability Slot (400, 230)
  if (localTime >= 2.6 && localTime < 3.0) {
    cursorOpacity = 1;
    const t = (localTime - 2.6) / 0.4;
    cursorX = interpolate([0, 1], [400 + 225, 40 + 150], Easing.easeInOutQuad)(t);
    cursorY = interpolate([0, 1], [120 + 50, 200 + 25], Easing.easeInOutQuad)(t);
  } else if (localTime >= 3.0 && localTime < 4.0) {
    cursorOpacity = 1;
    isClicking = true;
    const t = (localTime - 3.0) / 1.0;
    const easeT = Easing.easeInOutQuad(t);
    cursorX = interpolate([0, 1], [40 + 150, 400 + 225], easeT);
    cursorY = interpolate([0, 1], [200 + 25, 230 + 50], easeT);
    lpX = cursorX - 150;
    lpY = cursorY - 25;
  } else if (localTime >= 4.0) {
    lpDropped = true;
  }

  // Phase 3: Drag Common Stock (40, 280) -> Equity Slot (400, 340)
  if (localTime >= 4.2 && localTime < 4.6) {
    cursorOpacity = 1;
    const t = (localTime - 4.2) / 0.4;
    cursorX = interpolate([0, 1], [400 + 225, 40 + 150], Easing.easeInOutQuad)(t);
    cursorY = interpolate([0, 1], [230 + 50, 280 + 25], Easing.easeInOutQuad)(t);
  } else if (localTime >= 4.6 && localTime < 5.6) {
    cursorOpacity = 1;
    isClicking = true;
    const t = (localTime - 4.6) / 1.0;
    const easeT = Easing.easeInOutQuad(t);
    cursorX = interpolate([0, 1], [40 + 150, 400 + 225], easeT);
    cursorY = interpolate([0, 1], [280 + 25, 340 + 50], easeT);
    csX = cursorX - 150;
    csY = cursorY - 25;
  } else if (localTime >= 5.6) {
    csDropped = true;
  }

  if (localTime >= 5.6 && localTime < 6.6) {
    cursorOpacity = 1;
    cursorX = 400 + 225;
    cursorY = 340 + 50;
  }
  const showSuccessToast = localTime >= 5.8;

  // Centered Score Card Zoom bounds
  const showCenterCard = localTime >= 5.6;
  let centerCardScale = 0;
  let centerCardOpacity = 0;
  if (localTime >= 5.6 && localTime < 6.0) {
    const t = (localTime - 5.6) / 0.4;
    centerCardScale = interpolate([0, 1], [0.6, 1.0], Easing.easeOutBack)(t);
    centerCardOpacity = t;
  } else if (localTime >= 6.0) {
    centerCardOpacity = 1;
    centerCardScale = 1;
  }

  // Count up points from 0 to 120
  let pointsCount = 0;
  if (localTime >= 5.8 && localTime < 7.0) {
    const tPoints = (localTime - 5.8) / 1.2;
    pointsCount = Math.floor(tPoints * 12) * 10;
  } else if (localTime >= 7.0) {
    pointsCount = 120;
  }

  // Chart drawing progress
  const chartLength = 220;
  const tChart = clampVal((localTime - 5.8) / 1.2, 0, 1);
  const chartOffset = chartLength * (1 - Easing.easeOutQuad(tChart));

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="dashboard">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden', position: 'relative' }}>
          
          {/* Header */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="device-gamepad-2" size={20} color={C.primary} /> Week 1 — Account Classification Challenge
            </div>
            <div style={{ fontSize: 12.5, color: C.neutralMuted, marginTop: 2 }}>Drag and drop the account bricks into their correct Balance Sheet buckets.</div>
          </div>

          <div style={{ flex: 1, display: 'flex', gap: 40, marginTop: 10, position: 'relative' }}>
            
            {/* Left Column: Bricks */}
            <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Available Accounts</div>
              
              {/* PPE Placeholder / Dragging */}
              <div style={{
                height: 52, border: '1.5px dashed #E6E5EC', borderRadius: 8, background: '#F9F9FB',
                position: 'relative'
              }}>
                {!ppeDropped && (
                  <div style={{
                    position: 'absolute', left: ppeX - 40, top: ppeY - 120, width: 280, padding: '14px 18px',
                    borderRadius: 8, border: '1.5px solid #D4215B', background: '#FFFFFF',
                    color: C.primary, fontWeight: 700, fontSize: 13, zIndex: 10,
                    boxShadow: !ppeDropped && localTime >= 1.4 && localTime < 2.4 ? '0 8px 24px rgba(212,33,91,0.1)' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'
                  }}>
                    <span>Property, Plant &amp; Equip. (PPE)</span>
                    <Icon name="grip-vertical" size={14} color="#D4215B" />
                  </div>
                )}
              </div>

              {/* Loans Payable Placeholder / Dragging */}
              <div style={{
                height: 52, border: '1.5px dashed #E6E5EC', borderRadius: 8, background: '#F9F9FB',
                position: 'relative'
              }}>
                {!lpDropped && (
                  <div style={{
                    position: 'absolute', left: lpX - 40, top: lpY - 200, width: 280, padding: '14px 18px',
                    borderRadius: 8, border: '1.5px solid #D4215B', background: '#FFFFFF',
                    color: C.primary, fontWeight: 700, fontSize: 13, zIndex: 10,
                    boxShadow: !lpDropped && localTime >= 3.0 && localTime < 4.0 ? '0 8px 24px rgba(212,33,91,0.1)' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'
                  }}>
                    <span>Loans Payable</span>
                    <Icon name="grip-vertical" size={14} color="#D4215B" />
                  </div>
                )}
              </div>

              {/* Common Stock Placeholder / Dragging */}
              <div style={{
                height: 52, border: '1.5px dashed #E6E5EC', borderRadius: 8, background: '#F9F9FB',
                position: 'relative'
              }}>
                {!csDropped && (
                  <div style={{
                    position: 'absolute', left: csX - 40, top: csY - 280, width: 280, padding: '14px 18px',
                    borderRadius: 8, border: '1.5px solid #D4215B', background: '#FFFFFF',
                    color: C.primary, fontWeight: 700, fontSize: 13, zIndex: 10,
                    boxShadow: !csDropped && localTime >= 4.6 && localTime < 5.6 ? '0 8px 24px rgba(212,33,91,0.1)' : 'none',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'
                  }}>
                    <span>Common Stock</span>
                    <Icon name="grip-vertical" size={14} color="#D4215B" />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Drop Targets */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Drop Targets</div>
              
              {/* Asset Slot */}
              <div style={{
                width: 480, minHeight: 90, border: ppeDropped ? '2.5px solid #D4215B' : '2.5px dashed #E6E5EC',
                borderRadius: 12, padding: '14px 18px', background: ppeDropped ? '#FFF0F3' : '#FFFFFF',
                display: 'flex', flexDirection: 'column', gap: 8, boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: C.neutralDark }}>Asset Accounts</span>
                  {ppeDropped && <Icon name="circle-check" size={16} color="#D4215B" />}
                </div>
                {ppeDropped ? (
                  <div style={{
                    padding: '8px 12px', borderRadius: 6, border: '1.5px solid #D4215B',
                    background: '#FFFFFF', color: '#D4215B', fontWeight: 700, fontSize: 12.5
                  }}>
                    Property, Plant &amp; Equip. (PPE)
                  </div>
                ) : (
                  <div style={{ fontSize: 11.5, color: C.neutralMuted, fontStyle: 'italic' }}>Drop Asset accounts here...</div>
                )}
              </div>

              {/* Liability Slot */}
              <div style={{
                width: 480, minHeight: 90, border: lpDropped ? '2.5px solid #D4215B' : '2.5px dashed #E6E5EC',
                borderRadius: 12, padding: '14px 18px', background: lpDropped ? '#FFF0F3' : '#FFFFFF',
                display: 'flex', flexDirection: 'column', gap: 8, boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: C.neutralDark }}>Liability Accounts</span>
                  {lpDropped && <Icon name="circle-check" size={16} color="#D4215B" />}
                </div>
                {lpDropped ? (
                  <div style={{
                    padding: '8px 12px', borderRadius: 6, border: '1.5px solid #D4215B',
                    background: '#FFFFFF', color: '#D4215B', fontWeight: 700, fontSize: 12.5
                  }}>
                    Loans Payable
                  </div>
                ) : (
                  <div style={{ fontSize: 11.5, color: C.neutralMuted, fontStyle: 'italic' }}>Drop Liability accounts here...</div>
                )}
              </div>

              {/* Equity Slot */}
              <div style={{
                width: 480, minHeight: 90, border: csDropped ? '2.5px solid #D4215B' : '2.5px dashed #E6E5EC',
                borderRadius: 12, padding: '14px 18px', background: csDropped ? '#FFF0F3' : '#FFFFFF',
                display: 'flex', flexDirection: 'column', gap: 8, boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: C.neutralDark }}>Equity Accounts</span>
                  {csDropped && <Icon name="circle-check" size={16} color="#D4215B" />}
                </div>
                {csDropped ? (
                  <div style={{
                    padding: '8px 12px', borderRadius: 6, border: '1.5px solid #D4215B',
                    background: '#FFFFFF', color: '#D4215B', fontWeight: 700, fontSize: 12.5
                  }}>
                    Common Stock
                  </div>
                ) : (
                  <div style={{ fontSize: 11.5, color: C.neutralMuted, fontStyle: 'italic' }}>Drop Equity accounts here...</div>
                )}
              </div>
            </div>

            {/* Success Congratulatory Toast - Centered Zoom and Growing Curve Graph */}
            {showCenterCard && (
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.15)',
                backdropFilter: 'blur(3px)', zIndex: 190, opacity: centerCardOpacity,
                transition: 'opacity 0.2s', borderRadius: 12
              }} />
            )}

            {showCenterCard && (
              <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: `translate(-50%, -50%) scale(${centerCardScale})`,
                width: 420, padding: '30px 24px', background: 'white', borderRadius: 20,
                border: `2px solid #1D9E75`,
                boxShadow: '0 30px 70px rgba(29,158,117,0.2)', zIndex: 200,
                opacity: centerCardOpacity, display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 14, fontFamily: FONT, boxSizing: 'border-box'
              }}>
                <span style={{ fontSize: 32 }}>🏆</span>
                <h3 style={{ fontFamily: FONT_D, fontSize: 20, fontWeight: 800, color: C.neutralDark, margin: 0 }}>
                  Challenge Completed!
                </h3>
                <p style={{ fontSize: 13, color: C.neutralMuted, margin: 0, textAlign: 'center', fontWeight: 500 }}>
                  All account categories correctly classified in record time.
                </p>
                
                {/* Score counter */}
                <div style={{
                  fontFamily: FONT_D, fontSize: 56, fontWeight: 900, color: '#1D9E75',
                  letterSpacing: -1, margin: '10px 0 0'
                }}>
                  +{pointsCount} <span style={{ fontSize: 18, fontWeight: 700, color: C.neutralMuted }}>Points</span>
                </div>

                {/* The growing curve graph */}
                <svg width="320" height="120" style={{ overflow: 'visible', marginTop: 10 }}>
                  {/* Grid guidelines */}
                  <line x1="20" y1="20" x2="300" y2="20" style={{ stroke: '#F2F2F2', strokeWidth: 1.2 }} />
                  <line x1="20" y1="60" x2="300" y2="60" style={{ stroke: '#F2F2F2', strokeWidth: 1.2 }} />
                  <line x1="20" y1="100" x2="300" y2="100" style={{ stroke: '#F2F2F2', strokeWidth: 1.2 }} />

                  {/* Left/Right labels */}
                  <text x="5" y="104" style={{ fontFamily: FONT, fontSize: 9, fill: '#888888', fontWeight: 600 }}>0</text>
                  <text x="306" y="24" style={{ fontFamily: FONT, fontSize: 9, fill: '#1D9E75', fontWeight: 700 }}>120</text>

                  {/* Wavy line growing upwards */}
                  <path
                    d="M 20 100 Q 150 90 300 20"
                    fill="none"
                    stroke="#1D9E75"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={chartLength}
                    strokeDashoffset={chartOffset}
                    style={{ transition: 'stroke-dashoffset 0.05s linear' }}
                  />

                  {/* Point at the end of the path */}
                  {tChart > 0 && (
                    <circle
                      cx={interpolate([0, 1], [20, 300], tChart)}
                      cy={interpolate([0, 1], [100, 20], Easing.easeOutQuad)(tChart)}
                      r="5"
                      fill="#1D9E75"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </div>
            )}
          </div>

          {/* Mouse pointer */}
          {cursorOpacity > 0 && (
            <div style={{
              position: 'absolute', left: cursorX, top: cursorY, zIndex: 100,
              pointerEvents: 'none', opacity: cursorOpacity, transition: 'opacity 0.2s',
              transform: isClicking ? 'scale(0.85)' : 'none'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3V19.5L9.64 14.36L16.29 21L19.5 17.79L12.85 11.15L19.5 9.64L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="miter" />
              </svg>
            </div>
          )}

        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE: FX LIFECYCLE SIMULATOR `0:46–0:54` (Complete SVG layout from index.html)
function LifecycleScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  // Horizontal marker position calculation on the SVG line (x coordinate goes from 90 to 860)
  const lineStartX = 90;
  const lineEndX = 860;
  const markerX = interpolate([1.2, 5.8], [lineStartX, lineEndX], Easing.easeInOutQuad)(localTime);
  // Calculate wavy y value matching the MtM wavy path d property
  const markerY = 215 + Math.sin((markerX - 90) / 770 * Math.PI * 6) * 16;

  // Active state boundaries matching events 1, 2, 3, 4
  const isEvent1Active = localTime >= 1.2;
  const isEvent3Active = localTime >= 2.8;
  const isEvent2Active = localTime >= 4.8;
  const isEvent4Active = localTime >= 5.6;

  // Styles generator helper for SVG groups based on active state and box type
  const boxGroupStyle = (isActive, type) => {
    return {
      opacity: isActive ? 1 : 0.22,
      filter: isActive ? 'none' : 'grayscale(1)',
      transition: 'opacity 0.4s ease, filter 0.4s ease',
      cursor: 'pointer',
    };
  };

  const boxRectStyle = (isActive, type) => {
    if (type === 'obs') {
      return {
        fill: '#FFFFFF',
        stroke: '#EF9F27', // Orange dashed border
        strokeWidth: 1.6,
        strokeDasharray: '5 4',
        rx: 9,
        ry: 9
      };
    }
    if (type === 'mtm') {
      return {
        fill: '#FFFFFF',
        stroke: '#D4215B', // Red dashed border
        strokeWidth: 1.6,
        strokeDasharray: '5 4',
        rx: 9,
        ry: 9
      };
    }
    if (type === 'income') {
      return {
        fill: isActive ? '#E1F5EE' : '#FFFFFF',
        stroke: '#1D9E75', // Solid green border
        strokeWidth: 1.6,
        rx: 9,
        ry: 9
      };
    }
    if (type === 'expense') {
      return {
        fill: isActive ? '#FDECEC' : '#FFFFFF',
        stroke: '#E24B4A', // Solid red border
        strokeWidth: 1.6,
        rx: 9,
        ry: 9
      };
    }
  };

  const boxTextStyle = {
    fontFamily: FONT,
    fontSize: '12.5px',
    fill: '#0A0A0A',
    fontWeight: 600,
  };

  const smallTextStyle = {
    fontFamily: FONT,
    fontSize: '10.5px',
    fill: '#888888',
    fontWeight: 500,
  };

  // Scroll down animation starting at 4.8s, finishing at 6.0s
  let scrollOffset = 0;
  if (localTime >= 4.8 && localTime < 6.0) {
    const t = (localTime - 4.8) / 1.2;
    scrollOffset = interpolate([0, 1], [0, 240], Easing.easeInOutQuad)(t);
  } else if (localTime >= 6.0) {
    scrollOffset = 240;
  }

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="dashboard">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="route" size={20} color={C.primary} /> Week 3 — FX Lifecycle Simulator
            </div>
            <div style={{ fontSize: 12.5, color: C.neutralMuted, marginTop: 2 }}>Contract Lifecycle Event simulation visualised in real-time.</div>
          </div>

          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', height: 335 }}>
            <div style={{
              transform: `translateY(-${scrollOffset}px)`,
              transition: 'transform 0.08s linear',
              display: 'flex', flexDirection: 'column'
            }}>
              {/* Slide 1: SVG Lifecycle Diagram */}
              <div style={{ height: 335, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', marginTop: 10 }}>
                  <svg viewBox="0 0 960 430" style={{ width: '82%', height: 'auto', overflow: 'visible', display: 'block' }}>
                    
                    {/* Row labels */}
                    <text x="18" y="94" style={{ fontFamily: FONT_D, fontWeight: 600, fontSize: '14.5px', fill: '#0A0A0A' }}>Buy cur.</text>
                    <text x="18" y="344" style={{ fontFamily: FONT_D, fontWeight: 600, fontSize: '14.5px', fill: '#0A0A0A' }}>Sell cur.</text>

                    {/* Date column guides */}
                    <line x1="90" y1="46" x2="90" y2="392" style={{ stroke: '#C7C4D6', strokeWidth: 1.4, strokeDasharray: '2 5' }} />
                    <line x1="860" y1="46" x2="860" y2="392" style={{ stroke: '#C7C4D6', strokeWidth: 1.4, strokeDasharray: '2 5' }} />

                    {/* Date pills on canvas */}
                    <g style={{ cursor: 'pointer' }}>
                      <rect x="45" y="18" width="90" height="26" rx="13" style={{ fill: isEvent1Active ? '#D4215B' : '#FFF0F3' }} />
                      <text x="90" y="35" textAnchor="middle" style={{ fontFamily: FONT_D, fontSize: '11px', fontWeight: 700, fill: isEvent1Active ? '#FFFFFF' : '#D4215B', textTransform: 'uppercase', letterSpacing: '.05em' }}>Trade date</text>
                    </g>
                    <g style={{ cursor: 'pointer' }}>
                      <rect x="815" y="18" width="90" height="26" rx="13" style={{ fill: isEvent2Active ? '#D4215B' : '#FFF0F3' }} />
                      <text x="860" y="35" textAnchor="middle" style={{ fontFamily: FONT_D, fontSize: '11px', fontWeight: 700, fill: isEvent2Active ? '#FFFFFF' : '#D4215B', textTransform: 'uppercase', letterSpacing: '.05em' }}>Value date</text>
                    </g>

                    {/* Dashed baselines */}
                    <line x1="90" y1="90" x2="860" y2="90" style={{ stroke: '#F2F2F2', strokeWidth: 1.6, strokeDasharray: '6 5' }} />
                    <line x1="90" y1="340" x2="860" y2="340" style={{ stroke: '#F2F2F2', strokeWidth: 1.6, strokeDasharray: '6 5' }} />

                    {/* MTM wavy line */}
                    <path d="M90,215 C170,197 235,233 305,216 C375,199 440,233 510,216 C580,199 650,233 720,219 C765,216 800,215 860,215" 
                      style={{ stroke: '#D4215B', strokeWidth: 2.6, fill: 'none', strokeLinecap: 'round' }} />
                    
                    {/* Dynamic progress marker circle */}
                    <circle r="6" cx={markerX} cy={markerY} style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />

                    {/* OBS commitment (Trade Date) - Top */}
                    <g style={boxGroupStyle(isEvent1Active, 'obs')}>
                      <line x1="140" y1="65" x2="92" y2="88" style={{ stroke: '#EF9F27', strokeWidth: 1.3, strokeDasharray: '3 3', opacity: 0.7 }} />
                      <rect x="140" y="14" width="212" height="58" style={boxRectStyle(isEvent1Active, 'obs')} />
                      <text x="154" y="34" style={boxTextStyle}>OBS commitment</text>
                      <text x="154" y="50" style={boxTextStyle}>notional receivable</text>
                      <text x="154" y="66" style={smallTextStyle}>cur. 1 · USD 1,000,000</text>
                    </g>
                    <g style={{ opacity: isEvent1Active ? 1 : 0.22 }}>
                      <circle cx="350" cy="20" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="350" y="24" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>1</text>
                    </g>

                    {/* OBS commitment (Trade Date) - Bottom */}
                    <g style={boxGroupStyle(isEvent1Active, 'obs')}>
                      <line x1="140" y1="365" x2="92" y2="342" style={{ stroke: '#EF9F27', strokeWidth: 1.3, strokeDasharray: '3 3', opacity: 0.7 }} />
                      <rect x="140" y="357" width="212" height="58" style={boxRectStyle(isEvent1Active, 'obs')} />
                      <text x="154" y="377" style={boxTextStyle}>OBS commitment</text>
                      <text x="154" y="393" style={boxTextStyle}>notional payable</text>
                      <text x="154" y="409" style={smallTextStyle}>cur. 2 · EUR 920,000</text>
                    </g>
                    <g style={{ opacity: isEvent1Active ? 1 : 0.22 }}>
                      <circle cx="350" cy="363" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="350" y="367" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>1</text>
                    </g>

                    {/* MTM value measurement */}
                    <g style={boxGroupStyle(isEvent3Active, 'mtm')}>
                      <line x1="470" y1="250" x2="470" y2="219" style={{ stroke: '#EF9F27', strokeWidth: 1.3, strokeDasharray: '3 3', opacity: 0.7 }} />
                      <rect x="375" y="250" width="192" height="50" style={boxRectStyle(isEvent3Active, 'mtm')} />
                      <text x="389" y="270" style={boxTextStyle}>MtM Value</text>
                      <text x="389" y="286" style={smallTextStyle}>measurement</text>
                    </g>
                    <g style={{ opacity: isEvent3Active ? 1 : 0.22 }}>
                      <circle cx="567" cy="256" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="567" y="260" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>3</text>
                    </g>

                    {/* Reverse OBS commitment (Value Date) - Top */}
                    <g style={boxGroupStyle(isEvent2Active, 'obs')}>
                      <line x1="820" y1="65" x2="858" y2="88" style={{ stroke: '#EF9F27', strokeWidth: 1.3, strokeDasharray: '3 3', opacity: 0.7 }} />
                      <rect x="608" y="14" width="212" height="58" style={boxRectStyle(isEvent2Active, 'obs')} />
                      <text x="622" y="38" style={boxTextStyle}>Reverse OBS</text>
                      <text x="622" y="54" style={boxTextStyle}>commitment</text>
                    </g>
                    <g style={{ opacity: isEvent2Active ? 1 : 0.22 }}>
                      <circle cx="820" cy="20" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="820" y="24" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>2</text>
                    </g>

                    {/* Reverse OBS commitment (Value Date) - Bottom */}
                    <g style={boxGroupStyle(isEvent2Active, 'obs')}>
                      <line x1="820" y1="365" x2="858" y2="342" style={{ stroke: '#EF9F27', strokeWidth: 1.3, strokeDasharray: '3 3', opacity: 0.7 }} />
                      <rect x="608" y="357" width="212" height="58" style={boxRectStyle(isEvent2Active, 'obs')} />
                      <text x="622" y="381" style={boxTextStyle}>Reverse OBS</text>
                      <text x="622" y="397" style={boxTextStyle}>commitment</text>
                    </g>
                    <g style={{ opacity: isEvent2Active ? 1 : 0.22 }}>
                      <circle cx="820" cy="363" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="820" y="367" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>2</text>
                    </g>

                    {/* Realized income / expense arrows */}
                    <path d="M860,215 L860,128" style={{ stroke: '#1D9E75', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', opacity: isEvent4Active ? 1 : 0.22 }} />
                    <path d="M860,215 L860,302" style={{ stroke: '#E24B4A', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', opacity: isEvent4Active ? 1 : 0.22 }} />

                    {/* Realized income box */}
                    <g style={boxGroupStyle(isEvent4Active, 'income')}>
                      <rect x="756" y="90" width="188" height="50" style={boxRectStyle(isEvent4Active, 'income')} />
                      <text x="770" y="110" style={boxTextStyle}>Realized income</text>
                      <text x="770" y="126" style={smallTextStyle}>cur.1 · USD 1,000,000</text>
                    </g>
                    <g style={{ opacity: isEvent4Active ? 1 : 0.22 }}>
                      <circle cx="944" cy="96" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="944" y="100" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>4</text>
                    </g>

                    {/* Realized expense box */}
                    <g style={boxGroupStyle(isEvent4Active, 'expense')}>
                      <rect x="756" y="290" width="188" height="50" style={boxRectStyle(isEvent4Active, 'expense')} />
                      <text x="770" y="310" style={boxTextStyle}>Realized expense</text>
                      <text x="770" y="326" style={smallTextStyle}>cur.2 · EUR 920,000</text>
                    </g>
                    <g style={{ opacity: isEvent4Active ? 1 : 0.22 }}>
                      <circle cx="944" cy="296" r="13" style={{ fill: '#D4215B', stroke: '#FFFFFF', strokeWidth: 2 }} />
                      <text x="944" y="300" textAnchor="middle" style={{ fill: '#FFFFFF', fontFamily: FONT_D, fontSize: 12, fontWeight: 700 }}>4</text>
                    </g>
                  </svg>
                </div>
                
                {/* Descriptive caption */}
                <div style={{
                  fontSize: '12.5px', color: '#64748B', padding: '10px 14px',
                  backgroundColor: '#F8FAFC', borderRadius: '8px', textAlign: 'center',
                  borderLeft: '3px solid #D4215B', fontWeight: 600, flexShrink: 0,
                  marginBottom: 6
                }}>
                  {localTime < 1.2 && "Press Next Event to start the contract lifecycle."}
                  {localTime >= 1.2 && localTime < 2.8 && "OBS commitment notional receivable and payable amounts are booked in Off-Balance Sheet (OBS) accounts."}
                  {localTime >= 2.8 && localTime < 4.8 && "The MtM value measurement tracks market fluctuations of the FX contract value."}
                  {localTime >= 4.8 && localTime < 5.6 && "At Value Date, OBS commitments are fully reversed."}
                  {localTime >= 5.6 && "The realized income and expense are settled and recorded on the Balance Sheet."}
                </div>
              </div>

              {/* Slide 2: Representative Posted Journal Entries Table */}
              <div style={{
                marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10,
                height: 240, boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.neutralDark, margin: 0 }}>
                      Posted Journal Entries (Murex Ledger)
                    </h4>
                    <div style={{ fontSize: 11.5, color: C.neutralMuted, marginTop: 2, fontWeight: 500 }}>
                      Representative postings automatically triggered in the ledger.
                    </div>
                  </div>
                  <span style={{
                    background: '#E6FDF4', border: '1px solid #10B98130', color: '#10B981', fontSize: 10, fontWeight: 800,
                    padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.5
                  }}>
                    Chilean Accounting Ledger
                  </span>
                </div>

                <div style={{ border: `1.5px solid ${C.neutralBorder}`, borderRadius: 10, overflow: 'hidden' }}>
                  {/* Headers */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr 1.2fr 0.8fr',
                    padding: '8px 12px', background: '#F8FAFC', fontSize: 10, fontWeight: 700,
                    color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5,
                    borderBottom: `1.5px solid ${C.neutralBorder}`
                  }}>
                    <span>Lifecycle Event</span>
                    <span>Debit Account (DR)</span>
                    <span>Credit Account (CR)</span>
                    <span>Amount</span>
                    <span style={{ textAlign: 'right' }}>Status</span>
                  </div>

                  {/* Rows */}
                  {[
                    { event: 'Initial Commitment', dr: 'OBS USD Receivable', cr: 'OBS USD Payable', amt: '1,000,000 USD', active: localTime >= 1.2 },
                    { event: 'MtM Revaluation', dr: 'Unrealized Asset (BS)', cr: 'MTM Gain (P&L)', amt: '10,000 USD', active: localTime >= 2.8 },
                    { event: 'Cash Settlement', dr: 'Cash Nostro Account', cr: 'Unrealized Asset (BS)', amt: '1,000,000 USD', active: localTime >= 5.6 }
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 1.5fr 1.2fr 0.8fr',
                      padding: '8px 12px', borderBottom: i === 2 ? 'none' : `1px solid ${C.neutralBorder}`,
                      alignItems: 'center', opacity: row.active ? 1 : 0.2,
                      background: row.active && i === 2 && localTime >= 5.6 ? `${C.primary}05` : 'white',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralDark }}>{row.event}</span>
                      <span style={{ fontSize: 10.5, fontWeight: 600, color: C.neutralDark, fontFamily: 'monospace' }}>{row.dr}</span>
                      <span style={{ fontSize: 10.5, fontWeight: 600, color: C.neutralDark, fontFamily: 'monospace' }}>{row.cr}</span>
                      <span style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralDark }}>{row.amt}</span>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {row.active ? (
                          <span style={{
                            fontSize: 9, fontWeight: 800, padding: '2px 8px', borderRadius: 20,
                            background: '#E6FDF4', color: '#10B981'
                          }}>POSTED</span>
                        ) : (
                          <span style={{
                            fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                            background: '#F1F5F9', color: C.neutralMuted
                          }}>PENDING</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE: DOCUMENTATION CENTER `0:58–1:06`
function ResourceCard({ title, desc, link, icon, color, opacity, translateY }) {
  return (
    <div style={{
      background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12,
      padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      boxSizing: 'border-box', opacity, transform: `translateY(${translateY}px)`,
      height: 155, willChange: 'transform, opacity', boxShadow: 'none'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Icon name={icon} size={18} color={color} />
          <h4 style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.neutralDark, margin: 0 }}>{title}</h4>
        </div>
        <p style={{ fontSize: 12, color: C.neutralMuted, margin: 0, lineHeight: 1.4 }}>{desc}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: C.primary, cursor: 'pointer' }}>
        {link} <Icon name="arrow-right" size={12} color={C.primary} />
      </div>
    </div>
  );
}

function ResourcesScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const items = [
    { title: 'OnBoarding Docs', desc: 'Access orientation guides, induction process documents, and introductory material for your onboarding.', link: 'View onboarding guides', icon: 'folder', color: '#64748B' },
    { title: 'MXDoc', desc: 'Official documentation of MX.3 software; discover how to configure the system and its modules from scratch.', link: 'Open documentation', icon: 'file-text', color: '#475569' },
    { title: 'MXWiki', desc: 'Navigate the official domains of the suite and discover meaningful information and key guides for your daily work.', link: 'Open official wiki', icon: 'world', color: '#0284C7' },
    { title: 'MXLearn', desc: 'Official portal for institutional onboarding; contains videos, progress evaluations, and specific learning paths.', link: 'Start learning', icon: 'school', color: '#EA580C' },
    { title: 'PegaCase', desc: 'Master ticket and case portal; search how to resolve incidents, configuration ideas, and issues detected in real clients to have direct references.', link: 'Consult cases', icon: 'tool', color: '#0F172A' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="deliverables">
        <div style={{ padding: '24px 34px', fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          
          {/* Header Card */}
          <div style={{
            background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12,
            padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxSizing: 'border-box', flexShrink: 0
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>📚</span>
                <h3 style={{ fontFamily: FONT_D, fontSize: 20, fontWeight: 700, color: C.neutralDark, margin: 0 }}>Documentation &amp; Search Center</h3>
                <span style={{ background: '#F2F2F2', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, color: C.neutralMuted }}>5 Resources Available</span>
              </div>
              <p style={{ fontSize: 12.5, color: C.neutralMuted, margin: '6px 0 0', fontWeight: 500 }}>Access all official Murex documentation, training, and support.</p>
            </div>
            <Icon name="books" size={32} color="#D4215B" style={{ opacity: 0.15 }} />
          </div>

          {/* Cards Grid */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Top row cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {items.slice(0, 4).map((c, i) => {
                const cardStart = 1.0 + i * 0.4;
                const t = clampVal((localTime - cardStart) / 0.5, 0, 1);
                const opacityVal = t;
                const translateYVal = (1 - Easing.easeOutQuad(t)) * 10;
                return (
                  <ResourceCard
                    key={c.title}
                    title={c.title}
                    desc={c.desc}
                    link={c.link}
                    icon={c.icon}
                    color={c.color}
                    opacity={opacityVal}
                    translateY={translateYVal}
                  />
                );
              })}
            </div>

            {/* Full width bottom card */}
            {(() => {
              const cardStart = 1.0 + 4 * 0.4;
              const t = clampVal((localTime - cardStart) / 0.5, 0, 1);
              const opacityVal = t;
              const translateYVal = (1 - Easing.easeOutQuad(t)) * 10;
              const c = items[4];
              return (
                <div style={{
                  background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12,
                  padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  boxSizing: 'border-box', opacity: opacityVal, transform: `translateY(${translateYVal}px)`,
                  height: 140, willChange: 'transform, opacity'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <Icon name={c.icon} size={18} color={c.color} />
                      <h4 style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.neutralDark, margin: 0 }}>{c.title}</h4>
                    </div>
                    <p style={{ fontSize: 12, color: C.neutralMuted, margin: 0, lineHeight: 1.4 }}>{c.desc}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: C.primary, cursor: 'pointer' }}>
                    {c.link} <Icon name="arrow-right" size={12} color={C.primary} />
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </BrowserFrame>
    </div>
  );
}

function OnboardingTrackerScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const videos = [
    'Module: Double Entry Systems',
    'Module: Accounting Principles',
    'Module: International Financial Reporting Standards',
    'Module: Valuation Concepts',
    'Module: IAS Measurements',
    'Module: Impairment of Assets',
    'Module: Hedge Accounting - IFRS 9',
    'Module: Fair Value Measurement - IFRS 13',
    'Module: Financial Instruments - IFRS 9',
    'Module: Cash Flow Statement'
  ];

  // Scroll offset simulation
  let scrollOffset = 0;
  if (localTime >= 2.0 && localTime < 6.0) {
    const t = (localTime - 2.0) / 4.0;
    scrollOffset = interpolate([0, 1], [0, 180], Easing.easeInOutQuad)(t);
  } else if (localTime >= 6.0) {
    scrollOffset = 180;
  }

  const clickSequence = [
    { index: 3, checkTime: 1.8, startMove: 1.0, endMove: 1.7 },
    { index: 4, checkTime: 2.6, startMove: 1.9, endMove: 2.5 },
    { index: 5, checkTime: 3.4, startMove: 2.7, endMove: 3.3 },
    { index: 6, checkTime: 4.2, startMove: 3.5, endMove: 4.1 },
    { index: 7, checkTime: 5.0, startMove: 4.3, endMove: 4.9 },
    { index: 8, checkTime: 5.8, startMove: 5.1, endMove: 5.7 },
    { index: 9, checkTime: 6.6, startMove: 5.9, endMove: 6.5 }
  ];

  // Check row completions based on localTime
  const getRowState = (i) => {
    if (i === 0 || i === 1 || i === 2) return true;
    const step = clickSequence.find(s => s.index === i);
    if (step && localTime >= step.checkTime) return true;
    return false;
  };

  let completedCount = 3;
  clickSequence.forEach(s => {
    if (localTime >= s.checkTime) {
      completedCount++;
    }
  });
  const pct = completedCount * 10;

  // Cursor coordinates relative to BrowserFrame content
  let cursorX = 500;
  let cursorY = 400;
  let cursorOpacity = 0;
  let isClicking = false;

  const activeStep = clickSequence.find(s => localTime >= s.startMove && localTime < s.checkTime + 0.1);
  if (activeStep) {
    cursorOpacity = 1;
    const targetX = 85;
    const targetY = 246 + activeStep.index * 42 - scrollOffset;
    
    if (localTime < activeStep.endMove) {
      const t = (localTime - activeStep.startMove) / (activeStep.endMove - activeStep.startMove);
      let prevX = 500, prevY = 400;
      const prevStepIdx = clickSequence.indexOf(activeStep) - 1;
      if (prevStepIdx >= 0) {
        const prevStep = clickSequence[prevStepIdx];
        prevX = 85;
        prevY = 246 + prevStep.index * 42 - scrollOffset;
      }
      cursorX = interpolate([0, 1], [prevX, targetX], Easing.easeInOutQuad)(t);
      cursorY = interpolate([0, 1], [prevY, targetY], Easing.easeInOutQuad)(t);
    } else {
      cursorX = targetX;
      cursorY = targetY;
      if (localTime >= activeStep.endMove && localTime < activeStep.checkTime) {
        isClicking = true;
      }
    }
  } else if (localTime >= 6.7 && localTime < 7.5) {
    cursorOpacity = 1;
    const t = (localTime - 6.7) / 0.8;
    cursorX = interpolate([0, 1], [85, 780], Easing.easeOutQuad)(t);
    cursorY = interpolate([0, 1], [246 + 9 * 42 - scrollOffset, 220], Easing.easeOutQuad)(t);
  }

  // Circular progress ring values
  const r = 38, c = 2 * Math.PI * r;
  const strokeOffset = c * (1 - pct / 100);

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame noNavbar={true}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', fontFamily: FONT }}>
          
          {/* Custom Header matching screenshot */}
          <div style={{
            height: 60, background: 'white', borderBottom: `1.5px solid ${C.neutralBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 34px',
            boxSizing: 'border-box', flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                fontFamily: FONT_D, fontWeight: 800, fontSize: 20, color: C.neutralDark, display: 'flex',
                alignItems: 'center', gap: 6
              }}>
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', background: C.primary, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, fontFamily: FONT_D
                }}>M</div>
                MX<span style={{ color: C.primary }}>Board</span>
              </div>
              <div style={{ width: 1.5, height: 16, background: C.neutralBorder }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: C.neutralMuted }}>Onboarding Tracker</span>
              
              {/* Cloud Sync badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6, background: '#EAFDF7', border: '1px dashed #A3F1D7',
                borderRadius: 20, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: '#14BA82', marginLeft: 10
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#14BA82',
                  boxShadow: `0 0 0 ${2 + Math.sin(localTime * 4) * 2}px rgba(20,186,130,0.2)`
                }} />
                Cloud Sync
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F4F4F6', padding: '4px 14px', borderRadius: 20 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#B01A47', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 10 }}>FD</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralDark, lineHeight: 1.2 }}>Newcomer</span>
                  <span style={{ fontSize: 9.5, fontWeight: 600, color: C.neutralMuted, lineHeight: 1 }}>Consultor Junior</span>
                </div>
              </div>
              <div style={{ width: 1.5, height: 16, background: C.neutralBorder }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: C.neutralMuted, cursor: 'pointer' }}>
                <Icon name="logout" size={14} color={C.neutralMuted} />
                Log Out
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div style={{ flex: 1, padding: 24, background: '#F8F9FA', boxSizing: 'border-box', display: 'flex', gap: 20, overflow: 'hidden' }}>
            
            {/* Left Content Area: Course Modules Card */}
            <div style={{
              flex: 1, background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 14,
              padding: 20, display: 'flex', flexDirection: 'column', gap: 14, boxSizing: 'border-box', overflow: 'hidden'
            }}>
              
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="folder" size={18} color={C.primary} />
                  <h3 style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.neutralDark, margin: 0 }}>MXLearn Onboarding Modules</h3>
                </div>
                <span style={{
                  background: '#EAFDF5', border: '1px solid #A3F1D4', color: '#10B981', fontSize: 10, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: 0.5
                }}>
                  Active Self-Management
                </span>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 14, borderBottom: `1.5px solid ${C.neutralBorder}`, paddingBottom: 10, flexShrink: 0 }}>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: C.neutralMuted, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={13} color={C.neutralMuted} /> Financial Markets for Newcomers
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: C.primary, borderBottom: `2px solid ${C.primary}`, paddingBottom: 10, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={13} color={C.primary} /> Accounting Module
                </span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: C.neutralMuted, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={13} color={C.neutralMuted} /> Liquidation Module
                </span>
              </div>

              {/* Subtabs */}
              <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                <span style={{ background: C.primary, color: 'white', fontSize: 11.5, fontWeight: 700, padding: '6px 12px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={12} color="white" /> Accounting Fundamentals for Newcomers
                </span>
                <span style={{ border: `1.5px dashed ${C.neutralBorder}`, color: C.neutralMuted, fontSize: 11.5, fontWeight: 600, padding: '6px 12px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={12} color={C.neutralMuted} /> Financial Statements Introduction
                </span>
                <span style={{ border: `1.5px dashed ${C.neutralBorder}`, color: C.neutralMuted, fontSize: 11.5, fontWeight: 600, padding: '6px 12px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                  <Icon name="folder" size={12} color={C.neutralMuted} /> Generic EOD Troubleshooting
                </span>
              </div>

              {/* Table Column Titles */}
              <div style={{
                display: 'grid', gridTemplateColumns: '40px 1.8fr 110px 110px', padding: '10px 14px 4px 14px',
                borderBottom: `1.5px solid ${C.neutralBorder}`, fontSize: 10.5, fontWeight: 700, color: C.neutralMuted,
                textTransform: 'uppercase', letterSpacing: 0.5, flexShrink: 0
              }}>
                <span>Status</span>
                <span>Module / Onboarding Video</span>
                <span style={{ textAlign: 'center' }}>Action</span>
                <span style={{ textAlign: 'right' }}>Progress</span>
              </div>

              {/* Table Body (Scroll Wrapper) */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  transform: `translateY(-${scrollOffset}px)`,
                  transition: 'transform 0.08s linear',
                  display: 'flex', flexDirection: 'column'
                }}>
                  {videos.map((title, i) => {
                    const completed = getRowState(i);
                    return (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '40px 1.8fr 110px 110px', alignItems: 'center',
                        padding: '10px 14px', borderBottom: `1px solid ${C.neutralBorder}`,
                        background: '#FFFFFF', minHeight: 42, boxSizing: 'border-box'
                      }}>
                        {/* Status Checkbox */}
                        <div>
                          {completed ? (
                            <div style={{
                              width: 18, height: 18, borderRadius: '50%', background: C.primary,
                              display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                              <Icon name="check" size={11} color="white" />
                            </div>
                          ) : (
                            <div style={{
                              width: 16, height: 16, borderRadius: '50%', border: `1.5px dashed ${C.neutralMuted}`,
                              background: '#FFFFFF'
                            }} />
                          )}
                        </div>

                        {/* Title */}
                        <span style={{ fontSize: 12.5, fontWeight: 700, color: C.neutralDark, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {title}
                        </span>

                        {/* Action Go to Course */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <div style={{
                            padding: '4px 10px', border: `1px solid ${C.primary}30`, borderRadius: 6,
                            background: `${C.primary}05`, color: C.primary, fontSize: 10.5, fontWeight: 700,
                            display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer', whiteSpace: 'nowrap'
                          }}>
                            <Icon name="external-link" size={10} color={C.primary} /> Go to Course
                          </div>
                        </div>

                        {/* Progress Label */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          {completed ? (
                            <div style={{
                              padding: '3px 8px', border: '1px solid #10B98130', borderRadius: 20,
                              background: '#E6FDF4', color: '#10B981', fontSize: 10, fontWeight: 800,
                              display: 'flex', alignItems: 'center', gap: 3
                            }}>
                              <Icon name="circle-check" size={10} color="#10B981" /> COMPLETED
                            </div>
                          ) : (
                            <div style={{
                              padding: '3px 8px', border: '1px solid #94A3B830', borderRadius: 20,
                              background: '#F8FAFC', color: '#64748B', fontSize: 10, fontWeight: 700
                            }}>
                              PENDING
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Onboarding Progress Chart */}
            <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
              
              {/* Progress Donut Card */}
              <div style={{
                background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 14,
                padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, boxSizing: 'border-box'
              }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  Accounting Module Videos
                </div>

                {/* Donut gauge */}
                <div style={{ position: 'relative', width: 100, height: 100 }}>
                  <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r={r} fill="none" stroke="#F1F5F9" strokeWidth="6" />
                    <circle cx="50" cy="50" r={r} fill="none" stroke={C.primary} strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={c} strokeDashoffset={strokeOffset} style={{ transition: 'stroke-dashoffset 0.1s linear' }} />
                  </svg>
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <span style={{ fontFamily: FONT_D, fontSize: 24, fontWeight: 900, color: C.neutralDark, letterSpacing: -0.5 }}>
                      {pct}%
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.neutralDark }}>{completedCount} of 10 Completed</div>
                  <div style={{ fontSize: 11, color: C.neutralMuted, marginTop: 4 }}>Newcomer's Learning Pace</div>
                </div>

                {/* Progress bar */}
                <div style={{ width: '100%', height: 6, background: '#F1F5F9', borderRadius: 10, overflow: 'hidden', marginTop: 4 }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: C.primary, borderRadius: 10, transition: 'width 0.1s linear' }} />
                </div>
              </div>

              {/* Instructions / Info Card */}
              <div style={{
                background: '#0A0A0A', color: 'white', borderRadius: 14, padding: 18, boxSizing: 'border-box',
                display: 'flex', flexDirection: 'column', gap: 10, flex: 1
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: 1 }}>Next Module</div>
                <h4 style={{ fontFamily: FONT_D, fontSize: 15, fontWeight: 700, margin: 0 }}>Financial Statements</h4>
                <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.4 }}>
                  Once Accounting Fundamentals reaches 100%, P&amp;L and Balance Sheet video sessions will unlock automatically.
                </p>
                <div style={{
                  marginTop: 'auto', background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 10,
                  fontSize: 10.5, color: 'rgba(255,255,255,0.8)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6
                }}>
                  <Icon name="info-circle" size={13} color={C.primary} /> Self-paced onboarding track
                </div>
              </div>

            </div>

          </div>

          {/* Mouse pointer */}
          {cursorOpacity > 0 && (
            <div style={{
              position: 'absolute', left: cursorX, top: cursorY, zIndex: 100,
              pointerEvents: 'none', opacity: cursorOpacity, transition: 'opacity 0.2s',
              transform: isClicking ? 'scale(0.85)' : 'none'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3V19.5L9.64 14.36L16.29 21L19.5 17.79L12.85 11.15L19.5 9.64L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="miter" />
              </svg>
            </div>
          )}

        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE: HOURS CONSUMED BY EXPERT `1:10–1:18`
function HoursDashboardScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  // Dynamic progress value for the bar fill and number count (starts at 1.0s, lasts 2.5s)
  const progress = clampVal((localTime - 1.0) / 2.5, 0, 1);
  const t = Easing.easeOutQuad(progress);

  const totalHours = (t * 35.2).toFixed(1);
  const completedSessions = Math.floor(t * 30);

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="dashboard">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          
          {/* Header */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 20, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="clock-play" size={20} color={C.primary} /> Hours Consumed by Expert
            </div>
            <p style={{ fontSize: 12.5, color: C.neutralMuted, margin: '4px 0 0', fontWeight: 500 }}>
              Monitor the actual hours consumed by the junior consultant in their mentoring, masterclasses, and support, classified by expert.
            </p>
          </div>

          {/* Top summaries cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, textAlign: 'center', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Total Actual Hours</div>
              <div style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: C.primary }}>{totalHours} hrs</div>
            </div>
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, textAlign: 'center', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 6 }}>Completed Sessions</div>
              <div style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: C.success }}>{completedSessions}</div>
            </div>
          </div>

          {/* Grid of details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 16 }}>
            
            {/* Card 1: Hours by Session Type */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Hours by Session Type</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {/* Tutoring */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: C.neutralDark, marginBottom: 4 }}>
                    <span>Tutoring</span>
                    <span>{(t * 27.2).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 6, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 77}%`, height: '100%', background: C.success, borderRadius: 20 }} />
                  </div>
                </div>

                {/* Masterclass */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: C.neutralDark, marginBottom: 4 }}>
                    <span>Masterclass</span>
                    <span>0.0 hrs</span>
                  </div>
                  <div style={{ height: 6, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: '0%', height: '100%', background: C.primary, borderRadius: 20 }} />
                  </div>
                </div>

                {/* Support */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: C.neutralDark, marginBottom: 4 }}>
                    <span>Support</span>
                    <span>{(t * 7.5).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 6, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 21}%`, height: '100%', background: C.warning, borderRadius: 20 }} />
                  </div>
                </div>

                {/* Coaching */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, color: C.neutralDark, marginBottom: 4 }}>
                    <span>Coaching</span>
                    <span>{(t * 0.5).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 6, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 2}%`, height: '100%', background: '#9333EA', borderRadius: 20 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Hours by Expert / Consultant */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Hours by Expert / Consultant</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {/* Benjamin Cerda */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.primaryLight, color: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, fontFamily: FONT_D }}>BC</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 2 }}>
                      <span>Benjamín Cerda <span style={{ color: C.success, fontSize: 9.5, fontWeight: 700, marginLeft: 6 }}>TUTOR</span></span>
                      <span>{(t * 31.7).toFixed(1)} hrs</span>
                    </div>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                      <div style={{ width: `${t * 90}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                    </div>
                  </div>
                </div>

                {/* Carolina Sepulveda */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.primaryLight, color: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, fontFamily: FONT_D }}>CS</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 2 }}>
                      <span>Carolina Sepúlveda <span style={{ color: C.success, fontSize: 9.5, fontWeight: 700, marginLeft: 6 }}>TUTOR</span></span>
                      <span>{(t * 3.0).toFixed(1)} hrs</span>
                    </div>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                      <div style={{ width: `${t * 9}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                    </div>
                  </div>
                </div>

                {/* Luana Ortega */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.primaryLight, color: C.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, fontFamily: FONT_D }}>LO</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 2 }}>
                      <span>Luana Ortega <span style={{ color: C.warning, fontSize: 9.5, fontWeight: 700, marginLeft: 6 }}>MANAGER</span></span>
                      <span>{(t * 0.5).toFixed(1)} hrs</span>
                    </div>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                      <div style={{ width: `${t * 1.5}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 16 }}>
            {/* Card 3: Hours by Expert (Consumption) */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Hours by Expert (Consumption)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 3 }}>
                    <span>Benjamín Cerda</span>
                    <span>{(t * 31.7).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 90}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 3 }}>
                    <span>Carolina Sepúlveda</span>
                    <span>{(t * 3.0).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 9}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, fontWeight: 600, color: C.neutralDark, marginBottom: 3 }}>
                    <span>Luana Ortega</span>
                    <span>{(t * 0.5).toFixed(1)} hrs</span>
                  </div>
                  <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{ width: `${t * 1.5}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Deviation (Planned vs Actual) */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Deviation (Planned vs Actual)</h4>
                <div style={{ display: 'flex', gap: 12, fontSize: 11, fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: '#475569', borderRadius: 2 }} /> Planned</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 8, height: 8, background: C.primary, borderRadius: 2 }} /> Real</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Tutoring */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralDark, marginBottom: 4 }}>Tutoring</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                      <div style={{ width: `${t * 68}%`, height: '100%', background: '#475569', borderRadius: 20 }} />
                    </div>
                    <div style={{ fontSize: 10, color: C.neutralMuted, fontWeight: 600 }}>23.9h plan</div>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden', marginTop: 2 }}>
                      <div style={{ width: `${t * 77}%`, height: '100%', background: C.primary, borderRadius: 20 }} />
                    </div>
                    <div style={{ fontSize: 10, color: C.primary, fontWeight: 700 }}>{(t * 27.2).toFixed(1)}h real</div>
                  </div>
                </div>

                {/* Masterclass */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralDark, marginBottom: 4 }}>Masterclass</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden' }}>
                      <div style={{ width: '0%', height: '100%', background: '#475569', borderRadius: 20 }} />
                    </div>
                    <div style={{ fontSize: 10, color: C.neutralMuted, fontWeight: 600 }}>0.0h plan</div>
                    <div style={{ height: 5, background: C.neutralLight, borderRadius: 20, overflow: 'hidden', marginTop: 2 }}>
                      <div style={{ width: '0%', height: '100%', background: C.primary, borderRadius: 20 }} />
                    </div>
                    <div style={{ fontSize: 10, color: C.primary, fontWeight: 700 }}>0.0h real</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE: TIMESHEET PORTAL & REGISTRATION `1:22–1:30`
function TimesheetScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  // Animation values for input conversion
  let hoursVal = 8;
  let minutesVal = 480;
  let resultVal = "1.0";
  let scaleBadge = 1.0;
  
  if (localTime >= 1.5 && localTime < 3.2) {
    const typingProgress = (localTime - 1.5) / 1.7; // 0 to 1
    if (typingProgress < 0.5) {
      hoursVal = "";
      minutesVal = "";
      resultVal = "-";
    } else {
      hoursVal = 1;
      minutesVal = 60;
      resultVal = "0.13";
    }
  } else if (localTime >= 3.2) {
    hoursVal = 1;
    minutesVal = 60;
    resultVal = "0.13";
    
    // Result badge zoom pulse from 3.2s to 4.2s (zoom in and out)
    if (localTime >= 3.2 && localTime < 4.2) {
      const pulseT = (localTime - 3.2) / 1.0;
      scaleBadge = 1.0 + Math.sin(pulseT * Math.PI) * 0.35;
    }
  }

  const rows = [
    { project: 'AMER-CS-FIN PL-TEAM', activity: 'GROWING OTHERS', applies: 'NO', risk: true },
    { project: 'AMER-CS-FIN PL-TEAM', activity: 'INTERNAL SUPPORT', applies: 'YES', risk: false },
    { project: 'AMER-CS-FIN PL-TEAM', activity: 'ORG-CAREER MANAGEMENT & HR', applies: 'NO', risk: true },
    { project: 'AMER-CS-FIN PL-TEAM', activity: 'ORG-MEETING', applies: 'YES', risk: false },
    { project: 'AMER-CS-FIN PL-NEWHIRE ONBD', activity: 'TRAINING-ATTENDANCE', applies: 'YES', risk: false },
    { project: 'AMER-CS-FIN PL-NEWHIRE ONBD', activity: 'TRAINING-PREPARATION & PRESENT', applies: 'YES', risk: false }
  ];

  const getRowStyle = (rowIndex) => {
    const startTime = 3.5 + rowIndex * 0.25;
    const progress = clampVal((localTime - startTime) / 0.3, 0, 1);
    const opacityVal = progress;
    const translateYVal = (1 - Easing.easeOutQuad(progress)) * 10;
    return {
      opacity: opacityVal,
      transform: `translateY(${translateYVal}px)`,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.5fr 0.8fr',
      padding: '12px 14px',
      borderTop: `1px solid ${C.neutralBorder}`,
      alignItems: 'center',
      boxSizing: 'border-box',
      willChange: 'opacity, transform'
    };
  };

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="timesheet">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          
          {/* Header Card */}
          <div style={{
            background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12,
            padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxSizing: 'border-box', flexShrink: 0
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-flex', padding: 8, background: '#FDECEC', borderRadius: 8 }}><Icon name="calendar-time" size={20} color="#D4215B" /></span>
                <div>
                  <h3 style={{ fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark, margin: 0 }}>Timesheet Portal &amp; Registration Guide</h3>
                  <p style={{ fontSize: 12, color: C.neutralMuted, margin: '2px 0 0', fontWeight: 500 }}>Information, department codes, and hour conversion tool for newcomers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Card */}
          <div style={{
            background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12,
            padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxSizing: 'border-box', flexShrink: 0
          }}>
            <div>
              <h4 style={{ fontFamily: FONT_D, fontSize: 13.5, fontWeight: 700, color: C.neutralDark, margin: 0 }}>Timesheet Platform</h4>
              <p style={{ fontSize: 11.5, color: C.neutralMuted, margin: '2px 0 0' }}>Enter your hours worked in the official portal using the codes assigned to your profile.</p>
            </div>
            <div style={{
              background: '#8B183C', color: 'white', fontSize: 12, fontWeight: 700,
              padding: '8px 14px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer'
            }}>
              Go to Timesheet Portal <Icon name="external-link" size={12} color="white" />
            </div>
          </div>

          {/* Two Columns Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr', gap: 16, flex: 1 }}>
            
            {/* Left: Conversion Calculator */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Conversion Calculator</h4>
                <p style={{ fontSize: 11.5, color: C.neutralMuted, margin: '6px 0 0', lineHeight: 1.4 }}>
                  The Timesheet system uses a decimal scale where a full 8-hour workday equals 1.0 (1 hour = 0.125 and half an hour = 0.0625).
                </p>
              </div>

              <div style={{ height: 1, background: C.neutralLight }} />

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralMuted, marginBottom: 12 }}>Custom converter:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.neutralMuted }}>HOURS</span>
                    <div style={{
                      padding: '8px 12px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 6,
                      fontSize: 13, fontWeight: 700, color: C.neutralDark, background: '#FFFFFF',
                      width: 80, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                      <span>{hoursVal}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 8, color: C.neutralMuted }}>▲▼</div>
                    </div>
                  </div>

                  <span style={{ fontSize: 13, fontWeight: 700, color: C.neutralMuted, marginTop: 15 }}>or</span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.neutralMuted }}>MINUTES</span>
                    <div style={{
                      padding: '8px 12px', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 6,
                      fontSize: 13, fontWeight: 700, color: C.neutralDark, background: '#FFFFFF',
                      width: 90, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                      <span>{minutesVal}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 8, color: C.neutralMuted }}>▲▼</div>
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '14px 20px', background: C.primaryLight, border: `1.5px solid ${C.primary}30`,
                  borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: C.neutralDark }}>Result in Timesheet:</span>
                  <span style={{
                    fontFamily: FONT_D, fontSize: 24, fontWeight: 800, color: C.primary,
                    transform: `scale(${scaleBadge})`, transition: 'transform 0.1s linear', display: 'inline-block'
                  }}>{resultVal}</span>
                </div>
              </div>
            </div>

            {/* Right: Charging Codes Table */}
            <div style={{ background: '#FFFFFF', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h4 style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, margin: 0, textTransform: 'uppercase', letterSpacing: 0.5 }}>Charging Codes (Newcomers)</h4>
              
              <div style={{ border: `1.5px solid ${C.neutralBorder}`, borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 0.8fr', padding: '10px 14px', background: '#F9F9FB', fontSize: 10.5, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5, boxSizing: 'border-box' }}>
                  <span>Project</span><span>Activity</span><span>Applies to Newcomer</span>
                </div>
                
                {rows.map((r, i) => (
                  <div key={i} style={getRowStyle(i)}>
                    <span style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralDark, fontFamily: 'monospace' }}>{r.project}</span>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: C.neutralDark }}>{r.activity}</span>
                    <span style={{
                      fontSize: 10.5, fontWeight: 800, padding: '3px 12px', borderRadius: 20, width: 'fit-content', textAlign: 'center',
                      background: r.risk ? C.dangerLight : C.successLight,
                      color: r.risk ? '#E24B4A' : C.success
                    }}>
                      {r.applies}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE 6 — CALENDAR HUB `1:34–1:42`
function CalendarScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;
  
  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const calendarEvents = [
    { day: 1, label: 'Onboarding', color: '#0284C7', popTime: 0.3 },
    { day: 3, label: 'EOD Sync', color: '#10B981', popTime: 0.5 },
    { day: 6, label: 'Murex Intro', color: '#8B5CF6', popTime: 0.7 },
    { day: 8, label: 'Tutoring', color: '#0284C7', popTime: 0.9 },
    { day: 10, label: 'Manager Sync', color: '#EA580C', popTime: 1.1 },
    { day: 13, label: 'Flows Review', color: '#EC4899', popTime: 1.3 },
    { day: 15, label: 'Tutoring', color: '#0284C7', popTime: 1.5 },
    { day: 16, label: 'EOD Review', color: '#10B981', popTime: 1.7 },
    { day: 20, label: 'Tech Sync', color: '#8B5CF6', popTime: 1.9 },
    { day: 22, label: 'Tutoring', color: '#0284C7', popTime: 2.1 },
    { day: 24, label: 'EOD Sync', color: '#10B981', popTime: 2.3 },
    { day: 27, label: 'Pega Review', color: '#64748B', popTime: 2.5 },
    { day: 29, label: 'Tutoring', color: '#0284C7', popTime: 2.7 },
    { day: 31, label: 'EOD Call', color: '#10B981', popTime: 2.9 },
    { day: 2, label: 'Class', color: '#9333ea', popTime: 0.8 },
    { day: 7, label: 'Liquidation', color: '#EA580C', popTime: 1.2 },
    { day: 9, label: 'Flows Sync', color: '#EC4899', popTime: 1.6 },
    { day: 14, label: 'Audit Call', color: '#E24B4A', popTime: 2.0 },
    { day: 21, label: 'Murex Lab', color: '#0284C7', popTime: 2.4 },
    { day: 28, label: 'Final Sync', color: '#10B981', popTime: 2.8 }
  ];

  const calendarCells = [];
  // June 29-30
  calendarCells.push({ num: 29, isCurrentMonth: false });
  calendarCells.push({ num: 30, isCurrentMonth: false });
  // July 1-31
  for (let i = 1; i <= 31; i++) {
    calendarCells.push({ num: i, isCurrentMonth: true });
  }
  // August 1-2
  calendarCells.push({ num: 1, isCurrentMonth: false });
  calendarCells.push({ num: 2, isCurrentMonth: false });

  // Friday Event animation bounds
  const showFridayEvent = localTime >= 3.2;
  let fridayScale = 0;
  if (localTime >= 3.4 && localTime < 4.1) {
    const t = (localTime - 3.4) / 0.7;
    fridayScale = interpolate([0, 1], [0, 1], Easing.easeOutBack)(t);
  } else if (localTime >= 4.1) {
    fridayScale = 1;
  }

  // Invitation Popup animation bounds
  const showInvite = localTime >= 1.5 && localTime < 3.8;
  let inviteOpacity = 1;
  let inviteScale = 1;
  if (localTime >= 1.5 && localTime < 1.9) {
    const t = (localTime - 1.5) / 0.4;
    inviteOpacity = t;
    inviteScale = interpolate([0, 1], [0.8, 1.0], Easing.easeOutBack)(t);
  } else if (localTime >= 3.2 && localTime < 3.8) {
    const t = (localTime - 3.2) / 0.6;
    inviteOpacity = 1 - t;
    inviteScale = interpolate([0, 1], [1.0, 0.85], Easing.easeInQuad)(t);
  }

  // Cursor coordinates relative to calendar area
  let cursorX = 800;
  let cursorY = 500;
  let cursorOpacity = 0;
  
  if (localTime >= 1.8 && localTime < 3.0) {
    cursorOpacity = 1;
    const t = (localTime - 1.8) / 1.2;
    cursorX = interpolate([0, 1], [920, 840], Easing.easeInOutQuad)(t);
    cursorY = interpolate([0, 1], [520, 415], Easing.easeInOutQuad)(t);
  } else if (localTime >= 3.0 && localTime < 3.4) {
    cursorOpacity = 1;
    cursorX = 840;
    cursorY = 415;
  }

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="calendar">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', gap: 20, overflow: 'hidden', position: 'relative' }}>
          
          {/* Calendar Invite Pop-up Card */}
          {showInvite && (
            <div style={{
              position: 'absolute', left: '42%', top: '48%',
              transform: `translate(-50%, -50%) scale(${inviteScale})`,
              width: 380, padding: 22, background: 'white', borderRadius: 14,
              border: `1.5px solid ${C.neutralBorder}`,
              boxShadow: '0 24px 50px rgba(0,0,0,0.12)', zIndex: 100,
              opacity: inviteOpacity, display: 'flex', flexDirection: 'column', gap: 12,
              fontFamily: FONT, boxSizing: 'border-box', transition: 'all 0.1s ease-out'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: 0.8 }}>New Invitation</span>
                <span style={{ fontSize: 10, color: C.neutralMuted }}>Today 10:45 AM</span>
              </div>
              <div>
                <h4 style={{ fontFamily: FONT_D, fontSize: 15.5, fontWeight: 700, color: C.neutralDark, margin: '0 0 3px' }}>
                  Accounting Rules Sync
                </h4>
                <p style={{ fontSize: 11.5, color: C.neutralMuted, margin: 0 }}>
                  Hosted by <strong>Benjamín Cerda</strong>
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: C.neutralDark, fontWeight: 600, marginTop: 6 }}>
                  <Icon name="clock" size={13} color={C.primary} /> Friday at 14:00 (2:00 PM)
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 4 }}>
                <button style={{
                  padding: '7px 14px', background: 'white', border: `1.5px solid ${C.neutralBorder}`,
                  borderRadius: 6, fontSize: 11.5, fontWeight: 700, color: C.neutralMuted, cursor: 'pointer'
                }}>Decline</button>
                <button style={{
                  padding: '7px 14px', background: localTime >= 3.0 ? '#B01A47' : C.primary, border: 'none',
                  borderRadius: 6, fontSize: 11.5, fontWeight: 700, color: 'white', cursor: 'pointer',
                  transform: localTime >= 3.0 && localTime < 3.2 ? 'scale(0.96)' : 'none',
                  transition: 'transform 0.05s'
                }}>Accept</button>
              </div>
            </div>
          )}

          {/* Mouse cursor pointer */}
          {cursorOpacity > 0 && (
            <div style={{
              position: 'absolute', left: cursorX, top: cursorY, zIndex: 150,
              pointerEvents: 'none', opacity: cursorOpacity, transition: 'opacity 0.2s',
              transform: localTime >= 3.0 && localTime < 3.2 ? 'scale(0.9)' : 'none'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3V19.5L9.64 14.36L16.29 21L19.5 17.79L12.85 11.15L19.5 9.64L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="miter" />
              </svg>
            </div>
          )}

          {/* Calendar Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark }}>
                  <Icon name="calendar" size={18} color={C.primary} /> My Calendar Hub
                </div>
                <div style={{ fontSize: 12.5, color: C.neutralMuted, marginTop: 2, fontWeight: 500 }}>Schedule of tutoring sessions, reviews, and syncs.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', padding: '5px 12px', borderRadius: 8, border: `1px solid ${C.neutralBorder}` }}>
                <Icon name="chevron-left" size={14} color={C.neutralMuted} />
                <span style={{ fontWeight: 700, fontSize: 12.5, color: C.neutralDark, fontFamily: FONT_D }}>July 2026</span>
                <Icon name="chevron-right" size={14} color={C.neutralMuted} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, flex: 1, overflowY: 'auto' }}>
              {days.map(d => (
                <div key={d} style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: C.neutralMuted, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{d}</div>
              ))}
              
              {calendarCells.map((cell, idx) => {
                // Find all matching events for this day that popped in
                const cellEvents = cell.isCurrentMonth
                  ? calendarEvents.filter(e => e.day === cell.num && localTime >= e.popTime)
                  : [];

                return (
                  <div key={idx} style={{
                    background: cell.isCurrentMonth ? 'white' : '#F9F9FB',
                    border: `1.5px solid ${cell.isCurrentMonth ? C.neutralBorder : '#F1F5F9'}`,
                    borderRadius: 8, padding: '5px 8px', display: 'flex', flexDirection: 'column',
                    minHeight: 62, boxSizing: 'border-box', overflow: 'hidden', position: 'relative'
                  }}>
                    {/* Day Number */}
                    <div style={{
                      fontSize: 11, fontWeight: 700,
                      color: cell.isCurrentMonth ? C.neutralDark : C.neutralMuted,
                      marginBottom: 2
                    }}>{cell.num}</div>

                    {/* Pop-in events list */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {cellEvents.map(e => {
                        const popT = clampVal((localTime - e.popTime) / 0.4, 0, 1);
                        const scaleVal = Easing.easeOutBack(popT);
                        const opacityVal = popT;
                        return (
                          <div key={e.label} style={{
                            background: `${e.color}10`, border: `1px solid ${e.color}25`, color: e.color,
                            fontSize: 8, fontWeight: 800, padding: '1px 3px', borderRadius: 3,
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            transform: `scale(${scaleVal})`, opacity: opacityVal, transformOrigin: 'left center',
                            lineHeight: 1
                          }}>
                            {e.label}
                          </div>
                        );
                      })}

                      {/* Accepted Friday meeting */}
                      {cell.isCurrentMonth && cell.num === 17 && showFridayEvent && (
                        <div style={{
                          background: `${C.primary}10`, border: `1px solid ${C.primary}25`, color: C.primary,
                          fontSize: 8, fontWeight: 800, padding: '1px 3px', borderRadius: 3,
                          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                          transform: `scale(${fridayScale})`, transformOrigin: 'left center',
                          lineHeight: 1
                        }}>
                          Accounting
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Calendar Sidebar */}
          <div style={{ width: 280, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#0A0A0A', borderRadius: 12, padding: 16, color: 'white', boxShadow: 'none' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.primary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Next Up</div>
              <h4 style={{ fontFamily: FONT_D, fontSize: 15, fontWeight: 700, color: 'white', margin: '0 0 4px' }}>Tutoring Session</h4>
              <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                <Icon name="clock" size={12} color="rgba(255,255,255,0.7)" /> Tomorrow, 10:00 AM
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', padding: 8, borderRadius: 6 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: C.primary, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 10.5 }}>BC</div>
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 700 }}>Benjamín Cerda</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>Mentor &amp; Tutor</div>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 16, flex: 1, boxSizing: 'border-box' }}>
              <div style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.neutralDark, marginBottom: 10 }}>Categories</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: C.neutralMuted, fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'rgba(2,132,199,0.08)', border: '1.5px solid #0284C7' }} />
                  Mandatory Tutoring
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: C.neutralMuted, fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'rgba(234,88,12,0.08)', border: '1.5px solid #EA580C' }} />
                  Manager Session
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: C.neutralMuted, fontWeight: 500 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'rgba(147,51,234,0.08)', border: '1.5px solid #9333ea' }} />
                  Team Masterclass
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE 8 — ADMINISTRATION DASHBOARD `1:46–1:54`
function AdminMetricCard({ label, value, sub, color, icon, localTime }) {
  const strokeColor = color || C.primary;
  const isUp = color === C.success;
  
  // Animate card count metrics
  const progress = clampVal((localTime - 0.8) / 2.0, 0, 1);
  const t = Easing.easeOutQuad(progress);
  
  let displayVal = "0";
  if (label === "Active Consultants") {
    displayVal = Math.floor(t * 6).toString();
  } else if (label === "Average Week") {
    displayVal = (t * 9.6).toFixed(1);
  } else if (label === "Passing Rate") {
    displayVal = Math.floor(t * 91) + "%";
  } else if (label === "Pending Reviews") {
    displayVal = Math.floor(t * 1).toString();
  } else {
    displayVal = value;
  }

  // Draw chart stroke offset dynamically
  const pathLength = 80;
  const strokeDashoffset = pathLength * (1 - t);

  return (
    <div style={{ background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: C.neutralMuted }}>
          <Icon name={icon} size={15} color={C.neutralMuted} /> {label}
        </div>
        <div>
          <div style={{ fontFamily: FONT_D, fontSize: 28, fontWeight: 800, color: C.neutralDark, margin: '8px 0 2px', letterSpacing: -0.5 }}>{displayVal}</div>
          <div style={{ fontSize: 11.5, color: color || C.neutralMuted, fontWeight: 600 }}>{sub}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', minHeight: 40 }}>
        <svg width="60" height="25" style={{ overflow: 'visible' }}>
          <path
            d={isUp ? "M0,20 L15,14 L30,16 L45,8 L60,4" : "M0,6 L15,14 L30,10 L45,18 L60,22"}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
      </div>
    </div>
  );
}

function AdminScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;
  
  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const progress = clampVal((localTime - 1.2) / 2.0, 0, 1);
  const t = Easing.easeOutQuad(progress);

  const rows = [
    { name: 'Newcomer A', role: 'Week 12', progress: Math.floor(t * 91), score: Math.floor(t * 95), risk: false, status: 'On track' },
    { name: 'Newcomer B', role: 'Week 12', progress: Math.floor(t * 91), score: Math.floor(t * 91), risk: false, status: 'On track' },
    { name: 'Newcomer C', role: 'Week 5', progress: Math.floor(t * 40), score: Math.floor(t * 71), risk: true, status: 'At risk' },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="admin">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{
                background: C.neutralDark, color: 'white', fontSize: 10.5, fontWeight: 700, padding: '4px 12px',
                borderRadius: 20, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 4,
                fontFamily: FONT_D, letterSpacing: 0.5
              }}><Icon name="shield-check" size={12} color="white" /> Administration Panel</span>
              <div style={{ fontFamily: FONT_D, fontSize: 22, fontWeight: 700, color: C.neutralDark, letterSpacing: -0.5 }}>Overview of Team Progress</div>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, background: C.primary, color: 'white', fontSize: 12.5,
              fontWeight: 700, padding: '9px 16px', borderRadius: 8, cursor: 'pointer'
            }}><Icon name="user-plus" size={15} color="white" /> Register Consultant</div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            <AdminMetricCard label="Active Consultants" value="6" sub="+2 this month" color={C.success} icon="users" localTime={localTime} />
            <AdminMetricCard label="Average Week" value="9.6" sub="out of 12 weeks" icon="calendar-stats" localTime={localTime} />
            <AdminMetricCard label="Passing Rate" value="91%" sub="↑ vs target of 70%" color={C.success} icon="discount-check" localTime={localTime} />
            <AdminMetricCard label="Pending Reviews" value="1" sub="Require evaluation" color={C.warning} icon="clipboard-list" localTime={localTime} />
          </div>
          
          <div style={{ background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr', padding: '12px 18px', background: '#F9F9FB', fontSize: 11, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5, boxSizing: 'border-box' }}>
              <span>Consultant</span><span>Current Week</span><span>Progress</span><span>Avg. Score</span>
            </div>
            {rows.map(r => (
              <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr 1fr', padding: '12px 18px', borderTop: `1.5px solid ${C.neutralBorder}`, alignItems: 'center', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', background: r.risk ? C.dangerLight : C.successLight,
                    color: r.risk ? C.danger : C.success, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: FONT_D, fontWeight: 800, fontSize: 12.5, flexShrink: 0,
                  }}>{r.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: C.neutralDark }}>{r.name}</div>
                    <div style={{ fontSize: 10.5, color: r.risk ? C.danger : C.neutralMuted, fontWeight: 600 }}>{r.status}</div>
                  </div>
                </div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: C.neutralDark }}>{r.role}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ flex: 1, height: 5, background: C.neutralLight, borderRadius: 20 }}>
                    <div style={{ width: `${r.progress}%`, height: '100%', borderRadius: 20, background: r.risk ? C.warning : C.success }} />
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: C.neutralDark }}>{r.progress}%</span>
                </div>
                <span style={{
                  fontWeight: 800, fontSize: 11.5, background: r.risk ? C.dangerLight : C.successLight,
                  color: r.risk ? C.danger : C.success, padding: '3px 8px', borderRadius: 4, width: 'fit-content'
                }}>{r.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE 10 — LIVE EVALUATIONS `1:58–2:06`
function QuizScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;
  
  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const options = [
    { k: 'A', text: 'Analyze and execute customer transactions on the trading platform.' },
    { k: 'B', text: 'Define accounting rules and balance journal ledger positions.' },
    { k: 'C', text: 'Set up end-of-day automation workflows and parameters.' },
    { k: 'D', text: 'Monitor system security escalation channels and accounts.' }
  ];

  const isSelected = localTime >= 2.5;

  // Cursor animation for QuizScene (clicking Option B)
  let cursorX = 600;
  let cursorY = 420;
  let cursorOpacity = 0;
  let isClicking = false;
  
  if (localTime >= 1.0 && localTime < 2.5) {
    cursorOpacity = 1;
    const t = (localTime - 1.0) / 1.5;
    cursorX = interpolate([0, 1], [600, 380], Easing.easeInOutQuad)(t);
    cursorY = interpolate([0, 1], [420, 330], Easing.easeInOutQuad)(t);
  } else if (localTime >= 2.5 && localTime < 3.2) {
    cursorOpacity = 1;
    cursorX = 380;
    cursorY = 330;
    isClicking = true;
  }

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="evaluation">
        <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
          <div style={{ width: 720, background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 16, padding: '24px 30px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, fontWeight: 700, color: C.primary, letterSpacing: 0.8, marginBottom: 16, fontFamily: FONT_D }}>
              <span>MX.3 PLATFORM CERTIFICATION</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, background: C.primaryLight, color: C.primary, padding: '4px 12px', borderRadius: 8, fontWeight: 700 }}>
                <Icon name="clock" size={13} color={C.primary} /> 14:38
              </span>
            </div>
            <div style={{ height: 4, background: C.neutralLight, borderRadius: 20, marginBottom: 18 }}>
              <div style={{ width: '42%', height: '100%', background: C.primary, borderRadius: 20 }} />
            </div>
            <div style={{ fontSize: 12.5, color: C.neutralMuted, fontWeight: 700, marginBottom: 6 }}>Question 5 of 12</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: C.neutralDark, marginBottom: 20, lineHeight: 1.4 }}>
              What is the primary operational responsibility of the Front Office group?
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {options.map((o, i) => {
                const isItemB = o.k === 'B';
                const active = isSelected && isItemB;
                return (
                  <div key={o.k} style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10,
                    fontSize: 13.5, border: `1.5px solid ${active ? C.primary : C.neutralBorder}`,
                    background: active ? C.primaryLight : 'white', color: active ? C.primaryText : C.neutralDark,
                    fontWeight: active ? 700 : 500, boxSizing: 'border-box', cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      border: `2px solid ${active ? C.primary : C.neutralMuted}`,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 800, flexShrink: 0,
                      background: active ? C.primary : 'transparent',
                      color: active ? 'white' : C.neutralMuted
                    }}>
                      {o.k}
                    </span>
                    {o.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mouse pointer */}
          {cursorOpacity > 0 && (
            <div style={{
              position: 'absolute', left: cursorX, top: cursorY, zIndex: 150,
              pointerEvents: 'none', opacity: cursorOpacity, transition: 'opacity 0.2s',
              transform: isClicking ? 'scale(0.85)' : 'none'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4.5 3V19.5L9.64 14.36L16.29 21L19.5 17.79L12.85 11.15L19.5 9.64L4.5 3Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="miter" />
              </svg>
            </div>
          )}
        </div>
      </BrowserFrame>
    </div>
  );
}

// Helper component for dynamic circular progress ring
function ProgressDonut({ pct, label, color, localTime }) {
  const r = 46, c = 2 * Math.PI * r;
  // Animate the donut fill based on localTime
  const progress = clampVal((localTime - 1.0) / 2.5, 0, 1);
  const t = Easing.easeOutQuad(progress);
  const currentPct = Math.floor(t * pct);
  const strokeOffset = c * (1 - currentPct / 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ position: 'relative', width: 114, height: 114 }}>
        <svg width="114" height="114" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="57" cy="57" r={r} fill="none" stroke="#F2F2F2" strokeWidth="8" />
          <circle cx="57" cy="57" r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={strokeOffset} style={{ transition: 'stroke-dashoffset 0.05s linear' }} />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: C.neutralDark, letterSpacing: -0.5 }}>
            {currentPct}%
          </span>
        </div>
      </div>
      <div style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.neutralDark, textAlign: 'center', maxWidth: 120, lineHeight: 1.2 }}>
        {label}
      </div>
    </div>
  );
}

// SCENE 12 — AUTONOMY PERCEPTION `2:10–2:16` (3 Dynamic Donuts: Comm Skills 77%, Hands On 100%, Independence 89%)
function AutonomyScene() {
  const { localTime, duration } = useSprite();
  
  const fillT = clampVal((localTime - 1.0) / 2.5, 0, 1);
  const pct = Math.floor(Easing.easeOutQuad(fillT) * 85);
  
  let opacity = clampVal(localTime / 0.6, 0, 1);
  
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    opacity = 1 - t;
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', gap: 36,
      opacity, willChange: 'opacity'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: C.neutralDark, letterSpacing: -0.5 }}>
          Achieve Autonomy
        </div>
        <div style={{
          width: 500, height: 16, background: '#F2F2F2', borderRadius: 99,
          overflow: 'hidden', border: '1.5px solid #F2F2F2', position: 'relative'
        }}>
          <div style={{
            height: '100%', width: `${pct}%`, background: '#D4215B',
            borderRadius: 99, transition: 'width 0.05s linear'
          }} />
        </div>
        <div style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: '#D4215B', letterSpacing: -1, marginTop: 4 }}>
          {pct}% Overall Average
        </div>
      </div>

      {/* 3 Donut Graphs */}
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center', marginTop: 10 }}>
        <ProgressDonut pct={77} label="Communication Skills" color="#0284C7" localTime={localTime} />
        <ProgressDonut pct={100} label="Hands On" color="#D4215B" localTime={localTime} />
        <ProgressDonut pct={89} label="Independence" color="#1D9E75" localTime={localTime} />
      </div>
    </div>
  );
}

// SCENE 13 — CERTIFICATION CLOSE `2:16–2:24`
function CertificateScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clampVal(localTime / 0.7, 0, 1);
  const cardScale = Easing.easeOutBack(entryT);
  const cardOpacity = entryT;
  
  const drawT = clampVal((localTime - 0.7) / 0.8, 0, 1);
  const strokeOffset = 1800 * (1 - Easing.easeOutQuad(drawT));
  
  let currentCardOpacity = cardOpacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentCardOpacity = 1 - t;
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
          <svg width="520" height="380" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <rect
              x="0.75" y="0.75" width="518.5" height="378.5" rx="20" ry="20"
              fill="none" stroke="#D4215B" strokeWidth="1.5"
              strokeDasharray="1800" strokeDashoffset={strokeOffset}
            />
          </svg>
          
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 24, color: C.neutralDark }}>
              MX<span style={{ color: C.primary }}>Board</span>
            </div>
            <div style={{ width: 30, height: 1.5, background: C.primary, margin: '8px 0 4px' }} />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_D, fontSize: 28, fontWeight: 700, color: C.primary, marginBottom: 4 }}>
              Newcomer
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: C.neutralDark, letterSpacing: -0.1 }}>
              reached full autonomy
            </div>
            <div style={{ fontSize: 13, color: C.neutralMuted, fontWeight: 600, marginTop: 4 }}>
              Finance &amp; PL · 2026
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${C.neutralLight}`, paddingTop: 18, fontSize: 12, fontWeight: 600, color: C.neutralMuted }}>
            <span>Certified</span>
            <span style={{ color: C.neutralDark }}>Luana Ortega</span>
          </div>
        </div>
      )}
    </div>
  );
}

// SCENE 14 — WELCOME OUTRO `2:24–2:28`
function OutroScene() {
  const { localTime } = useSprite();
  const op = Math.min(localTime / 0.8, 1);
  const scale = interpolate([0, 4], [0.98, 1.02], Easing.easeOutQuad)(localTime);
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', opacity: op, transform: `scale(${scale})`,
      background: '#FFFFFF',
    }}>
      <div style={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,33,91,0.06) 0%, rgba(212,33,91,0) 70%)',
        filter: 'blur(50px)',
      }} />
      
      <div style={{ fontFamily: FONT_D, fontWeight: 800, fontSize: 56, color: C.neutralDark, letterSpacing: -1, zIndex: 1 }}>
        Welcome to MX<span style={{ color: C.primary }}>Board</span>.
      </div>
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

      {/* 0:20–0:30  →  Dashboard · 12 weeks reveal */}
      <Sprite start={20} end={30}>
        <DashboardScene />
      </Sprite>

      {/* 0:30–0:34  →  Transition (Dashboard -> Simulation Games) */}
      <Sprite start={30} end={34}>
        <TextTransition
          line1="Simulation Games."
          line2="Drag and drop to match account types."
          highlightWord="match"
        />
      </Sprite>

      {/* 0:34–0:42  →  Accounts Game Mockup */}
      <Sprite start={34} end={42}>
        <AccountsGameScene />
      </Sprite>

      {/* 0:42–0:46  →  Transition (Simulation -> FX Lifecycle) */}
      <Sprite start={42} end={46}>
        <TextTransition
          line1="FX Lifecycle Simulator."
          line2="Track trade events from Trade Date to Value Date."
          highlightWord="events"
        />
      </Sprite>

      {/* 0:46–0:54  →  FX Lifecycle Timeline Mockup */}
      <Sprite start={46} end={54}>
        <LifecycleScene />
      </Sprite>

      {/* 0:54–0:58  →  Transition (FX Lifecycle -> Documentation Center) */}
      <Sprite start={54} end={58}>
        <TextTransition
          line1="Documentation Center."
          line2="All Murex resources in one website."
          highlightWord="resources"
        />
      </Sprite>

      {/* 0:58–1:06  →  Documentation Center Mockup */}
      <Sprite start={58} end={66}>
        <ResourcesScene />
      </Sprite>

      {/* 1:06–1:10  →  Transition (Documentation -> Onboarding Tracker) */}
      <Sprite start={66} end={70}>
        <TextTransition
          line1="Onboarding Tracker."
          line2="Access official Finance PL videos in one place."
          highlightWord="videos"
        />
      </Sprite>

      {/* 1:10–1:18  →  Onboarding Tracker Mockup */}
      <Sprite start={70} end={78}>
        <OnboardingTrackerScene />
      </Sprite>

      {/* 1:18–1:22  →  Transition (Onboarding Tracker -> Hours Control) */}
      <Sprite start={78} end={82}>
        <TextTransition
          line1="Hours Control by Expert."
          line2="Monitor mentoring and support hours."
          highlightWord="mentoring"
        />
      </Sprite>

      {/* 1:22–1:30  →  Hours Consumed Dashboard Mockup */}
      <Sprite start={82} end={90}>
        <HoursDashboardScene />
      </Sprite>

      {/* 1:30–1:34  →  Transition (Hours Control -> Timesheet Portal) */}
      <Sprite start={90} end={94}>
        <TextTransition
          line1="Timesheet Hub."
          line2="Decimal hour conversion and charging codes."
          highlightWord="conversion"
        />
      </Sprite>

      {/* 1:34–1:42  →  Timesheet Calculator and Management Mockup */}
      <Sprite start={94} end={102}>
        <TimesheetScene />
      </Sprite>

      {/* 1:42–1:46  →  Transition (Timesheet -> Calendar) */}
      <Sprite start={102} end={106}>
        <TextTransition
          line1="Calendar Hub."
          line2="All your meetings, in one place."
          highlightWord="meetings"
        />
      </Sprite>

      {/* 1:46–1:54  →  Calendar Hub */}
      <Sprite start={106} end={114}>
        <CalendarScene />
      </Sprite>

      {/* 1:54–1:58  →  Transition (Calendar -> Admin) */}
      <Sprite start={114} end={118}>
        <TextTransition
          line1="Administration Panel."
          line2="Real-time tracking of every newcomer."
          highlightWord="tracking"
        />
      </Sprite>

      {/* 1:58–2:06  →  Admin Dashboard */}
      <Sprite start={118} end={126}>
        <AdminScene />
      </Sprite>

      {/* 2:06–2:10  →  Transition (Admin -> Quiz) */}
      <Sprite start={126} end={130}>
        <TextTransition
          line1="Live Evaluations."
          line2="Technical knowledge, put to the test."
          highlightWord="test"
        />
      </Sprite>

      {/* 2:10–2:18  →  Live Quiz */}
      <Sprite start={130} end={138}>
        <QuizScene />
      </Sprite>

      {/* 2:18–2:22  →  Transition (Quiz -> Autonomy) */}
      <Sprite start={138} end={142}>
        <TextTransition
          line1="Autonomy Perception."
          line2="Rising from day one."
          highlightWord="Rising"
        />
      </Sprite>

      {/* 2:22–2:28  →  Autonomy Bar & Donut Rings */}
      <Sprite start={142} end={148}>
        <AutonomyScene />
      </Sprite>

      {/* 2:28–2:36  →  Certificate Close */}
      <Sprite start={148} end={156}>
        <CertificateScene />
      </Sprite>

      {/* 2:36–2:40  →  Welcome Outro */}
      <Sprite start={156} end={160}>
        <OutroScene />
      </Sprite>
    </>
  );
}

window.MXBoardDemoScene = MXBoardDemoScene;
