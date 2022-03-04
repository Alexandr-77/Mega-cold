
let burger = document.querySelector('.header__burger-box');
let nav = document.querySelector('.header__block-nav');

let hideBox = document.querySelector('.popular__box-hide');
let btnPopular = document.querySelector('.popular__btn');

let btnCallTop = document.querySelector('.footer__link-call');
let btnCall = document.querySelector('.call--mi');
let popap = document.querySelector('.popap');
let popapClose = document.querySelector('.popap__close');

// ======================================================

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger-box--active');

  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }

});

// ======================

btnPopular.addEventListener('click', function() {
  hideBox.style.display = 'flex';
}); 

// ======================

btnCallTop.addEventListener('click', functionCall);
function functionCall() {
  popap.style.display = "block";
}

btnCall.addEventListener('click', functionCall2);
function functionCall2() {
  popap.style.display = "block";
}

popapClose.addEventListener('click', functionCall3);
function functionCall3() {
  popap.style.display = "none";
}


// ====================================================

$('.class-mi').slick({
   dots: true,
   infinite: true,
   arrows: false,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
});


// $('.partners__box-item').slick({
//    dots: false,
//    infinite: true,
//    arrows: true,
//    speed: 300,
//    slidesToShow: 4,
//    slidesToScroll: 1,

// });


$('.partners__box-item').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});