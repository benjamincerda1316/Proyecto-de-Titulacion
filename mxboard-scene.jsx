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

// SCENE 3 — LOGIN `0:10–0:20`
function LoginScene() {
  const { localTime } = useSprite();
  
  const zoomT = Math.min(localTime / 3.0, 1);
  const scale = interpolate([0, 1], [1, 3.2], Easing.easeOutQuart)(zoomT);
  
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
        
        {/* Login Target */}
        <div style={{
          position: 'absolute', inset: `${FRAME.topbar}px 0 0 0`, display: 'flex',
          alignItems: 'center', justifyContent: 'center', background: '#FFFFFF'
        }}>
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

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

// ROADMAP BLOCK — White box, red border when complete, red bolder when active
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
    </div>
  );
}

// SCENE: ACCOUNTS MATCHING GAME MOCK `0:34–0:42` (Drag PPE into Asset bucket - Cursor/arrow removed)
function AccountsGameScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;

  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  // Animation math of cursor dragging PPE brick
  const startX = 280;
  const startY = 320;
  const endX = 760;
  const endY = 280;
  
  let brickX = startX;
  let brickY = startY;
  let isDragging = false;
  
  if (localTime >= 1.5 && localTime < 4.5) {
    isDragging = true;
    const t = clamp((localTime - 1.5) / 3.0, 0, 1);
    const easeT = Easing.easeInOutQuad(t);
    brickX = interpolate([0, 1], [startX, endX], easeT);
    brickY = interpolate([0, 1], [startY, endY], easeT);
  } else if (localTime >= 4.5) {
    brickX = endX;
    brickY = endY;
  }

  const showCorrectToast = localTime >= 4.5;

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="dashboard">
        <div style={{ padding: 34, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: FONT_D, fontSize: 18, fontWeight: 700, color: C.neutralDark }}>
              <Icon name="device-gamepad-2" size={20} color={C.primary} /> Week 1 — Account Classification Challenge
            </div>
            <div style={{ fontSize: 12.5, color: C.neutralMuted, marginTop: 2 }}>Drag and drop the account brick into the correct balance sheet bucket.</div>
          </div>

          <div style={{ flex: 1, display: 'flex', gap: 40, marginTop: 20, position: 'relative' }}>
            {/* Left side: Bricks */}
            <div style={{ width: 340, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Available Accounts</div>
              
              {/* PPE Brick (Dragged) */}
              <div style={{
                position: 'absolute', left: brickX, top: brickY, width: 280, padding: '14px 18px',
                borderRadius: 8, border: '1.5px solid #D4215B', background: '#FFFFFF',
                color: C.primary, fontWeight: 700, fontSize: 14, cursor: 'pointer', zIndex: 10,
                boxShadow: isDragging ? '0 8px 24px rgba(212,33,91,0.1)' : 'none',
                opacity: localTime >= 4.5 ? 0 : 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span>Property, Plant &amp; Equip. (PPE)</span>
                <Icon name="grip-vertical" size={14} color="#D4215B" />
              </div>

              {/* Blank placeholder left in place of PPE */}
              <div style={{ width: 280, height: 48, border: '1.5px dashed #F2F2F2', borderRadius: 8 }} />

              <div style={{
                width: 280, padding: '14px 18px', borderRadius: 8, border: '1.5px solid #F2F2F2',
                background: '#FFFFFF', color: '#888888', fontWeight: 600, fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span>Equity Cash</span>
                <Icon name="grip-vertical" size={14} color="#888888" />
              </div>
              <div style={{
                width: 280, padding: '14px 18px', borderRadius: 8, border: '1.5px solid #F2F2F2',
                background: '#FFFFFF', color: '#888888', fontWeight: 600, fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <span>Customer Loans</span>
                <Icon name="grip-vertical" size={14} color="#888888" />
              </div>
            </div>

            {/* Right side: Drop Buckets */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.neutralMuted, textTransform: 'uppercase', letterSpacing: 0.5 }}>Drop Targets</div>
              
              {/* Asset Slot */}
              <div style={{
                width: 450, minHeight: 100, border: showCorrectToast ? '2px solid #D4215B' : '2px dashed #E6E5EC',
                borderRadius: 12, padding: 18, background: showCorrectToast ? '#FFF0F3' : '#FFFFFF',
                display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.neutralDark }}>Asset Accounts</span>
                  {showCorrectToast && <Icon name="circle-check" size={16} color="#D4215B" />}
                </div>
                {showCorrectToast ? (
                  <div style={{
                    padding: '10px 14px', borderRadius: 6, border: '1.5px solid #D4215B',
                    background: '#FFFFFF', color: '#D4215B', fontWeight: 700, fontSize: 13
                  }}>
                    Property, Plant &amp; Equip. (PPE)
                  </div>
                ) : (
                  <div style={{ fontSize: 12, color: C.neutralMuted, fontStyle: 'italic' }}>Drop Asset accounts here...</div>
                )}
              </div>

              {/* Equity Slot */}
              <div style={{
                width: 450, minHeight: 100, border: '2px dashed #E6E5EC',
                borderRadius: 12, padding: 18, background: '#FFFFFF',
                display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box'
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.neutralDark }}>Equity Accounts</span>
                <div style={{ fontSize: 12, color: C.neutralMuted, fontStyle: 'italic' }}>Drop Equity accounts here...</div>
              </div>
            </div>

            {/* Correct Toast Pop-up */}
            {showCorrectToast && (
              <div style={{
                position: 'absolute', right: 40, top: 40, background: '#D4215B', color: 'white',
                padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 700,
                boxShadow: '0 8px 24px rgba(212,33,91,0.2)', animation: 'bounce 0.5s'
              }}>
                ✓ Correct! +10 Points
              </div>
            )}
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE: FX LIFECYCLE SIMULATOR `0:46–0:54` (Complete SVG layout from index.html)
function LifecycleScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.8, 0, 1);
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

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', marginTop: 10 }}>
            {/* The full beautiful SVF Diagram from index.html */}
            <svg viewBox="0 0 960 430" style={{ width: '88%', height: 'auto', overflow: 'visible', display: 'block' }}>
              
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
          
          {/* Simple matching descriptive caption */}
          <div style={{
            fontSize: '13px', color: '#888888', padding: '10px',
            backgroundColor: '#F9F9FB', borderRadius: '8px', textAlign: 'center',
            borderLeft: '3px solid #D4215B', fontWeight: 500, flexShrink: 0
          }}>
            {localTime < 1.2 && "Press Next Event to start the contract lifecycle."}
            {localTime >= 1.2 && localTime < 2.8 && "OBS commitment notional receivable and payable amounts are booked in Off-Balance Sheet (OBS) accounts."}
            {localTime >= 2.8 && localTime < 4.8 && "The MtM value measurement tracks market fluctuations of the FX contract value."}
            {localTime >= 4.8 && localTime < 5.6 && "At Value Date, OBS commitments are fully reversed."}
            {localTime >= 5.6 && "The realized income and expense are settled and recorded on the Balance Sheet."}
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
  
  const entryT = clamp(localTime / 0.8, 0, 1);
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
                const t = clamp((localTime - cardStart) / 0.5, 0, 1);
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
              const t = clamp((localTime - cardStart) / 0.5, 0, 1);
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

// SCENE 6 — CALENDAR HUB `1:10–1:18`
function CalendarScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;
  
  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  const events = {
    2: { label: 'Weekly Tutoring', sub: 'Benjamín · 10:00', color: '#0284C7', icon: 'user' }, // Blue
    4: { label: 'Manager Review', sub: 'Luana Ortega · 15:00', color: '#EA580C', icon: 'shield-check' }, // Orange
  };

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="calendar">
        <div style={{ padding: 24, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', gap: 20, overflow: 'hidden' }}>
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
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, flex: 1 }}>
              {days.map((d, i) => (
                <div key={d} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ textAlign: 'center', fontSize: 11.5, fontWeight: 700, color: C.neutralMuted, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{d}</div>
                  <div style={{
                    background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 10, flex: 1,
                    padding: 10, display: 'flex', flexDirection: 'column', gap: 8, boxSizing: 'border-box',
                    boxShadow: 'none',
                  }}>
                    <div style={{ fontSize: 12.5, color: C.neutralDark, fontWeight: 700 }}>{i + 14}</div>
                    {events[i + 1] && (
                      <div style={{
                        background: `${events[i + 1].color}08`, border: `1.5px solid ${events[i + 1].color}30`, color: events[i + 1].color,
                        fontSize: 11.5, fontWeight: 600, padding: '8px 10px', borderRadius: 6,
                        borderLeft: `3px solid ${events[i + 1].color}`,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                          <Icon name={events[i + 1].icon} size={11} color={events[i + 1].color} />
                          <strong>{events[i + 1].label}</strong>
                        </div>
                        <div style={{ fontWeight: 500, color: C.neutralMuted, fontSize: 10.5 }}>{events[i + 1].sub}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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

// SCENE 8 — ADMINISTRATION DASHBOARD `1:22–1:30`
function AdminMetricCard({ label, value, sub, color, icon }) {
  const strokeColor = color || C.primary;
  const isUp = color === C.success;
  return (
    <div style={{ background: 'white', border: `1.5px solid ${C.neutralBorder}`, borderRadius: 12, padding: 18, boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: C.neutralMuted }}>
          <Icon name={icon} size={15} color={C.neutralMuted} /> {label}
        </div>
        <div>
          <div style={{ fontFamily: FONT_D, fontSize: 28, fontWeight: 800, color: C.neutralDark, margin: '8px 0 2px', letterSpacing: -0.5 }}>{value}</div>
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
          />
        </svg>
      </div>
    </div>
  );
}

function AdminScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.8, 0, 1);
  const scale = interpolate([0, 1], [0.95, 1.0], Easing.easeOutBack)(entryT);
  const opacity = entryT;
  
  let currentOpacity = opacity;
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    currentOpacity = 1 - t;
  }

  const rows = [
    { name: 'Francisca Le Dantec', role: 'Week 12', progress: 91, score: 95, risk: false, status: 'On track' },
    { name: 'Javier Pérez', role: 'Week 12', progress: 91, score: 91, risk: false, status: 'On track' },
    { name: 'Matías Gutiérrez', role: 'Week 5', progress: 40, score: 71, risk: true, status: 'At risk' },
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
            <AdminMetricCard label="Active Consultants" value="6" sub="+2 this month" color={C.success} icon="users" />
            <AdminMetricCard label="Average Week" value="9.6" sub="out of 12 weeks" icon="calendar-stats" />
            <AdminMetricCard label="Passing Rate" value="91%" sub="↑ vs target of 70%" color={C.success} icon="discount-check" />
            <AdminMetricCard label="Pending Reviews" value="1" sub="Require evaluation" color={C.warning} icon="clipboard-list" />
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

// SCENE 10 — LIVE EVALUATIONS `1:34–1:42`
function QuizScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.8, 0, 1);
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

  return (
    <div style={{ position: 'absolute', inset: 0, opacity: currentOpacity, transform: `scale(${scale})`, transformOrigin: 'center center' }}>
      <BrowserFrame activeTab="evaluation">
        <div style={{ padding: 30, fontFamily: FONT, width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
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
        </div>
      </BrowserFrame>
    </div>
  );
}

// SCENE 12 — AUTONOMY BAR `1:46–1:52`
function AutonomyScene() {
  const { localTime, duration } = useSprite();
  
  const fillT = clamp((localTime - 1.0) / 2.5, 0, 1);
  const pct = Math.floor(Easing.easeOutQuad(fillT) * 85);
  
  let opacity = clamp(localTime / 0.6, 0, 1);
  
  const exitStart = duration - 0.5;
  if (localTime > exitStart) {
    const t = (localTime - exitStart) / 0.5;
    opacity = 1 - t;
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', gap: 24,
      opacity, willChange: 'opacity'
    }}>
      <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 700, color: C.neutralDark, letterSpacing: -0.5 }}>
        Autonomy Perception
      </div>
      
      <div style={{
        width: 500, height: 26, background: '#F2F2F2', borderRadius: 99,
        overflow: 'hidden', border: '1.5px solid #F2F2F2', position: 'relative'
      }}>
        <div style={{
          height: '100%', width: `${pct}%`, background: '#D4215B',
          borderRadius: 99, transition: 'width 0.05s linear'
        }} />
      </div>
      
      <div style={{ fontFamily: FONT_D, fontSize: 52, fontWeight: 800, color: '#D4215B', letterSpacing: -1 }}>
        {pct}%
      </div>
    </div>
  );
}

// SCENE 13 — CERTIFICATION CLOSE `1:52–2:00`
function CertificateScene() {
  const { localTime, duration } = useSprite();
  
  const entryT = clamp(localTime / 0.7, 0, 1);
  const cardScale = Easing.easeOutBack(entryT);
  const cardOpacity = entryT;
  
  const drawT = clamp((localTime - 0.7) / 0.8, 0, 1);
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
              Francisca Le Dantec
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

// SCENE 14 — WELCOME OUTRO `2:00–2:04`
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

      {/* 1:06–1:10  →  Transition (Documentation -> Calendar) */}
      <Sprite start={66} end={70}>
        <TextTransition
          line1="Calendar Hub."
          line2="All your meetings, in one place."
          highlightWord="meetings"
        />
      </Sprite>

      {/* 1:10–1:18  →  Calendar Hub */}
      <Sprite start={70} end={78}>
        <CalendarScene />
      </Sprite>

      {/* 1:18–1:22  →  Transition (Calendar -> Admin) */}
      <Sprite start={78} end={82}>
        <TextTransition
          line1="Administration Panel."
          line2="Real-time tracking of every newcomer."
          highlightWord="tracking"
        />
      </Sprite>

      {/* 1:22–1:30  →  Admin Dashboard */}
      <Sprite start={82} end={90}>
        <AdminScene />
      </Sprite>

      {/* 1:30–1:34  →  Transition (Admin -> Quiz) */}
      <Sprite start={90} end={94}>
        <TextTransition
          line1="Live Evaluations."
          line2="Technical knowledge, put to the test."
          highlightWord="test"
        />
      </Sprite>

      {/* 1:34–1:42  →  Live Quiz */}
      <Sprite start={94} end={102}>
        <QuizScene />
      </Sprite>

      {/* 1:42–1:46  →  Transition (Quiz -> Autonomy) */}
      <Sprite start={102} end={106}>
        <TextTransition
          line1="Autonomy Perception."
          line2="Rising from day one."
          highlightWord="Rising"
        />
      </Sprite>

      {/* 1:46–1:52  →  Autonomy Bar */}
      <Sprite start={106} end={112}>
        <AutonomyScene />
      </Sprite>

      {/* 1:52–2:00  →  Certificate Close */}
      <Sprite start={112} end={120}>
        <CertificateScene />
      </Sprite>

      {/* 2:00–2:04  →  Welcome Outro */}
      <Sprite start={120} end={124}>
        <OutroScene />
      </Sprite>
    </>
  );
}

window.MXBoardDemoScene = MXBoardDemoScene;
