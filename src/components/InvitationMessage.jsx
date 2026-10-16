import React from 'react';

export default function InvitationMessage() {
  return (
    <section style={{ textAlign: 'center', margin: '44px auto', maxWidth: '680px', padding: '0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '26px auto', maxWidth: '480px' }}>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--sepia-soft), transparent)' }} />
        <svg style={{ width: '24px', height: '24px', fill: 'var(--sepia-main)', opacity: 0.85 }} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path>
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--sepia-soft), transparent)' }} />
      </div>

      <blockquote style={{
        position: 'relative',
        padding: '24px 30px',
        background: 'var(--bg-card-inner)',
        borderLeft: '2px solid var(--sepia-soft)',
        borderRight: '2px solid var(--sepia-soft)',
        borderRadius: 'var(--radius-sm)'
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          lineHeight: 1.7,
          color: 'var(--sepia-dark)',
          fontStyle: 'italic'
        }}>
          “You are cordially invited with your family to witness and bless the bridal couple and attend the subsequent marriage assembly.”
        </p>
        <p style={{
          marginTop: '12px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          fontSize: '1.1rem',
          color: 'var(--sepia-main)'
        }}>
          We seek your valued presence.
        </p>
      </blockquote>
    </section>
  );
}
