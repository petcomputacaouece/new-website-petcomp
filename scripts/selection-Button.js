document.addEventListener('DOMContentLoaded', () => {
    const selectionButton = document.getElementById('selectionButton');

    if (selectionButton) {
        selectionButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            alert('Não estamos em seleção no momento.');
        });
    }
});