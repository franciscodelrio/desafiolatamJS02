const imagen = document.querySelector('#miImagen');

let bordeActivado = false;

imagen.addEventListener('click', () => {
    if (bordeActivado) {
        imagen.style.border = 'none';
        bordeActivado = false;
    } else {
        imagen.style.border = '2px solid red';
        bordeActivado = true;
    }
});
