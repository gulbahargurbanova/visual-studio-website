// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the element to animate
    const animateText = document.querySelector('.animate-text');
    
    // Add the visible class after a short delay
    setTimeout(() => {
        animateText.classList.add('visible');
    }, 500);
});