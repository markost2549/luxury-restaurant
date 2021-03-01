const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 8000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  const activeDot = document.querySelector('.active-dot');
  activeDot.classList.remove('active-dot');

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
    activeDot.nextElementSibling.classList.add('active-dot');
  } else {
    slides[0].classList.add('current');
    dots[0].classList.add('active-dot');
  }
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  const activeDot = document.querySelector('.active-dot');
  activeDot.classList.remove('active-dot');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
    activeDot.previousElementSibling.classList.add('active-dot');
  } else {
    slides[slides.length - 1].classList.add('current');
    dots[dots.length - 1].classList.add('active-dot');
  }
}

next.addEventListener('click', () => {
  nextSlide();

  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

prev.addEventListener('click', () => {
  prevSlide();

  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

function currentSlide(n) {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  const activeDot = document.querySelector('.active-dot');
  activeDot.classList.remove('active-dot');

  slides[n].classList.add('current');
  dots[n].classList.add('active-dot');

  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
}

slideInterval = setInterval(nextSlide, intervalTime);
