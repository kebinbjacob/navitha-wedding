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
        this.size = Math.random() * 9 + 7;
        this.speedY = Math.random() * 0.8 + 0.55;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.018;
        this.flip = Math.random() * Math.PI * 2;
        this.flipSpeed = Math.random() * 0.025 + 0.015;
        this.opacity = Math.random() * 0.4 + 0.45;
        
        // 3 Petal Variations: Dusty Rose (40%), Soft Blush (40%), Porcelain White (20%)
        const rand = Math.random();
        if (rand < 0.4) {
          this.colorType = 'dustyRose';
        } else if (rand < 0.8) {
          this.colorType = 'blushPink';
        } else {
          this.colorType = 'porcelain';
        }
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.012) * 0.7 + this.speedX;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;
        if (this.y > canvas.height + 25) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        // 3D flip scaling on Y axis for realistic tumbling petal effect
        const scaleY = Math.cos(this.flip);
        ctx.scale(1, scaleY);
        ctx.globalAlpha = this.opacity;

        if (this.colorType === 'dustyRose') {
          ctx.fillStyle = '#E596A4';
          ctx.strokeStyle = '#9E5B6A';
        } else if (this.colorType === 'blushPink') {
          ctx.fillStyle = '#F9DDE2';
          ctx.strokeStyle = '#D596A3';
        } else {
          ctx.fillStyle = '#FFF5F6';
          ctx.strokeStyle = 'rgba(185, 127, 140, 0.45)';
        }

        ctx.lineWidth = 0.5;
        // Realistic Rose Petal: Heart-notched top, rounded curves, tapered base
        ctx.beginPath();
        ctx.moveTo(0, this.size * 0.9);
        ctx.bezierCurveTo(-this.size * 0.8, this.size * 0.2, -this.size * 0.8, -this.size * 0.6, -this.size * 0.2, -this.size * 0.9);
        ctx.quadraticCurveTo(0, -this.size * 0.75, this.size * 0.2, -this.size * 0.9);
        ctx.bezierCurveTo(this.size * 0.8, -this.size * 0.6, this.size * 0.8, this.size * 0.2, 0, this.size * 0.9);
        ctx.closePath();
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
