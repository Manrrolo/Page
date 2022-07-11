const box = document.getElementById('hidden');
window.onload = function () {
  $('#onload').fadeOut();
  box.removeAttribute('id');
};
