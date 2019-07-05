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

parallaxTrain.addEventListener('mousemove', (evt) => {
  const x = evt.clientX,
        y = evt.clientY;
console.log(x, y);
  moveLayersDependesOnScroll(x, y);
})