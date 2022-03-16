new Glider(document.querySelector('.glider'), {
    slidesToShow: 2, //Quantos elementos irá aparecer na tela
    slidesToScroll: 1, //Quantos irá passar por vez
    draggable: true, 
    dots: '.dots',
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
 /*$(function transicaoAutomatica(){
    $("#slider li:first").fadeIn();
    setInterval( "simpleSlider()", 3000 );
});*/ 