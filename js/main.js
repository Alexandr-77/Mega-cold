
let burger = document.querySelector('.header__burger-box');
let nav = document.querySelector('.header__block-nav');

let hideBox = document.querySelector('.popular__box-hide');
let btnPopular = document.querySelector('.popular__btn');


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


let btnCall = document.querySelectorAll('.call--mi');
let popap = document.querySelector('.popap');
let popapClose = document.querySelector('.popap__close');

popapClose.addEventListener('click', function () {
  popap.style.display = "none";
});  

for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener('click', functionCall2);  
}

function functionCall2() {
    popap.style.display = "block";
  }

// ====================================
let checketMs = document.querySelector('#popap-for');
let otpBtn = document.querySelector('.popap__btn');

let popapBlago = document.querySelector('.popap__blago');

checketMs.addEventListener('click', function () {
  if (checketMs.checked) {
    otpBtn.style.backgroundColor = "var(--color-bg)";
    otpBtn.style.cursor = "pointer";
  } else {
    otpBtn.style.background = "var(--color-xs)";
    otpBtn.style.cursor = "default";
  } 
});  

otpBtn.addEventListener('click', function() {
  popap.style.display = "none";
  popapBlago.style.display = "block";
});

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