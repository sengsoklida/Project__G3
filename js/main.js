let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
/*=============== SWIPER HOMES ===============*/

const swiperHome = new Swiper('.home__Swiper', {
    
    loop: true,
    speed: 800,
    parallax: true,
    effect: 'fade',
    pagination: {
      el: 'Swiper-pagination',
      type: 'fraction',

    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
var button = document.getElementById("clicker");
setInterval(function(){
    button.click()
},9000) 
/*=============== add to fav ===============*/
 // ADDING ITEMS TO WISHLIST

 let wishListCount;
 let heartButtons = document.querySelectorAll('.favorite-btn');

 heartButtons.forEach((button) => {
     button.addEventListener('click', () => {
         button.classList.toggle('active');
         
         wishListCount = document.querySelector('.wishlist-link span');
         wishListCount.innerHTML = document.querySelectorAll('.favorite-btn.active').length;
     })
 })

/*=============== ADD Adult ===============*/
const plus = document.querySelector('.plus');
 minus = document.querySelector('.minus');
 num = document.querySelector('.num');

 let a = 1;

 plus.addEventListener('click', () => {
     a++;
     a = a < 10 ? '0' + a : a;
     num.innerText = a;
     console.log(a);
 });
 minus.addEventListener('click', () => {
    if(a > 1){
        a--;
        a = a < 10 ? '0' + a : a;
        num.innerText = a;
    }
});