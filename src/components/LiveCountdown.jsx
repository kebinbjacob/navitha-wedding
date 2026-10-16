import React, { useState, useEffect } from 'react';

export default function LiveCountdown({ targetISO }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const target = new Date(targetISO).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  return (
    <section id="countdown" style={{ textAlign: 'center', margin: '48px auto', maxWidth: '680px' }}>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--sepia-soft)',
        marginBottom: '18px',
        fontWeight: 600
      }}>
        Counting Down to the Auspicious Hour
      </p>

      {timeLeft.isPassed ? (
        <div style={{
          fontFamily: 'var(--font-script)',
          fontSize: '3.5rem',
          color: 'var(--sepia-dark)',
          animation: 'pulse-gentle 2s infinite ease-in-out'
        }}>
          Today we celebrate! 🎉
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                minWidth: '92px',
                padding: '16px 12px',
                background: 'var(--bg-card-inner)',
                border: '1px solid var(--sepia-faint-border)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 4px 15px rgba(74, 44, 26, 0.06)',
                transition: 'transform 0.25s ease'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-title-serif)',
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--sepia-dark)',
                lineHeight: 1,
                display: 'block',
                marginBottom: '4px'
              }}>
                {String(item.value).padStart(2, '0')}
              </span>
              <span style={{
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--sepia-soft)',
                fontWeight: 600
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
