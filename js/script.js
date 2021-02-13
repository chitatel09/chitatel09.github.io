 






swiper = new Swiper('.swiper-container',  {
	// spaceBetween: 0,
      effect: 'fade',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 70,
        shadowScale:0.7,
      },

    // allowTouchMove: false, отключение пролистывания вручную
	speed: 1000,
	loop: true,//зацикленность
	autoplay: {
    delay: 4000,
  },
  
      
      
    });




$(function(){

$('.dif').click(function () {
 
  if ($('.img_chang').attr('src')=='img/3.jpg'){
  $('.zer').css('border-bottom','0');
  $('.dif').css('border-bottom','3px red solid');
  $('.dif').css('opacity','1');
  $('.zer').css('opacity','.4');
  $('.img_chang').fadeOut(200, function() 
    {$('.img_chang').attr('src','img/11.jpg')
    
  }).fadeIn(400);}
  

})

})

$(function(){

$('.zer').click(function () {
 
  if ($('.img_chang').attr('src')=='img/11.jpg'){
  $('.dif').css('border-bottom','0');
  $('.zer').css('border-bottom','3px red solid');
  $('.zer').css('opacity','1');
  $('.dif').css('opacity','.4');
  $('.img_chang').fadeOut(200, function() 
    {$('.img_chang').attr('src','img/3.jpg')
    
  }).fadeIn(400);}
  

})

})



  $('.zer').hover(function () {

$('.zer').css('opacity','0.6');
  

  },
function () {
if ($('.img_chang').attr('src')=='img/3.jpg'){
 $('.zer').css('opacity',1); 
}

 else{
  $('.zer').css('opacity',.4); 
 } 

  }
  )


  $('.dif').hover(function () {

$('.dif').css('opacity','0.6');
  

  },
function () {
if ($('.img_chang').attr('src')=='img/11.jpg'){
 $('.dif').css('opacity',1); 
}

 else{
  $('.dif').css('opacity',.4); 
 } 

  }
  )



  $(function(){

$('.camera').click(function () {
  if ($('.img_chang1').attr('src')!='img/camer.jpg'){
  $('.radar').css('border-bottom','0');
  $('.ul-sound').css('border-bottom','0');
  $('.camera').css('border-bottom','3px red solid');
  $('.camera').css('opacity','1');
  $('.radar').css('opacity','.4');
  $('.ul-sound').css('opacity','.4');
  $('.img_chang1').fadeOut(200, function() 
    {$('.img_chang1').attr('src','img/camer.jpg')
    
  }).fadeIn(400);}
  

})

})


$(function(){

$('.ul-sound').click(function () {
 
  if ($('.img_chang1').attr('src')!='img/uz.jpg'){
  $('.radar').css('border-bottom','0');
  $('.camera').css('border-bottom','0');
  $('.ul-sound').css('border-bottom','3px red solid');
  $('.ul-sound').css('opacity','1');
  $('.radar').css('opacity','.4');
  $('.camera').css('opacity','.4');
  $('.img_chang1').fadeOut(200, function() 
    {$('.img_chang1').attr('src','img/uz.jpg')
    
  }).fadeIn(400);}
  

})

})

 


  $(function(){

$('.radar').click(function () {
 
  if ($('.img_chang1').attr('src')!='img/radar.jpg'){
  $('.ul-sound').css('border-bottom','0');
  $('.camera').css('border-bottom','0');
  $('.radar').css('border-bottom','3px red solid');
  $('.radar').css('opacity','1');
  $('.ul-sound').css('opacity','.4');
  $('.camera').css('opacity','.4');
  $('.img_chang1').fadeOut(200, function() 
    {$('.img_chang1').attr('src','img/radar.jpg')
    
  }).fadeIn(400);}
  

})

})



  $('.radar').hover(function () {

$('.radar').css('opacity','0.6');
  

  },
function () {
if ($('.img_chang1').attr('src')=='img/radar.jpg'){
 $('.radar').css('opacity',1); 
}

 else{
  $('.radar').css('opacity',.4); 
 } 

  }
  )


  $('.camera').hover(function () {

$('.camera').css('opacity','0.6');
  

  },
function () {
if ($('.img_chang1').attr('src')=='img/camer.jpg'){
 $('.camera').css('opacity',1); 
}

 else{
  $('.camera').css('opacity',.4); 
 } 

  }
  )



$('.ul-sound').hover(function () {

$('.ul-sound').css('opacity','0.6');
  

  },
function () {
if ($('.img_chang1').attr('src')=='img/uz.jpg'){
 $('.ul-sound').css('opacity',1); 
}

 else{
  $('.ul-sound').css('opacity',.4); 
 } 

  }
  )





$('body').scroll(function() {


      if ($('body').scrollTop() > 620){

        
$('.button_up').css('visibility',' visible');
          $('.button_up').fadeIn(500);
            
          
      }

else{$('.button_up').fadeOut(500);}

if($('futer').offset().top<(document.documentElement.clientHeight-30)){$('.button_up').css('background-color',' red');}
else{$('.button_up').css('background-color','black');}
  })



$('futer a').click(function () {

  
 var h=$('body').scrollTop();

$('.modal').css('top',h+'px');
$('.modal').removeClass('scale-out-right');


$('body').css('overflow','hidden');
$('.modal').css('display','block');
$('.modal').css('z-index','100');

})


$('.close').click(function () {
$('.modal').addClass('scale-out-right');
$('.modal').css('z-index','0');
$('body').css('overflow','inherit');
function closeModal() {$('.modal').css('display','none');


   }


setTimeout(closeModal,800);

})





$('.t1').click(function () {
$('.t1').toggleClass('rotate180');
$('.p1').slideToggle();

})

$('.t2').click(function () {
$('.t2').toggleClass('rotate180');
$('.p2').slideToggle();

})

$('.t3').click(function () {
$('.t3').toggleClass('rotate180');
$('.p3').slideToggle();

})


