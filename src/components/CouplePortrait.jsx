import React, { useState, useRef, useEffect } from 'react';

export default function CouplePortrait({ data }) {
  const [showOriginalModal, setShowOriginalModal] = useState(false);
  const portraitFrameRef = useRef(null);

  useEffect(() => {
    const frame = portraitFrameRef.current;
    if (!frame || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

    const handleMouseMove = (e) => {
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      frame.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
      frame.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)';
    };

    const container = frame.parentElement;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="couple" style={{ textAlign: 'center', margin: '44px 0', perspective: '1000px' }}>
      <div
        ref={portraitFrameRef}
        style={{
          display: 'inline-block',
          position: 'relative',
          padding: '24px 20px 18px',
          background: 'linear-gradient(180deg, var(--bg-card-inner) 0%, rgba(250, 246, 238, 0.4) 100%)',
          border: '1px solid var(--sepia-faint-border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lift)',
          transition: 'transform 0.4s var(--ease-silk)',
          maxWidth: '560px',
          width: '100%'
        }}
      >
        {/* Subtle decorative inner arch glow */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'calc(var(--radius-lg) - 8px)',
            overflow: 'hidden',
            padding: '16px 10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(ellipse at center 60%, rgba(194, 154, 91, 0.12) 0%, transparent 70%)'
          }}
        >
          {/* THE TRANSPARENT COUPLE IMAGE (No Background!) */}
          <img
            src="/couple-transparent.png"
            alt={`Line-art illustration of ${data.bride} and ${data.groom} standing arm in arm`}
            style={{
              width: '100%',
              maxWidth: '440px',
              height: 'auto',
              maxHeight: '520px',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 12px 24px rgba(74, 44, 26, 0.15))',
              transition: 'transform 0.7s var(--ease-silk)'
            }}
          />
        </div>

        <p style={{
          marginTop: '16px',
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--sepia-soft)',
          fontWeight: 600
        }}>
          {data.bride} &amp; {data.groom}
        </p>

        <button
          type="button"
          onClick={() => setShowOriginalModal(true)}
          style={{
            marginTop: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--sepia-main)',
            fontFamily: 'var(--font-serif)',
            fontSize: '0.95rem',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: '4px 8px'
          }}
        >
          View original invitation card reference &rarr;
        </button>
      </div>

      {/* Modal for viewing original reference card */}
      {showOriginalModal && (
        <div
          onClick={() => setShowOriginalModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(20, 14, 10, 0.88)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              maxHeight: '90vh',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
              background: 'var(--bg-card)'
            }}
          >
            <button
              onClick={() => setShowOriginalModal(false)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--sepia-dark)',
                color: '#fff',
                border: 'none',
                fontSize: '1.4rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close dialog"
            >
              &times;
            </button>
            <img
              src="/couple-reference.jpg"
              alt="Original Sepia Line-Art Wedding Card"
              style={{ width: '100%', height: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
