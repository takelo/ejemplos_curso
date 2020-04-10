$(document).ready(function() {
    /*"use strict";
    $("main article:first").hide();
    $("main article:first").remove();
    var copia = $("main article:last").clone();
    $("main").append(copia);
    $("main").prepend(copia);
    $(copia).appendTo("main");
    $(copia).prependTo("main");
    */

    /*
   $("div.logo img").on("click", function(){
     console.log("click en logo");
   });

   $("div.logo img").on("click", function(){
    $(this).remove();
   });

   $("div.logo img").on("mouseenter", function(){
    console.log("flotando dentro");
   });
   $("div.logo img").on("mouseleave", function(){
    console.log("flotando fuera");
   });
 */
/*
$("div.logo img").addClass("activo");

$(".navegacion ul li a").on("click", function(event){
    $(".navegacion ul li a").removeClass("activo");
    event.preventDefault();
    $(this).addClass("activo");
   });
   
   $("main article:first img").on("click", function(event){
    $(this).attr("src", "img/imagen_2.jpg")
   });
*/
/*
   $("div.logo img").css({"width": "600px"});

   $("main article h2").css({"color": "red"});

   $("aside").css({"text-transform": "uppercase",
                    "padding": "10px",
                    "background-color": "green"});

    $(".navegacion ul li a").on("mouseenter", cambiaColor);

    function cambiaColor(){
      $(".navegacion").css({"background-color": "red"});
    }
*/
/*
$(".logo img").on("click", function(){ 
  $(this).animate({"width" : "200px"}, 1000);
});

$("main article img").on("mouseenter", aumentarImg);
$("main article img").on("mouseleave", achicarImg);

function aumentarImg(){
  $(this).animate({"width" : "1000px"}, 1000);
}
function achicarImg(){
  $(this).animate({"width" : "10px"}, 1000);
}
*/
$(".logo img").on("click", function(){ 
 $("main article:first").slideUp(1000);
});

$("aside").on("click", function(){ 
  $("main article:first").slideDown(1000);
 });

});

