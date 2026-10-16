import React from 'react';

export default function Footer({ data }) {
  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '50px',
      paddingTop: '30px',
      borderTop: '1px solid var(--sepia-faint-border)'
    }}>
      <p style={{ fontFamily: 'var(--font-title-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--sepia-dark)', marginBottom: '4px' }}>
        With Love,
      </p>
      <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--sepia-main)', marginBottom: '4px' }}>
        {data.brideParents}
      </p>
      <p style={{ fontSize: '1.05rem', color: 'var(--sepia-soft)', marginBottom: '10px' }}>
        {data.brideResidence}
      </p>

      <p style={{ marginTop: '14px' }}>
        <a
          href={`tel:${data.contactPhone}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--sepia-dark)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.1rem',
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px dashed var(--sepia-soft)',
            transition: 'all 0.25s ease',
            background: 'var(--bg-card-inner)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Mob: {data.contactPhoneDisplay}
        </a>
      </p>

      <p style={{
        fontFamily: 'var(--font-script)',
        fontSize: '2.8rem',
        color: 'var(--sepia-dark)',
        marginTop: '24px',
        letterSpacing: '0.03em'
      }}>
        Hare Krishna
      </p>
    </footer>
  );
}
