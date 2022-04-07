const menBtn = document.querySelector('.nae');
const navstuff = document.querySelector('.mobile-menu');

menBtn.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navstuff.classList.toggle('activate');
});