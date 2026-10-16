import React from 'react';

export default function AnnouncementSection({ data }) {
  return (
    <section className="announcement-section" style={{ textAlign: 'center', marginBottom: '40px' }}>

      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--sepia-dark)', maxWidth: '580px', margin: '0 auto 18px', fontStyle: 'italic', lineHeight: 1.5 }}>
        Dear Friends and Family,<br />
        We are pleased to announce the marriage of our daughter
      </p>

      <div style={{
        fontFamily: 'var(--font-script)',
        fontSize: 'clamp(3.8rem, 8vw, 5.8rem)',
        lineHeight: 1.1,
        color: 'var(--sepia-dark)',
        fontWeight: 'normal',
        letterSpacing: '0.02em',
        margin: '2px 0'
      }}>
        {data.bride}
      </div>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.2rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--sepia-soft)',
        margin: '10px 0',
        fontWeight: 500
      }}>
        is getting married to
      </p>

      <div style={{
        fontFamily: 'var(--font-script)',
        fontSize: 'clamp(3.8rem, 8vw, 5.8rem)',
        lineHeight: 1.1,
        color: 'var(--sepia-dark)',
        fontWeight: 'normal',
        letterSpacing: '0.02em',
        margin: '2px 0'
      }}>
        {data.groom}
      </div>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.1rem',
        color: 'var(--sepia-main)',
        maxWidth: '520px',
        margin: '14px auto 0',
        lineHeight: 1.55
      }}>
        S/o {data.groomParents}<br />
        {data.groomResidence}
      </p>
    </section>
  );
}
