import React, { useRef, useEffect } from 'react';

export default function PetalsCanvas({ isPetalsActive, setIsPetalsActive }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Petal {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : -20;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 0.9 + 0.6;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.35;
        this.isMarigold = Math.random() < 0.25;
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) * 0.6 + this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 20) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        if (this.isMarigold) {
          ctx.fillStyle = '#D4A054';
          ctx.strokeStyle = '#A67856';
        } else {
          ctx.fillStyle = '#FDFBF7';
          ctx.strokeStyle = 'rgba(122, 74, 46, 0.4)';
        }

        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.6, 0, 0, this.size);
        ctx.quadraticCurveTo(-this.size * 0.6, 0, 0, -this.size);
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      }
    }

    const petals = Array.from({ length: 28 }, () => new Petal());

    const render = () => {
      if (!isPetalsActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of petals) {
        p.update();
        p.draw();
      }
      animId = requestAnimationFrame(render);
    };

    if (isPetalsActive) {
      render();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isPetalsActive]);

  return (
    <>
      <canvas id="petals-canvas" ref={canvasRef} aria-hidden="true" />
      <button
        className="control-btn"
        onClick={() => setIsPetalsActive(!isPetalsActive)}
        title={isPetalsActive ? "Pause Falling Petals" : "Resume Falling Petals"}
        aria-label="Toggle Falling Petals"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
          <path d="M12 6a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z"></path>
        </svg>
      </button>
    </>
  );
}
