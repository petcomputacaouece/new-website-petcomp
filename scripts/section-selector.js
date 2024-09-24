document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav.menu-desktop button');
    const headerHeight = document.querySelector('header').offsetHeight;

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const targetId = event.target.getAttribute('data-target');

            if (targetId === '#home') {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                let targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});