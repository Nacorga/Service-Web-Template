$(document).ready(function() {
  
  $('.overlay').css('display', 'none');

	//PROGRESSIVE MOVEMENT
	$('.desplazar').on('click', function(){

		let objetivo = $(this).data('nivel');
		let profundidad = $(objetivo).offset().top;

		$('html').animate({
			scrollTop: profundidad
		}, 1000);

	});
  
  for (let i = 0; i < $('.reveal').length; i++) {
    
    let profundidadObjetivo = $($('.reveal')[i]).offset().top;
    let objetivo = $($('.reveal')[i]).data('nivel');
    
    let minHeight = $($('.reveal')[i]).offset().top - $(window).innerHeight() / 2;
    let maxHeight = minHeight + parseInt($($('.reveal')[i]).css('height'));
    
    
    $(window).on('scroll', function(){
      
      let profundidadUsuario = $(window).scrollTop();
      
      if (profundidadUsuario >= minHeight && profundidadUsuario <= maxHeight) {
        $('#' + objetivo).addClass('activeLink');
      } else {
        $('#' + objetivo).removeClass('activeLink');
      }
      
    });
    
  }
  
  $('.ham').on('click', function(){
    if ( $('.ham').hasClass('active') ) {
      $('.overlay').css('display', 'block');
      $('.toggle ul').animate({
        right: 0
      }, 500);
    } else {
      $('.overlay').css('display', 'none');
      $('.toggle ul').animate({
        right: -300 + '%'
      }, 500);
    }
  });
  
});