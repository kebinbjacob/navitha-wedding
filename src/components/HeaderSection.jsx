import React from 'react';

export default function HeaderSection() {
  return (
    <header id="header" style={{ textAlign: 'center', marginBottom: '36px' }}>
      <div style={{ display: 'inline-block', margin: '0 auto 16px', position: 'relative' }}>
        {/* Ornate Cameo Medallion with Laurel Leaf Framing */}
        <div
          style={{
            width: '150px',
            height: '190px',
            margin: '0 auto',
            border: '2px solid var(--sepia-main)',
            borderRadius: '50% / 45%',
            padding: '4px',
            background: 'var(--bg-card-inner)',
            boxShadow: '0 8px 24px rgba(79, 38, 49, 0.18)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Dashed outer decorative halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50% / 45%',
              border: '1px dashed var(--sepia-soft)',
              opacity: 0.65,
              pointerEvents: 'none'
            }}
          />

          {/* Inner Cameo Frame containing Lord Krishna's Sepia Line-Art Illustration */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50% / 45%',
              overflow: 'hidden',
              position: 'relative',
              background: 'var(--bg-cream)',
              border: '1px solid var(--sepia-faint-border)'
            }}
          >
            <img
              src="/krishna-illustration.jpg"
              alt="Lord Krishna playing flute with peacock feather in sepia line-art illustration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 22%',
                display: 'block',
                filter: 'sepia(0.2) contrast(1.06)'
              }}
            />
          </div>
        </div>
      </div>

      <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.8rem, 5.5vw, 3.6rem)', color: 'var(--sepia-dark)', lineHeight: 1.2, margin: '8px 0 10px' }}>
        Hare Krishna
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '22px auto', maxWidth: '480px', width: '100%' }}>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--sepia-soft), transparent)' }} />
        <svg style={{ width: '24px', height: '24px', fill: 'var(--sepia-main)', opacity: 0.85 }} viewBox="0 0 24 24">
          <path d="M12 3c1.5 3.5 4.5 6 8 7-3.5 1-6 4-7 8-1-4-3.5-7-7-8 3.5-1 6.5-3.5 8-7z"></path>
        </svg>
        <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--sepia-soft), transparent)' }} />
      </div>
    </header>
  );
}
