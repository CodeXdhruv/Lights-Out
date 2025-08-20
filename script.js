document.addEventListener('DOMContentLoaded', function() {
    const landing = document.querySelector('.landing-container');
    const highlights = document.querySelector('.highlights-section');
    
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;
        let opacity = 1 - (scrollPosition / window.innerHeight);
        opacity = Math.max(opacity, 0);
        
        landing.style.opacity = opacity.toString();
        
        if (scrollPosition > window.innerHeight / 2) {
            landing.style.pointerEvents = 'none';
        } else {
            landing.style.pointerEvents = 'all';
        }
    });
});
