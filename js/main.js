//alert("here is working!!!!");
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 970) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 971) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    })
})


$(".navbar-dark ul li a[href^='#']").on('click',function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
});

$("#main-nav a[href^='#']").on('click',function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
});

$("#cover p a[href^='#']").on('click',function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
        window.location.hash = hash;
    });
});
