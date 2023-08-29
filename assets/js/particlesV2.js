import React, { useEffect } from 'react';

function ParticleEffect() {
    useEffect(() => {
        const numParticles = 75;
        const particlesContainer = document.querySelector('.particles');

        createParticles(numParticles, particlesContainer);

        particlesContainer.addEventListener('click', (event) => {
            const { clientX, clientY } = event;
            createParticlesAroundCursor(clientX, clientY, 10, particlesContainer);
        });

        function createParticles(count, container) {
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                container.appendChild(particle);
            }
            particlefloat(document.querySelectorAll('.particle'));
        }

        function createParticlesAroundCursor(x, y, numParticles, container) {
            for (let i = 0; i < numParticles; i++) {
                createParticleCursor(x, y - 10, container);
            }
        }

        function particlefloat(particles) {
            particles.forEach((particle) => {
                const size = Math.random() * 20 + 5 + 'px';
                particle.style.width = size;
                particle.style.height = size;
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.bottom = '0';
                particle.style.animationDuration = Math.random() * 3 + 1 + 's';
            });
        }

        function createParticleCursor(x, y, container) {
            const particle = document.createElement('div');
            particle.classList.add('particle-cursor');
            const randomColor = getRandomColor();

            particle.style.backgroundColor = randomColor;
            container.appendChild(particle);

            const offset = getRandomOffset();
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.left = x - 5 + offset + 'px';
            particle.style.top = y - 5 + offset + 'px';
            particle.style.animationDuration = Math.random() * 2 + 1 + 's';

            setTimeout(() => {
                particle.remove();
            }, parseFloat(particle.style.animationDuration) * 1000);
        }

        function getRandomOffset() {
            return (Math.random() - 0.5) * 20; // Adjust the range as needed
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }, []);

    return <div className="particles"></div>;
}

export default ParticleEffect;
