import React, { useState, useEffect, useRef } from 'react';
import { DEFAULT_WEDDING_DATA } from './config/weddingData';

import OpeningCurtain from './components/OpeningCurtain';
import HeaderSection from './components/HeaderSection';
import AnnouncementSection from './components/AnnouncementSection';
import CouplePortrait from './components/CouplePortrait';
import EventDetails from './components/EventDetails';
import LiveCountdown from './components/LiveCountdown';
import InvitationMessage from './components/InvitationMessage';
import CalendarAndDirections from './components/CalendarAndDirections';
import RsvpForm from './components/RsvpForm';
import ShareSection from './components/ShareSection';
import Footer from './components/Footer';
import PetalsCanvas from './components/PetalsCanvas';
import AudioPlayer from './components/AudioPlayer';
import StickyMiniNav from './components/StickyMiniNav';

export default function App() {
  const [weddingData] = useState(DEFAULT_WEDDING_DATA);

  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isPetalsActive, setIsPetalsActive] = useState(true);
  const [toastMessage, setToastMessage] = useState('');

  const onPlaySongRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const handleOpenCurtain = () => {
    setIsCurtainOpen(true);
    if (onPlaySongRef.current) {
      onPlaySongRef.current();
    }
  };

  return (
    <>
      {/* Background Paper Texture Overlay */}
      <div className="paper-texture" aria-hidden="true" />

      {/* Floating Jasmine & Marigold Petals Engine */}
      <PetalsCanvas
        isPetalsActive={isPetalsActive}
        setIsPetalsActive={setIsPetalsActive}
      />

      {/* Top Floating Controls */}
      <aside className="top-controls" aria-label="Page Controls">
        <AudioPlayer
          isPlaying={isPlayingMusic}
          setIsPlaying={setIsPlayingMusic}
          onPlaySongRef={onPlaySongRef}
        />
      </aside>

      {/* Sticky Mini Navigation */}
      <StickyMiniNav />

      {/* Interactive Opening Envelope / Curtain */}
      <OpeningCurtain
        isOpen={isCurtainOpen}
        onOpen={handleOpenCurtain}
        data={weddingData}
      />

      {/* Main Wedding Invitation Card */}
      <main className="card-page">
        <article className="invitation-frame">

          {/* Double Inner Framing Lines */}
          <div className="inner-border-line" aria-hidden="true" />
          <div className="inner-border-thin" aria-hidden="true" />

          {/* Vintage Botanical Rose Corner Ornaments */}
          <svg className="corner-ornament corner-tl" viewBox="0 0 120 120" aria-hidden="true">
            {/* Main Arching Rose Stems */}
            <path d="M4,4 Q6,50 26,76 Q42,94 86,102" strokeWidth="1.2" />
            <path d="M4,4 Q50,6 76,26 Q94,42 102,86" strokeWidth="1.2" />
            
            {/* Central Blooming Wild Rose */}
            <path d="M28,16 C22,10 34,10 28,16" strokeWidth="1" />
            <path d="M38,24 C46,20 44,32 38,24" strokeWidth="1" />
            <path d="M34,36 C40,42 28,44 34,36" strokeWidth="1" />
            <path d="M20,34 C12,38 16,24 22,32" strokeWidth="1" />
            <path d="M18,22 C12,16 26,12 20,24" strokeWidth="1" />
            <circle cx="28" cy="27" r="5" strokeWidth="1" />
            <path d="M26,26 C26,24 30,24 30,26 C30,28 26,28 27,26" strokeWidth="0.8" />
            
            {/* Botanical Rose Leaves with Center Veins */}
            <path d="M48,22 Q62,12 76,22 Q62,32 48,22" strokeWidth="0.9" />
            <path d="M48,22 L72,22" strokeWidth="0.7" />
            
            <path d="M22,48 Q12,62 22,76 Q32,62 22,48" strokeWidth="0.9" />
            <path d="M22,48 L22,72" strokeWidth="0.7" />

            {/* Side Rosebuds */}
            <path d="M78,30 C80,20 90,24 86,34 Q82,40 78,30" strokeWidth="0.9" />
            <path d="M30,78 C20,80 24,90 34,86 Q40,82 30,78" strokeWidth="0.9" />

            {/* Romantic Swirling Tendrils */}
            <path d="M68,52 Q82,62 90,56 Q94,52 90,46" strokeWidth="0.8" />
            <path d="M52,68 Q62,82 56,90 Q52,94 46,90" strokeWidth="0.8" />
          </svg>

          <svg className="corner-ornament corner-tr" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M4,4 Q6,50 26,76 Q42,94 86,102" strokeWidth="1.2" />
            <path d="M4,4 Q50,6 76,26 Q94,42 102,86" strokeWidth="1.2" />
            <path d="M28,16 C22,10 34,10 28,16" strokeWidth="1" />
            <path d="M38,24 C46,20 44,32 38,24" strokeWidth="1" />
            <path d="M34,36 C40,42 28,44 34,36" strokeWidth="1" />
            <path d="M20,34 C12,38 16,24 22,32" strokeWidth="1" />
            <path d="M18,22 C12,16 26,12 20,24" strokeWidth="1" />
            <circle cx="28" cy="27" r="5" strokeWidth="1" />
            <path d="M26,26 C26,24 30,24 30,26 C30,28 26,28 27,26" strokeWidth="0.8" />
            <path d="M48,22 Q62,12 76,22 Q62,32 48,22" strokeWidth="0.9" />
            <path d="M48,22 L72,22" strokeWidth="0.7" />
            <path d="M22,48 Q12,62 22,76 Q32,62 22,48" strokeWidth="0.9" />
            <path d="M22,48 L22,72" strokeWidth="0.7" />
            <path d="M78,30 C80,20 90,24 86,34 Q82,40 78,30" strokeWidth="0.9" />
            <path d="M30,78 C20,80 24,90 34,86 Q40,82 30,78" strokeWidth="0.9" />
            <path d="M68,52 Q82,62 90,56 Q94,52 90,46" strokeWidth="0.8" />
            <path d="M52,68 Q62,82 56,90 Q52,94 46,90" strokeWidth="0.8" />
          </svg>

          <svg className="corner-ornament corner-bl" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M4,4 Q6,50 26,76 Q42,94 86,102" strokeWidth="1.2" />
            <path d="M4,4 Q50,6 76,26 Q94,42 102,86" strokeWidth="1.2" />
            <path d="M28,16 C22,10 34,10 28,16" strokeWidth="1" />
            <path d="M38,24 C46,20 44,32 38,24" strokeWidth="1" />
            <path d="M34,36 C40,42 28,44 34,36" strokeWidth="1" />
            <path d="M20,34 C12,38 16,24 22,32" strokeWidth="1" />
            <path d="M18,22 C12,16 26,12 20,24" strokeWidth="1" />
            <circle cx="28" cy="27" r="5" strokeWidth="1" />
            <path d="M26,26 C26,24 30,24 30,26 C30,28 26,28 27,26" strokeWidth="0.8" />
            <path d="M48,22 Q62,12 76,22 Q62,32 48,22" strokeWidth="0.9" />
            <path d="M48,22 L72,22" strokeWidth="0.7" />
            <path d="M22,48 Q12,62 22,76 Q32,62 22,48" strokeWidth="0.9" />
            <path d="M22,48 L22,72" strokeWidth="0.7" />
            <path d="M78,30 C80,20 90,24 86,34 Q82,40 78,30" strokeWidth="0.9" />
            <path d="M30,78 C20,80 24,90 34,86 Q40,82 30,78" strokeWidth="0.9" />
            <path d="M68,52 Q82,62 90,56 Q94,52 90,46" strokeWidth="0.8" />
            <path d="M52,68 Q62,82 56,90 Q52,94 46,90" strokeWidth="0.8" />
          </svg>

          <svg className="corner-ornament corner-br" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M4,4 Q6,50 26,76 Q42,94 86,102" strokeWidth="1.2" />
            <path d="M4,4 Q50,6 76,26 Q94,42 102,86" strokeWidth="1.2" />
            <path d="M28,16 C22,10 34,10 28,16" strokeWidth="1" />
            <path d="M38,24 C46,20 44,32 38,24" strokeWidth="1" />
            <path d="M34,36 C40,42 28,44 34,36" strokeWidth="1" />
            <path d="M20,34 C12,38 16,24 22,32" strokeWidth="1" />
            <path d="M18,22 C12,16 26,12 20,24" strokeWidth="1" />
            <circle cx="28" cy="27" r="5" strokeWidth="1" />
            <path d="M26,26 C26,24 30,24 30,26 C30,28 26,28 27,26" strokeWidth="0.8" />
            <path d="M48,22 Q62,12 76,22 Q62,32 48,22" strokeWidth="0.9" />
            <path d="M48,22 L72,22" strokeWidth="0.7" />
            <path d="M22,48 Q12,62 22,76 Q32,62 22,48" strokeWidth="0.9" />
            <path d="M22,48 L22,72" strokeWidth="0.7" />
            <path d="M78,30 C80,20 90,24 86,34 Q82,40 78,30" strokeWidth="0.9" />
            <path d="M30,78 C20,80 24,90 34,86 Q40,82 30,78" strokeWidth="0.9" />
            <path d="M68,52 Q82,62 90,56 Q94,52 90,46" strokeWidth="0.8" />
            <path d="M52,68 Q62,82 56,90 Q52,94 46,90" strokeWidth="0.8" />
          </svg>

          {/* 1. Header: Radha-Krishna Medallion & Hare Krishna */}
          <HeaderSection />

          {/* 2. Announcement Section */}
          <AnnouncementSection data={weddingData} />

          {/* 3. Couple Portrait (Transparent / No Background) */}
          <CouplePortrait data={weddingData} />

          {/* 4. Event Details (4 Cards) */}
          <EventDetails data={weddingData} />

          {/* 5. Live Real-Time Countdown */}
          <LiveCountdown targetISO={weddingData.countdownTargetISO} />

          {/* 6. Invitation Quote */}
          <InvitationMessage />

          {/* 7 & 8. Add to Calendar & Venue Locations */}
          <CalendarAndDirections data={weddingData} onShowToast={showToast} />

          {/* 9. WhatsApp RSVP Form */}
          <RsvpForm data={weddingData} onShowToast={showToast} />

          {/* 10. Share Invitation */}
          <ShareSection data={weddingData} onShowToast={showToast} />

          {/* 11. Footer Sign-off */}
          <Footer data={weddingData} />

        </article>
      </main>

      {/* Toast Notification Box */}
      <div className={`toast-msg ${toastMessage ? 'show' : ''}`} role="status">
        {toastMessage}
      </div>
    </>
  );
}
