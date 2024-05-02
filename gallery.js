document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Automatically advance slides
    let intervalId = setInterval(nextSlide, slideInterval);


    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });

        slide.addEventListener('mouseleave', () => {
            intervalId = setInterval(nextSlide, slideInterval);
        });
    });
});
