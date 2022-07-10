const box = document.getElementById('hidden');
window.onload = function () {
  $('#onload').fadeOut();
  box.removeAttribute('id');
};
function rain() {
  const image = document.getElementById('background');
  image.onload = function () {
    var rainyDay = new RainyDay({
      image: this,
      blur: 10,
      fps: 40,
    });
    RainyDay.rain([[5, 2, 2]], 0);
  };
  image.src = '../source/img/carretera.jpg';
}

rain();
