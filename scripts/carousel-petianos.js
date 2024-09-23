document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.conteiner_petianos');
    const images = document.querySelectorAll('.conteiner_petianos img');
    const imageWidth = images[0].offsetWidth;
    let currentIndex = 0;

    function moveCarousel() {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = `translateX(-${imageWidth}px)`;

        setTimeout(() => {
            container.style.transition = 'none';
            container.appendChild(images[currentIndex]);
            container.style.transform = 'translateX(0)';
            currentIndex = (currentIndex + 1) % images.length;
        }, 1000);
    }

    setInterval(moveCarousel, 1500); 
});