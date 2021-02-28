let splide = new Splide('.splide', {
  type: 'loop',
  pagination: true,
  arrowPath:
    'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" stroke="white" stroke-width="1" fill="white"',
  classes: {
    arrow: 'splide__arrow arrow',
  },
}).mount();

function animate() {
  let topAni = document.getElementsByClassName('a-top');
  let bottomAni = document.getElementsByClassName('a-bottom');
  let rightAni = document.getElementsByClassName('a-right');

  for (let item of topAni) {
    item.classList.add('slide-in-top');
    item.classList.remove('hide');
  }
  for (let item of bottomAni) {
    item.classList.add('slide-in-bottom');
    item.classList.remove('hide');
  }

  for (let item of rightAni) {
    item.classList.add('fade-in-right');
    item.classList.remove('hide');
  }
}

function resetAnimation() {
  let topAni = document.getElementsByClassName('a-top');
  let bottomAni = document.getElementsByClassName('a-bottom');
  let rightAni = document.getElementsByClassName('a-right');

  for (let item of topAni) {
    item.classList.remove('slide-in-top');
    item.classList.add('hide');
  }
  for (let item of bottomAni) {
    item.classList.remove('slide-in-bottom');
    item.classList.add('hide');
  }
  for (let item of rightAni) {
    item.classList.remove('fade-in-right');
    item.classList.add('hide');
  }
}

splide.on('move', () => {
  resetAnimation();
});

splide.on('visible', () => {
  animate();
});
