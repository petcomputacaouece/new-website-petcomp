document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('close');
    const modal = document.getElementById('modal');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const slider = document.querySelector('.horizontal-slider');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    leftArrow.addEventListener('click', function() {
        slider.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function() {
        slider.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    });
});
