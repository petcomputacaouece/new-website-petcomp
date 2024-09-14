document.querySelectorAll('menu-desktop button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = button.getAttribute('data-target');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});