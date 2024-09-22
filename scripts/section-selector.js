document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav.menu-desktop button');
    const headerHeight = document.querySelector('header').offsetHeight;

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                let targetPosition = targetSection.offsetTop - headerHeight;

                if (window.innerWidth <= 1366) {
                    const zoomFactor = 1.25; 
                    targetPosition = targetPosition / zoomFactor;
                }

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});