//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {

	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


//select
 $(function(){
    $('select').selectric();
});



//navigation

 $(function(){
if($('.menu>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.menu>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}

$('.menu>li').hover(function(){
  $('.menu li').removeClass('active');
  $(this).addClass('active');
var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
},function(){
if($('.menu>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.menu>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
});
});




$(document).ready(
 function(){
 $.each($(".checkbox_js"),function(){
 if($("input", this).is(':checked')){
 $(this).addClass("checked");
 }
 }
 );
 $(".checkbox_js").click(function(){
 $(this).toggleClass("checked");
 var path = $("input", this);
 if(path.is(':checked')){
 path.attr("checked", false);
 }else{
 path.attr("checked", true);
 }
 }
 );
 }

);
function unhide(divID) {
 var item = document.getElementById(divID);
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'';
 }
 }
        
