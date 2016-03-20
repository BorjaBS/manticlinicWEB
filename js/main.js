$(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            //controlNav: "thumbnails",
            pauseOnHover: true,
            slideshow: true, 
          });
    });

// Evento onclick del boton volver
$(".boton").click(function(){

  window.history.back();

});

