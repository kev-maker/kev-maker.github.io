//Evento del boton de Menu
//Cuando es resposive
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})
//Animaciones cuando se desplaza hacia abajo
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });