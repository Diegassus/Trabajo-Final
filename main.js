// armado de carrusel

var slider = new Array;
slider[1] = document.getElementById('1');
slider[2] = document.getElementById('2');
slider[3] = document.getElementById('3');
slider[4] = document.getElementById('4');
slider[5] = document.getElementById('5');
slider[6] = document.getElementById('6');

function mostrar(index){
    slider[index].style.visibility=visible;
    setear(index);
};

function setear(index){
    for(i=1; i<index;i++){
        slider[i].style.visibility=hidden;
    }
    for(i=index+1; i<6;i++){
        slider[i].style.visibility=hidden;
    }
}