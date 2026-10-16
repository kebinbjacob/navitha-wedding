# Navitha & Shahin - Dynamic Wedding Invitation (React + Vite)

A modern, dynamic, mobile-first wedding invitation web app designed with a warm sepia line-art aesthetic and paper-grain texture.

## ✨ Features
- **Background-Removed Couple Portrait**: Uses `couple-transparent.png` so the couple rests seamlessly on the warm parchment background with a subtle ambient glow and interactive 3D parallax tilt.
- **Dynamic Live Customizer**: Click the floating gear icon to edit Bride & Groom names, Muhurtham, Venues, or add a **Personalized Guest Name** (e.g., "Rahul & Family").
- **Personalized URL Query Parameter Support**: Send custom links to guests such as `?to=Uncle%20and%20Aunt%20&%20Family` or `?to=Dr.%20Rajesh%20Kumar` to automatically greet them on the envelope and announcement!
- **Interactive Opening Envelope Experience**: Tap to open with realistic wax seal, opening animation, and synthesized Kerala temple bell chime.
- **Synthesized Temple Bell Chime**: Powered by browser Web Audio API (zero audio file dependencies, fully offline-ready, muted by default with a mute/unmute toggle).
- **Falling Jasmine & Marigold Petals**: Smooth canvas particle engine with pause/play toggle.
- **Real-Time Countdown**: Live ticking countdown to November 16, 2026, 9:30 AM IST.
- **Add to Calendar**: Generates and downloads RFC-compliant `.ics` calendar invite + one-click Google Calendar link.
- **Location Navigation**: Direct Google Maps links for Guruvayur Sreekrishna Temple and King Auditorium, Thalikulam.
- **WhatsApp RSVP Dispatch**: Form with guest count, attendance options, and warm blessings that compiles a WhatsApp message to `+917594950818`.

## 🚀 How to Run the React App

### Development Server:
```bash
npm run dev
```
Opens the app on `http://localhost:3000`.

### Production Build:
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` folder ready for deployment on Vercel, Netlify, GitHub Pages, or any web host.

### Preview Production Build:
```bash
npm run preview
```
