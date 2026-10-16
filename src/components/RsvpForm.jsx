import React, { useState } from 'react';

export default function RsvpForm({ data, onShowToast }) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Yes, joyfully attending');
  const [guests, setGuests] = useState('2');
  const [blessing, setBlessing] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const googleForms = data.googleForms || {};
  const isGFormActive = googleForms.enabled && googleForms.formId;

  const handleSubmit = (e) => {
    if (!name.trim()) {
      e.preventDefault();
      return;
    }

    if (isGFormActive) {
      // The browser natively POSTs to Google Forms via the hidden iframe!
      setTimeout(() => {
        setIsSubmitted(true);
        if (onShowToast) onShowToast("RSVP sent to Google Forms! 🙏");
      }, 500);
    } else {
      e.preventDefault();
      dispatchWhatsApp();
    }
  };

  const dispatchWhatsApp = () => {
    let message = `*Wedding RSVP - ${data.bride} & ${data.groom}*\n`;
    message += `--------------------------------\n`;
    message += `👤 *Name:* ${name.trim()}\n`;
    message += `💌 *Status:* ${attendance}\n`;
    message += `👥 *Number of Guests:* ${guests}\n`;
    if (blessing.trim()) {
      message += `✨ *Blessing & Message:* "${blessing.trim()}"\n`;
    }
    message += `--------------------------------\n`;
    message += `Sent from the Wedding Invitation Website`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${data.whatsappNumber}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    if (onShowToast) onShowToast("Opening WhatsApp to send your RSVP...");
  };

  const formActionUrl = isGFormActive
    ? `https://docs.google.com/forms/d/e/${googleForms.formId}/formResponse`
    : '#';

  return (
    <section id="rsvp" style={{
      margin: '50px auto 36px',
      maxWidth: '640px',
      background: 'var(--bg-card-inner)',
      border: '1px solid var(--sepia-faint-border)',
      borderRadius: 'var(--radius-md)',
      padding: '36px 30px',
      boxShadow: 'var(--shadow-soft)'
    }}>
      {/* Hidden iframe target for seamless native Google Form submission */}
      <iframe
        name="hidden_gform"
        id="hidden_gform"
        style={{ display: 'none' }}
        title="Google Form Target"
      />

      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', color: 'var(--sepia-dark)', lineHeight: 1.1, marginBottom: '4px' }}>
          R. S. V. P.
        </h3>
        <p style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sepia-soft)', fontWeight: 600 }}>
          Please confirm your esteemed presence
        </p>
      </div>

      {isSubmitted ? (
        <div style={{
          textAlign: 'center',
          padding: '30px 20px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--sepia-soft)'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--sepia-main)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 style={{ fontFamily: 'var(--font-title-serif)', fontSize: '1.4rem', color: 'var(--sepia-dark)', marginBottom: '8px' }}>
            Thank You, {name}!
          </h4>
          <p style={{ fontSize: '1.05rem', color: 'var(--sepia-main)', marginBottom: '20px' }}>
            Your RSVP has been submitted. We eagerly look forward to celebrating this joyous day with you!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <button
              type="button"
              className="btn-sepia btn-sepia-outline"
              onClick={dispatchWhatsApp}
              style={{ fontSize: '0.95rem' }}
            >
              Also Send via WhatsApp
            </button>
            <button
              type="button"
              className="btn-sepia"
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setBlessing('');
              }}
              style={{ fontSize: '0.95rem' }}
            >
              Submit Another Response
            </button>
          </div>
        </div>
      ) : (
        <form
          action={formActionUrl}
          method="POST"
          target="hidden_gform"
          onSubmit={handleSubmit}
        >
          {/* Guest Name Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-dark)', marginBottom: '8px' }}>
              Your Full Name
            </label>
            <input
              type="text"
              name={googleForms.entryIds?.name || 'guest_name'}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Dr. Rajesh Kumar & Family"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--sepia-soft)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-cream)',
                color: 'var(--sepia-dark)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem'
              }}
            />
          </div>

          {/* Attendance Selection */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-dark)', marginBottom: '8px' }}>
              Will you be attending?
            </label>
            {/* Hidden input to pass value to Google Form */}
            <input
              type="hidden"
              name={googleForms.entryIds?.attendance || 'attendance'}
              value={attendance}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setAttendance('Yes, joyfully attending')}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid var(--sepia-soft)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  background: attendance.includes('joyfully') ? 'var(--sepia-main)' : 'var(--bg-cream)',
                  color: attendance.includes('joyfully') ? '#FAF5EE' : 'var(--sepia-main)',
                  transition: 'all 0.2s ease'
                }}
              >
                Joyfully Attend
              </button>
              <button
                type="button"
                onClick={() => setAttendance('Regretfully declining with best wishes')}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid var(--sepia-soft)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  background: attendance.includes('declining') ? 'var(--sepia-main)' : 'var(--bg-cream)',
                  color: attendance.includes('declining') ? '#FAF5EE' : 'var(--sepia-main)',
                  transition: 'all 0.2s ease'
                }}
              >
                Send Blessings
              </button>
            </div>
          </div>

          {/* Number of Guests */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-dark)', marginBottom: '8px' }}>
              Number of Guests
            </label>
            <select
              name={googleForms.entryIds?.guests || 'guests'}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--sepia-soft)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-cream)',
                color: 'var(--sepia-dark)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem'
              }}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Family Members</option>
            </select>
          </div>

          {/* Blessing Message */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sepia-dark)', marginBottom: '8px' }}>
              Blessing &amp; Message for {data.bride} &amp; {data.groom}
            </label>
            <textarea
              name={googleForms.entryIds?.blessing || 'blessing'}
              rows="3"
              value={blessing}
              onChange={(e) => setBlessing(e.target.value)}
              placeholder="Wishing you a lifetime of endless joy, love and harmony..."
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid var(--sepia-soft)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-cream)',
                color: 'var(--sepia-dark)',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem'
              }}
            />
          </div>

          {/* Buttons: Submit RSVP and optional WhatsApp link */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              type="submit"
              className="btn-sepia"
              style={{ width: '100%' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Confirm RSVP
            </button>

            <button
              type="button"
              className="btn-sepia btn-sepia-outline"
              onClick={dispatchWhatsApp}
              style={{ width: '100%', fontSize: '0.98rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Or RSVP directly via WhatsApp
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
