const parallaxTrain = document.querySelector('.parallax-foliage');
const layers = parallaxTrain.children;

function moveLayersDependesOnScroll(x, y) {

  Array.from(layers).forEach((layer) => {

    const divider = layer.dataset.spd;
    const strafeX = x / 100 * divider;
    const strafeY = y / 100 * divider;

    layer.style.transform = `translateY(${strafeY}%) translateX(-${strafeX}%)`;

  });
}

const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
  parallaxTrain.addEventListener('mousemove', (evt) => {
    const x = evt.clientX,
          y = evt.clientY;
    moveLayersDependesOnScroll(x, y);
  });
}
