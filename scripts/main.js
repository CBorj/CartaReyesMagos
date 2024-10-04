document.getElementById('form-carta').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para guardar la carta
});

function agregarRegalo() {
    const regalosDiv = document.getElementById('regalos');
    const nuevoRegalo = document.createElement('div');
    nuevoRegalo.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required>
        <label for="descripcion">Descripción:</label>
        <input type="text" name="descripcion" required>
        <label for="imagen">Imagen (URL):</label>
        <input type="text" name="imagen">
        <label for="url">URL:</label>
        <input type="text" name="url">
    `;
    regalosDiv.appendChild(nuevoRegalo);
}
