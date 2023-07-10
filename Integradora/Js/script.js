


window.onload = function (event) {
  var app = new App();
  window.app = app;
}

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const carruselList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector('#track');
  const carrusel = track.querySelectorAll('.carrusel');

  const carruselWidth = carrusel[0].offsetWidth;
  const trackWidth = track.offsetWidth;
  const listWidth = carruselList.offsetWidth;

  const leftPosition = parseFloat(track.style.left.slice(0, -2)) || 0; // Obtiene la posición izquierda actual o establece en 0 si está vacía

  if (btn.dataset.button === "button-prev") {
    prevAction(leftPosition, carruselWidth, track);
  } else {
    nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
  }
}

let prevAction = (leftPosition, carruselWidth, track) => {
  if (leftPosition > 0) {
    track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
  }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
  if (listWidth > trackWidth && (leftPosition + trackWidth) < listWidth) {
    track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
  }
}




    /*desplazamiento con mause*/ 
const track = document.getElementById('carrusel-list');

let isMouseDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', e => {
  isMouseDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

track.addEventListener('mouseup', () => {
  isMouseDown = false;
});

track.addEventListener('mousemove', e => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
  track.scrollLeft = scrollLeft - walk;
});
