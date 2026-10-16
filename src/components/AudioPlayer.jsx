import React, { useRef, useState, useEffect } from 'react';

export default function AudioPlayer({ isPlaying, setIsPlaying, onPlaySongRef }) {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.75);
  const [showVolumePopup, setShowVolumePopup] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio autoplay blocked by browser policy:", e);
      });
    }
  };

  useEffect(() => {
    if (onPlaySongRef) {
      onPlaySongRef.current = () => {
        const audio = audioRef.current;
        if (audio) {
          audio.currentTime = 0;
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch((e) => {
            console.warn("Autoplay note:", e);
          });
        }
      };
    }
  }, []);

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/wedding-melody.wav"
        loop
        preload="auto"
      />

      {/* Music Pill Control */}
      <button
        onClick={togglePlay}
        className="control-btn"
        title={isPlaying ? "Pause Wedding Music (Raga Mohanam Flute)" : "Play Auspicious Wedding Music"}
        aria-label="Toggle Wedding Music"
        style={{
          width: isPlaying ? 'auto' : '44px',
          padding: isPlaying ? '0 14px' : '0',
          borderRadius: isPlaying ? '30px' : '50%',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: isPlaying ? 'var(--sepia-main)' : 'var(--bg-card)',
          color: isPlaying ? '#FAF5EE' : 'var(--sepia-main)',
          border: '1px solid var(--sepia-faint-border)',
          boxShadow: isPlaying ? '0 4px 18px rgba(122, 74, 46, 0.35)' : 'var(--shadow-soft)'
        }}
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Waveform */}
            <span style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}>
              <span className="eq-bar bar-1" />
              <span className="eq-bar bar-2" />
              <span className="eq-bar bar-3" />
              <span className="eq-bar bar-4" />
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              Temple Flute
            </span>
          </>
        ) : (
          /* Muted / Paused Music Icon */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        )}
      </button>

      {/* Mini Volume Popover Icon */}
      {isPlaying && (
        <button
          onClick={() => setShowVolumePopup(!showVolumePopup)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--sepia-main)',
            cursor: 'pointer',
            padding: '4px',
            marginLeft: '4px',
            display: 'flex',
            alignItems: 'center'
          }}
          title="Adjust Volume"
          aria-label="Adjust Volume"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </button>
      )}

      {showVolumePopup && (
        <div style={{
          position: 'absolute',
          top: '52px',
          right: '0',
          background: 'var(--bg-card)',
          border: '1px solid var(--sepia-faint-border)',
          borderRadius: '12px',
          padding: '10px 14px',
          boxShadow: '0 8px 24px rgba(74, 44, 26, 0.25)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--sepia-dark)', fontWeight: 600 }}>Vol</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            style={{ width: '80px', accentColor: 'var(--sepia-main)', cursor: 'pointer' }}
          />
        </div>
      )}

      <style>{`
        .eq-bar {
          width: 2.5px;
          background: #FAF5EE;
          border-radius: 2px;
          animation: eq-bounce 1s infinite ease-in-out alternate;
        }
        .bar-1 { height: 10px; animation-delay: 0.1s; }
        .bar-2 { height: 16px; animation-delay: 0.3s; }
        .bar-3 { height: 12px; animation-delay: 0.2s; }
        .bar-4 { height: 8px; animation-delay: 0.4s; }

        @keyframes eq-bounce {
          0% { height: 4px; }
          100% { height: 16px; }
        }
      `}</style>
    </div>
  );
}
