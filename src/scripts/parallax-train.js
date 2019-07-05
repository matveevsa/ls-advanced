const parallaxTrain = document.querySelector('.parallax-train');
const layers = parallaxTrain.children;

function moveLayersDependesOnScroll(wScroll) {

  Array.from(layers).forEach((layer) => {

    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 15;

    layer.style.transform = `translateY(-${strafe}%)`;

  })
}

window.addEventListener('scroll', (evt) => {
  const wScroll = window.pageYOffset;

  moveLayersDependesOnScroll(wScroll);
})