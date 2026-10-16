import React from 'react';

export default function CalendarAndDirections({ data, onShowToast }) {
  const downloadICS = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Navitha & Shahin//Wedding Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:wedding-${data.bride.toLowerCase()}-${data.groom.toLowerCase()}-20261116@guruvayur`,
      "DTSTAMP:20261016T000000Z",
      "DTSTART:20261116T040000Z", // 9:30 AM IST is 04:00 UTC
      "DTEND:20261116T083000Z",
      `SUMMARY:Wedding Ceremony of ${data.bride} & ${data.groom}`,
      `DESCRIPTION:Thalikettu Muhurtham (${data.muhurtham}) at ${data.thalikettuVenueTitle}\\, followed by wedding assembly and feast at ${data.auditoriumVenueTitle}\\, ${data.auditoriumVenueSub}. Contact: ${data.contactPhone}.`,
      `LOCATION:${data.thalikettuVenueTitle}\\, ${data.thalikettuVenueSub} & ${data.auditoriumVenueTitle}\\, ${data.auditoriumVenueSub}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${data.bride}-${data.groom}-Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (onShowToast) onShowToast("Calendar event (.ics) downloaded!");
  };

  const gCalUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(`Wedding of ${data.bride} & ${data.groom}`) +
    "&dates=20261116T040000Z/20261116T083000Z" +
    "&details=" + encodeURIComponent(`Thalikettu Muhurtham (${data.muhurtham}) at ${data.thalikettuVenueTitle}, followed by wedding reception and lunch at ${data.auditoriumVenueTitle}, ${data.auditoriumVenueSub}. Contact: ${data.contactPhone}`) +
    "&location=" + encodeURIComponent(`${data.thalikettuVenueTitle}, ${data.thalikettuVenueSub} & ${data.auditoriumVenueTitle}, ${data.auditoriumVenueSub}`);

  return (
    <section id="venue" style={{ margin: '44px 0', textAlign: 'center' }}>
      {/* Calendar Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
        <button className="btn-sepia" type="button" onClick={downloadICS}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <path d="M12 14v4M10 16l2 2 2-2"></path>
          </svg>
          Add to Calendar (.ics)
        </button>

        <a className="btn-sepia btn-sepia-outline" target="_blank" rel="noopener noreferrer" href={gCalUrl}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Google Calendar
        </a>
      </div>

      {/* Map Location Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '22px',
        margin: '32px 0',
        textAlign: 'left'
      }}>
        {/* Guruvayur Temple Card */}
        <div style={{
          background: 'var(--bg-card-inner)',
          border: '1px solid var(--sepia-faint-border)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease'
        }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--sepia-soft)', marginBottom: '8px' }}>
              Ceremony • {data.muhurtham}
            </span>
            <h4 style={{ fontFamily: 'var(--font-title-serif)', fontSize: '1.35rem', color: 'var(--sepia-dark)', fontWeight: 700, marginBottom: '6px' }}>
              {data.thalikettuVenueTitle}
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--sepia-main)', marginBottom: '18px', lineHeight: 1.5 }}>
              The sacred Thalikettu solemnization at the Holy Abode of Lord Guruvayurappan, Guruvayur.
            </p>
          </div>
          <a
            href={data.templeMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sepia btn-sepia-outline"
            style={{ width: '100%' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Open Guruvayur Krishna Temple in Maps
          </a>
        </div>

        {/* King Auditorium Card */}
        <div style={{
          background: 'var(--bg-card-inner)',
          border: '1px solid var(--sepia-faint-border)',
          borderRadius: 'var(--radius-md)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease'
        }}>
          <div>
            <span style={{ display: 'inline-block', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--sepia-soft)', marginBottom: '8px' }}>
              Assembly &amp; Sadya • Following Ceremony
            </span>
            <h4 style={{ fontFamily: 'var(--font-title-serif)', fontSize: '1.35rem', color: 'var(--sepia-dark)', fontWeight: 700, marginBottom: '6px' }}>
              {data.auditoriumVenueTitle}
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--sepia-main)', marginBottom: '18px', lineHeight: 1.5 }}>
              Marriage assembly, congratulations, and traditional Kerala wedding feast at {data.auditoriumVenueSub}.
            </p>
          </div>
          <a
            href={data.auditoriumMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sepia btn-sepia-outline"
            style={{ width: '100%' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Open King Auditorium in Maps
          </a>
        </div>
      </div>
    </section>
  );
}
