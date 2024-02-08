$(function(){

    $('.main__slider').slick({
        prevArrow: '<button class="arrow left"><img src="images/leftArrow.svg" alt=""></button>',
        nextArrow: '<button class="arrow right"><img src="images/rightArrow.svg" alt=""></button>',
        dots: true,
        autoplay: true,
        speed: 1100
    });

    $('.products__cart-slider').slick({
        prevArrow: '<button class="cartArrow cartLeft"><img src="images/leftArrow.svg" alt=""></button>',
        nextArrow: '<button class="cartArrow cartRight"><img src="images/rightArrow.svg" alt=""></button>',
    });
  
});