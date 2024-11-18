const carruselContenedor = document.querySelector('.carrusel-contenedor');
const images = document.querySelectorAll('#relacionObsesiva img');
const totalImages = images.length;
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    actualizarCarrusel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    actualizarCarrusel();
});

function actualizarCarrusel() {
    carruselContenedor.style.transform = `translateX(-${currentIndex * 100}%)`;
}
