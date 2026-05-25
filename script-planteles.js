document.addEventListener('DOMContentLoaded', () => {
    // Lógica del menú desplegable
    const btnMenu = document.getElementById('btnMenu');
    const listaMenu = document.getElementById('listaMenu');

    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        listaMenu.style.display = (listaMenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        listaMenu.style.display = 'none';
    });

    // Captura e interactividad del formulario de comentarios
    const formulario = document.getElementById('formularioSugerencias');
    const mensajeExito = document.getElementById('mensajeExito');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga de página

        const nombre = document.getElementById('nombreUsuario').value;

        // Mostrar confirmación dinámica en pantalla
        mensajeExito.textContent = `¡Muchas gracias, ${nombre}! Tu sugerencia ha sido recibida exitosamente en el sistema de planteles.`;
        mensajeExito.style.display = 'block';

        // Limpiar el formulario
        formulario.reset();
    });
});
