const menBtn = document.querySelector('.nae');
const navstuff = document.querySelector('.mobile-menu');
const Closer = document.querySelector('.close-button');
const rep = document.getElementById('hide');

menBtn.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navstuff.classList.toggle('activate');
  navstuff.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
  rep.classList.toggle('invisible');
});