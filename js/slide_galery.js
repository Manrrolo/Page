var swiper = new Swiper('.mySwiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
const box = document.getElementById('hidden');
window.onload = function () {
  $('#onload').fadeOut();
  box.removeAttribute('id');
};
