const grid = new Muuri('.grid',  {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();       
    document.getElementById('grid').classList.add('imagenes-cargadas');

    //agregamos los listener de los enlaces para filtrar por categoría

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            console.log(evento.target);
            enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            console.log(categoria);
            categoria === 'todos' ? 
                grid.filter(`[data-categoria]`) : 
                grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // agregamos los listener para la barra de búsqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) ); 
    });
}); 