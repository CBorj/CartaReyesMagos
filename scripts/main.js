document.getElementById('form-carta').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para guardar la carta
});

function brillo() {
    // Lógica para agregar brillo al objeto h1 de clase golden-text
    const goldenTextElements = document.querySelectorAll('.golden-text');
    goldenTextElements.forEach(element => {
        element.style.transition = 'text-shadow 0.5s ease-in-out, color 0.5s ease-in-out';
        element.style.textShadow = '2px 2px 8px #FF0000';
        element.style.color = 'yellow';
        setTimeout(() => {
            element.style.textShadow = '';
            element.style.color = '';
        }, 1000);
    });
}
