// Funcionalidad básica interactiva para desplegar el menú
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btnMenu');
    const listaMenu = document.getElementById('listaMenu');

    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        if (listaMenu.style.display === 'block') {
            listaMenu.style.display = 'none';
        } else {
            listaMenu.style.display = 'block';
        }
    });

    // Cerrar menú si se hace clic afuera
    document.addEventListener('click', () => {
        listaMenu.style.display = 'none';
    });
});
