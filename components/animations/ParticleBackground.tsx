'use client';

import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: { x: number; y: number; radius: number; color: string }[] = [];
        const particleCount = 100; // Adjust for more or fewer particles

        const colors = ['#FFC0CB', '#FFFFFF']; // Pink and white colors

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 5 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });
        };

        const animateParticles = () => {
            drawParticles();
            requestAnimationFrame(animateParticles);
        };

        animateParticles();

        return () => {
            cancelAnimationFrame(animateParticles);
        };
    }, []);

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;