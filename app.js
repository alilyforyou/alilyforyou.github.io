// Lily Animation - Pure CSS Implementation
// This file is included for completeness but the animation is entirely CSS-driven

document.addEventListener('DOMContentLoaded', function() {
    // The lily animation is handled entirely by CSS
    // This script is minimal as requested for a pure HTML/CSS solution
    
    // Optional: Add a subtle entrance effect to the body
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Optional: Add keyboard accessibility for restarting animation
document.addEventListener('keydown', function(event) {
    // Press 'R' to restart the animation
    if (event.key.toLowerCase() === 'r') {
        const container = document.querySelector('.flower-container');
        if (container) {
            // Remove and re-add animation class to restart
            container.style.animation = 'none';
            container.offsetHeight; // Trigger reflow
            container.style.animation = null;
        }
    }
});