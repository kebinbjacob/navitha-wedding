import React from 'react';

export default function EventDetails({ data }) {
  return (
    <section id="details" style={{ margin: '48px 0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
          borderTop: '1px solid var(--sepia-faint-border)',
          borderBottom: '1px solid var(--sepia-faint-border)',
          position: 'relative'
        }}
      >
        {/* Card 1: Wedding Day */}
        <div className="detail-card-item">
          <div className="detail-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <text x="12" y="18" fontSize="7.5" fontWeight="bold" fill="currentColor" textAnchor="middle" stroke="none">16</text>
            </svg>
          </div>
          <h3 className="detail-title">Wedding Day</h3>
          <div className="detail-val">{data.weddingDateDisplay.split(',')[0]}</div>
          <div className="detail-sub">
            {data.weddingDateDisplay.split(',')[1]}<br />
            Malayalam date: {data.malayalamDate}
          </div>
        </div>

        {/* Card 2: Muhurtham */}
        <div className="detail-card-item">
          <div className="detail-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="detail-title">Muhurtham</h3>
          <div className="detail-val">{data.muhurtham}</div>
          <div className="detail-sub">
            Auspicious Morning<br />Indian Standard Time
          </div>
        </div>

        {/* Card 3: Thalikettu */}
        <div className="detail-card-item">
          <div className="detail-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 4c0 6 3 11 7 11s7-5 7-11"></path>
              <circle cx="12" cy="18" r="2.5"></circle>
              <line x1="12" y1="15" x2="12" y2="15.5"></line>
            </svg>
          </div>
          <h3 className="detail-title">Thalikettu</h3>
          <div className="detail-val">{data.thalikettuVenueTitle}</div>
          <div className="detail-sub">
            {data.thalikettuVenueSub}<br />Sacred Nuptial Knot
          </div>
        </div>

        {/* Card 4: Wedding Venue */}
        <div className="detail-card-item">
          <div className="detail-icon-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18"></path>
              <path d="M4 11v10"></path>
              <path d="M8 11v10"></path>
              <path d="M12 11v10"></path>
              <path d="M16 11v10"></path>
              <path d="M20 11v10"></path>
              <path d="M12 3l9 6H3l9-6z"></path>
              <path d="M3 9h18v2H3z"></path>
            </svg>
          </div>
          <h3 className="detail-title">Wedding Venue</h3>
          <div className="detail-val">{data.auditoriumVenueTitle}</div>
          <div className="detail-sub">
            {data.auditoriumVenueSub}<br />Marriage Assembly &amp; Feast
          </div>
        </div>
      </div>

      <style>{`
        .detail-card-item {
          padding: 28px 18px;
          text-align: center;
          position: relative;
          transition: background 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .detail-card-item:hover {
          background: var(--sepia-faint);
          transform: translateY(-3px);
        }
        .detail-icon-box {
          width: 52px;
          height: 52px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--sepia-soft);
          background: var(--bg-card-inner);
          color: var(--sepia-main);
        }
        .detail-title {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--sepia-dark);
          margin-bottom: 8px;
        }
        .detail-val {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--sepia-main);
          line-height: 1.4;
          margin-bottom: 4px;
        }
        .detail-sub {
          font-size: 0.95rem;
          color: var(--sepia-soft);
          line-height: 1.35;
        }
      `}</style>
    </section>
  );
}
