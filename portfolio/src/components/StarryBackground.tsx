import { useEffect } from 'react';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StarryBackground = () => {
  useEffect(() => {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.className = 'starrynight-bg-container';
    document.body.appendChild(backgroundContainer);

    // Create stars
    const canvasSize = window.innerWidth * window.innerHeight;
    const starsFraction = canvasSize / 4000;
    
    for (let i = 0; i < starsFraction; i++) {
      const size = Math.random() < 0.5 ? 1 : 2;
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.left = `${random(0, 99)}%`;
      star.style.top = `${random(0, 99)}%`;
      star.style.opacity = String(random(0.5, 1));
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = '#fff';
      star.style.zIndex = '-1';
      star.style.borderRadius = '50%';

      if (Math.random() < 0.2) {
        star.style.animation = `twinkle${Math.floor(Math.random() * 4) + 1} 5s infinite`;
      }

      backgroundContainer.appendChild(star);
    }

    // Create shooting stars
    for (let i = 0; i < 4; i++) {
      const shootingstar = document.createElement('span');
      shootingstar.className = 'shootingstar';
      
      if (Math.random() < 0.75) {
        shootingstar.style.top = '-4px';
        shootingstar.style.right = `${random(0, 90)}%`;
      } else {
        shootingstar.style.top = `${random(0, 50)}%`;
        shootingstar.style.right = '-4px';
      }

      shootingstar.style.animationDuration = `${Math.floor(Math.random() * 3) + 3}s`;
      shootingstar.style.animationDelay = `${Math.floor(Math.random() * 7)}s`;

      backgroundContainer.appendChild(shootingstar);

      shootingstar.addEventListener('animationend', () => {
        if (Math.random() < 0.75) {
          shootingstar.style.top = '-4px';
          shootingstar.style.right = `${random(0, 90)}%`;
        } else {
          shootingstar.style.top = `${random(0, 50)}%`;
          shootingstar.style.right = '-4px';
        }

        shootingstar.style.animation = 'none';
        void shootingstar.offsetWidth;
        shootingstar.style.animation = '';
        shootingstar.style.animationDuration = `${Math.floor(Math.random() * 4) + 3}s`;
      });
    }

    return () => {
      backgroundContainer.remove();
    };
  }, []);

  return null;
};

export default StarryBackground;
