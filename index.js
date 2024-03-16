document.addEventListener('DOMContentLoaded', () => {
    const sideBar = document.querySelector('#sideBar');
    const imagen = document.querySelector('#imagen');
    
    // Establecer la imagen inicial
    imagen.src = './img/1.jpg';
    
    crearImagenes();
    
    function crearImagenes() {
        for (let i = 1; i <= 3; i++) {
            const imagenSide = document.createElement('img');
            imagenSide.src = `./img/${i}.jpg`;
            imagenSide.classList.add('cuadros');
            imagenSide.id = i;
            sideBar.appendChild(imagenSide);
    
            // Utilizamos una función anónima para almacenar el valor de i
            // de forma independiente para cada iteración
            imagenSide.addEventListener('click', function() {
                imagen.src = this.src; // Utilizamos this para hacer referencia a la imagenSide actual
            });
        }
    }
});

