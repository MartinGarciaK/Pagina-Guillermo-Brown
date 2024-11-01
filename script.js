let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(() => {
    nextSlide();
}, 3000); // Cambia la imagen cada 3 segundos


// Muestra la primera imagen al cargar la página
showSlide(currentIndex);
