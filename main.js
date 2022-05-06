// armado de carrusel

var slides = document.querySelectorAll('.slider');
var indices = document.querySelectorAll('.indice');
let frente = 1;

// manejo manual
var manualNav=function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');

        indices.forEach((indice)=>{
            indice.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    indices[manual].classList.add('active');
}

indices.forEach((indice,i)=>{
    indice.addEventListener('click',()=>{
        manualNav(i);
        frente=i;
    }
    );
});