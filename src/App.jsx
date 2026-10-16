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

          {/* Botanical Engraved Corner Ornaments */}
          <svg className="corner-ornament corner-tl" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M6,6 Q6,60 30,85 Q45,100 80,105" strokeWidth="1.3"></path>
            <path d="M6,6 Q60,6 85,30 Q100,45 105,80" strokeWidth="1.3"></path>
            <circle cx="28" cy="28" r="14" strokeWidth="1.2"></circle>
            <path d="M22,28 C22,22 34,22 34,28 C34,34 22,34 25,28" strokeWidth="1.1"></path>
            <circle cx="68" cy="22" r="5" strokeWidth="1.1"></circle>
            <circle cx="22" cy="68" r="5" strokeWidth="1.1"></circle>
            <path d="M38,40 Q55,50 60,70 Q45,65 38,40" strokeWidth="1"></path>
            <path d="M40,38 Q50,55 70,60 Q65,45 40,38" strokeWidth="1"></path>
          </svg>

          <svg className="corner-ornament corner-tr" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M6,6 Q6,60 30,85 Q45,100 80,105" strokeWidth="1.3"></path>
            <path d="M6,6 Q60,6 85,30 Q100,45 105,80" strokeWidth="1.3"></path>
            <circle cx="28" cy="28" r="14" strokeWidth="1.2"></circle>
            <path d="M22,28 C22,22 34,22 34,28 C34,34 22,34 25,28" strokeWidth="1.1"></path>
            <circle cx="68" cy="22" r="5" strokeWidth="1.1"></circle>
            <circle cx="22" cy="68" r="5" strokeWidth="1.1"></circle>
            <path d="M38,40 Q55,50 60,70 Q45,65 38,40" strokeWidth="1"></path>
            <path d="M40,38 Q50,55 70,60 Q65,45 40,38" strokeWidth="1"></path>
          </svg>

          <svg className="corner-ornament corner-bl" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M6,6 Q6,60 30,85 Q45,100 80,105" strokeWidth="1.3"></path>
            <path d="M6,6 Q60,6 85,30 Q100,45 105,80" strokeWidth="1.3"></path>
            <circle cx="28" cy="28" r="14" strokeWidth="1.2"></circle>
            <path d="M22,28 C22,22 34,22 34,28 C34,34 22,34 25,28" strokeWidth="1.1"></path>
            <circle cx="68" cy="22" r="5" strokeWidth="1.1"></circle>
            <circle cx="22" cy="68" r="5" strokeWidth="1.1"></circle>
            <path d="M38,40 Q55,50 60,70 Q45,65 38,40" strokeWidth="1"></path>
            <path d="M40,38 Q50,55 70,60 Q65,45 40,38" strokeWidth="1"></path>
          </svg>

          <svg className="corner-ornament corner-br" viewBox="0 0 120 120" aria-hidden="true">
            <path d="M6,6 Q6,60 30,85 Q45,100 80,105" strokeWidth="1.3"></path>
            <path d="M6,6 Q60,6 85,30 Q100,45 105,80" strokeWidth="1.3"></path>
            <circle cx="28" cy="28" r="14" strokeWidth="1.2"></circle>
            <path d="M22,28 C22,22 34,22 34,28 C34,34 22,34 25,28" strokeWidth="1.1"></path>
            <circle cx="68" cy="22" r="5" strokeWidth="1.1"></circle>
            <circle cx="22" cy="68" r="5" strokeWidth="1.1"></circle>
            <path d="M38,40 Q55,50 60,70 Q45,65 38,40" strokeWidth="1"></path>
            <path d="M40,38 Q50,55 70,60 Q65,45 40,38" strokeWidth="1"></path>
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
