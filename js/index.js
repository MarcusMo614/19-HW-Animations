$( document ).ready(function() {
    console.log( "ready!" );
});

// $('html, body').animate({
//     scrollTop: $("#showcase").offset().top
// }, 1000);

$('a[href^="#showcase"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('a[href^="#top"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$('.navButton').on('click', function(){
    $(this).toggleClass('active');

    if ($(this).hasClass('active')){
        $(this).removeClass('hvr-bob:hover');
    }

});


// var body = document.body,timer;
// window.addEventListener('scroll', function() {
//    clearTimeout(timer);
//   if(!body.classList.contains('disable-hover')) {
//     body.classList.add('disable-hover')
//   }
//    timer = setTimeout(function(){
//     body.classList.remove('disable-hover')
//   },500);
// }, false);


ScrollReveal().reveal('.hello3', {delay:600});