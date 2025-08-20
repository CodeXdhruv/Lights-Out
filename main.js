document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for register button
    document.querySelector('.register-button').addEventListener('click', function(e) {
        e.preventDefault();
        const pricingSection = document.querySelector('#pricing');
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Add hover effects to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
