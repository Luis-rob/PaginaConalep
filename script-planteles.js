document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btnMenu');
    const listaMenu = document.getElementById('listaMenu');

    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        listaMenu.style.display = (listaMenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        listaMenu.style.display = 'none';
    });

    const formulario = document.getElementById('formularioSugerencias');
    const mensajeExito = document.getElementById('mensajeExito');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombreUsuario').value;

        mensajeExito.textContent = `¡Muchas gracias, ${nombre}! Tu sugerencia ha sido recibida exitosamente en el sistema de planteles.`;
        mensajeExito.style.display = 'block';

        formulario.reset();
    });
});
