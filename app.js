const menBtn = document.querySelector('.nae');
const navstuff = document.querySelector('.mobile-menu');

menBtn.addEventListener('click', function(event) {
   menBtn.classList.toggle('navblur');
    navstuff.classList.toggle('activate');
   
});


// const menuBtn = document.querySelector('.nav-hamburger');
// const navlinks = document.querySelector('.nav-links');

// menuBtn.addEventListener('click', () => {
//     navlinks.classList.toggle('activin');
//     menuBtn.classList.toggle('active');
// });