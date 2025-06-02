// Game animations
const animations = {
    // Fade in animation
    fadeIn: (element, duration = 500) => {
        element.style.opacity = 0;
        element.style.display = 'block';
        
        let start = null;
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = Math.min(progress / duration, 1);
            
            if (progress < duration) {
                window.requestAnimationFrame(animate);
            }
        }
        window.requestAnimationFrame(animate);
    },

    // Fade out animation
    fadeOut: (element, duration = 500) => {
        let start = null;
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = 1 - Math.min(progress / duration, 1);
            
            if (progress < duration) {
                window.requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        window.requestAnimationFrame(animate);
    },

    // Victory animation
    victory: (element) => {
        element.style.animation = 'victory 1s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 1000);
    }
};

// Add victory animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes victory {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style); 