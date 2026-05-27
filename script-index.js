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
    
    document.addEventListener('click', () => {
        listaMenu.style.display = 'none';
    });
});
