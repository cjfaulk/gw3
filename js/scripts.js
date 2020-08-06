$('.maps-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.maps-slider'
});
$('.maps-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 asNavFor: '.maps-nav',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});
