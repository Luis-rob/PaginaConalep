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
});
