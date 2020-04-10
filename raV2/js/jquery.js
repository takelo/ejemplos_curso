jQuery(document).ready(function() {

	//lettering
  // $(".nombre-sitio").lettering();

  //menu fijo
  var alturaVentana = $(window).height();
  var alturaBarra = $(".barra").innerHeight();
   $(window).scroll(function(){
     var scroll = $(window).scrollTop();
     if(scroll >= alturaVentana){
       alturaBarra = $(".barra").innerHeight();
       $(".barra").addClass("fixed");
        $("body").css({"margin-top": alturaBarra+"px"});
     }
       else{
         $(".barra").removeClass("fixed");
          $("body").css({"margin-top": "0px"});
       }
   });

  // hamburgesa
  $(".hamburger").on("click",function(){
    $(".hamburger").toggleClass('open');
    $(".navegacion-principal").slideToggle;
  });
  /*
	//contador
  if(document.getElementsByClassName("contador")){
    $(".contador").countdown("2019/1/1 00:00:00", function(event){
      $("#dias").html(event.strftime("%D"));
      $("#horas").html(event.strftime("%H"));
      $("#minutos").html(event.strftime("%M"));
      $("#segundos").html(event.strftime("%S"));
    });
  }

  */



	// $('#slider1').tinycarousel();



});//lave document ready
