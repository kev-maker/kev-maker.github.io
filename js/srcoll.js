// ProgressBar
let progressbar = document.querySelector('.progressbar');

function ScrollProgressBar() {
   let scrollTop = document.documentElement.scrollTop; //Es lo que avanza en el contenido
   let scrollHeight = document.documentElement.scrollHeight; //Alto total de la ventada
   let clientHeight = document.documentElement.clientHeight; // Lo que se ve en la pantalla

   let windowHeight = scrollHeight - clientHeight;  
   let porcentaje = scrollTop / windowHeight * 100; // La operacion para obtener el porcentaje

   progressbar.style.width = porcentaje + '%';

}

window.addEventListener('scroll', ScrollProgressBar);

//Go to top

document.getElementById('btn-down').addEventListener('click', scrollUp);

function scrollUp() {
   var currentScroll = document.documentElement.scrollTop;
   if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - (currentScroll / 10)); //El tiempo de la animación para subit al inicio
   }
}

buttonUp = document.getElementById('btn-down');

window.onscroll = function(){
   var scroll = document.documentElement.scrollTop;

   //Logica para que aparezca el boton
   if(scroll > 150) {
      buttonUp.style.transform = "scale(1)";
   }else if(scroll < 150){
      buttonUp.style.transform = "scale(0)"
   }
}