var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const box = document.getElementById('hidden');
window.onload = function () {
  $('#onload').fadeOut();
  box.removeAttribute('id');
};
