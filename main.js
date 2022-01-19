
// mybutton = document.getElementById("myBtn");


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


// function topFunction() {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0;
// }

const menu_btn = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {

  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
