import React from 'react';

export default function OpeningCurtain({ isOpen, onOpen, data }) {
  if (isOpen) return null;

  return (
    <div
      id="intro-curtain"
      className="intro-curtain"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--bg-cream)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        transition: 'opacity 1s var(--ease-silk), visibility 1s var(--ease-silk)',
        perspective: '1200px'
      }}
    >
      <div
        className="envelope-box"
        onClick={onOpen}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--bg-card)',
          border: '1px solid var(--sepia-faint-border)',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 25px 60px rgba(79, 38, 49, 0.22)',
          padding: '44px 30px',
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '12px',
            border: '1px dashed var(--sepia-soft)',
            borderRadius: 'calc(var(--radius-md) - 6px)',
            pointerEvents: 'none',
            opacity: 0.7
          }}
        />

        <div
          style={{
            width: '92px',
            height: '92px',
            margin: '0 auto 18px',
            borderRadius: '50%',
            border: '2px solid var(--sepia-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'var(--bg-card-inner)',
            boxShadow: '0 4px 18px rgba(158, 91, 106, 0.2)',
            padding: '3px'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: '-5px',
            borderRadius: '50%',
            border: '1px dashed var(--sepia-soft)',
            opacity: 0.65,
            pointerEvents: 'none'
          }} />
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden'
          }}>
            <img
              src="/krishna-illustration.jpg"
              alt="Lord Krishna"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 22%'
              }}
            />
          </div>
        </div>

        <div style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', color: 'var(--sepia-dark)', marginBottom: '4px' }}>
          Hare Krishna
        </div>

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--sepia-soft)', marginBottom: '16px' }}>
          Wedding Invitation
        </p>

        <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', color: 'var(--sepia-dark)', marginBottom: '12px', fontWeight: 'normal', lineHeight: 1.1 }}>
          {data.bride} &amp; {data.groom}
        </h2>

        <p style={{ fontSize: '1.05rem', color: 'var(--sepia-soft)', marginBottom: '26px', fontStyle: 'italic', lineHeight: 1.5 }}>
          {data.weddingDateDisplay}<br />
          {data.thalikettuVenueSub}
        </p>

        <button
          className="btn-sepia"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          style={{
            animation: 'pulse-gentle 2.4s infinite ease-in-out',
            boxShadow: '0 8px 24px rgba(158, 91, 106, 0.38)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
          </svg>
          Tap to Open
        </button>

        <div style={{ marginTop: '18px', fontSize: '0.85rem', color: 'var(--sepia-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <span>Includes auspicious wedding flute &amp; temple bells 🎵</span>
        </div>
      </div>
    </div>
  );
}
