import React, { useState, useEffect } from 'react';

export default function StickyMiniNav() {
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'couple', 'details', 'countdown', 'venue', 'rsvp'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'header', label: 'Home' },
    { id: 'couple', label: 'Couple' },
    { id: 'details', label: 'Details' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'venue', label: 'Venue' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <nav className="sticky-mini-nav" aria-label="Page navigation">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-dot ${activeSection === item.id ? 'active' : ''}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
