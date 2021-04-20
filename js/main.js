// Hamburger
$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger-active');
    $('.header .navbar').toggleClass('navbar-active');
    $('.overlay').toggleClass('overlay-active');
});


//Header-fixed

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
};


// Links Scroll

$('[data-scroll]').click(function (e) {
    e.preventDefault();

    let scrollId = $(this).attr('data-scroll'),
        scrollTop = $(scrollId).offset().top;
    $('html, body').animate({scrollTop: scrollTop - 10}, 800);
});