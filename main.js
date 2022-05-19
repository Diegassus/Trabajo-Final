// armado de carrusel

var slider = new Array;
slider[1] = "https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Library-Sites-shared-library-web/default/dw4d8a5a9f/Web_Revamp_Contribution/homepage/triple-pushes/ACV-Standard-Edition-Triple.jpg?sw=630&sh=330&sm=fit"; //acv
slider[2] = "https://phantom-marca.unidadeditorial.es/0eda52d40e4c68ea020a186e70c060e1/resize/1320/f/jpg/assets/multimedia/imagenes/2021/02/20/16137775114390.jpg"; //mine
slider[3] ="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/07/the-last-of-us.jpg?fit=1200%2C720&quality=50&strip=all&ssl=1"; //tlou
slider[4] = "https://www.hrkgame.com/media/screens/expansion-hearts-of-iron-iv-la-resistance/.thumbnails/ss_900a5abf03d1a346f149ecf6de72f8434db72516.600x338_uAPpKRH.jpg/ss_900a5abf03d1a346f149ecf6de72f8434db72516.600x338_uAPpKRH-800x500.jpg"; //hoi4
slider[5] = "https://i0.wp.com/caniplaythat.com/wp-content/uploads/2021/05/uncharted-4-accessibility-stats.jpg?resize=800%2C450&ssl=1"; //uncharted 4
slider[6] = "https://images.pushsquare.com/8b917a36c5c4b/horizon-zero-dawn-ps4-1.large.jpg"; //horizon zd


function mostrar(index){
    document.slide.src=slider[index];
};
