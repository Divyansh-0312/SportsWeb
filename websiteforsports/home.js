document.addEventListener('DOMContentLoaded', function() {
    let slideIndexTeam = 0;
    let slideIndexCouncil = 0;

    function updateCountdown() {
        const eventDate = new Date('2024-10-30T00:00:00');
        const now = new Date();
        const timeLeft = eventDate.getTime() - now.getTime(); // Convert to milliseconds

        if (timeLeft < 0) {
            document.getElementById('time').textContent = "The event has passed.";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('time').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function showSlides(className) {
        const slides = document.querySelectorAll(`.${className} .slide`);
        if (slides.length === 0) {
            console.error(`No slides found with class ${className}`);
            return;
        }

        let index = 0;

        function displaySlides() {
            slides.forEach((slide, idx) => {
                slide.style.display = idx === index ? 'block' : 'none';
            });

            index = (index + 1) % slides.length;
            setTimeout(displaySlides, 3000); // Change slide every 3 seconds
        }

        displaySlides();
    }

    // Initialize functions
    setInterval(updateCountdown, 1000); // Update the countdown timer every second
    updateCountdown(); // Call the function initially

    showSlides('slideshow-team'); // Start slideshow for team
    showSlides('slideshow-council'); // Start slideshow for council
});


