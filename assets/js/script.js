'use strict';

// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// navbar functionality
const [navbar, navToggler, navbarLinks] = [
  document.querySelector('[data-navbar]'),
  document.querySelector('[data-nav-toggler]'),
  document.querySelectorAll('[data-nav-link]'),
];

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  this.classList.toggle('active');
  document.body.classList.toggle('active');
};

navToggler.addEventListener('click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
  document.body.classList.remove('active');
};

addEventOnElements(navbarLinks, 'click', closeNavbar);

// header active

const header = document.querySelector('[data-header]');

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', activeElemOnScroll);

// scroll reveal effect

const revealElements = document.querySelectorAll('[data-reveal]');

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {
    // add revealed class on element, when visible in window
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.1
    ) {
      revealElements[i].classList.add('revealed');

      // remove long transition from button, after 1 second
      if (revealElements[i].classList.contains('btn')) {
        setTimeout(function () {
          revealElements[i].style.transition = '0.25s ease';
        }, 1000);
      }
    }
  }
};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

// video

let player1;
let player2;
let player3;
let player4;
let player5;
let player6;
let player7;
let player8;
let player9;

let card = document.getElementById('video-card-1');
let video = document.getElementById('video-container-1');

let card2 = document.getElementById('video-card-2');
let video2 = document.getElementById('video-container-2');

let card3 = document.getElementById('video-card-3');
let video3 = document.getElementById('video-container-3');

let card4 = document.getElementById('video-card-4');
let video4 = document.getElementById('video-container-4');

let card5 = document.getElementById('video-card-5');
let video5 = document.getElementById('video-container-5');

let card6 = document.getElementById('video-card-6');
let video6 = document.getElementById('video-container-6');

let card7 = document.getElementById('video-card-7');
let video7 = document.getElementById('video-container-7');

let card8 = document.getElementById('video-card-8');
let video8 = document.getElementById('video-container-8');

let card9 = document.getElementById('video-card-9');
let video9 = document.getElementById('video-container-9');

function onYouTubePlayerAPIReady() {
  player1 = new YT.Player('video1', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player2 = new YT.Player('video2', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player3 = new YT.Player('video3', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player4 = new YT.Player('video4', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player5 = new YT.Player('video5', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player6 = new YT.Player('video6', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player7 = new YT.Player('video7', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player8 = new YT.Player('video8', {
    events: {
      onReady: onPlayerReady,
    },
  });
  player9 = new YT.Player('video9', {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  let playButton1 = document.getElementById('play-button1');
  playButton1?.addEventListener('click', function () {
    card.classList.add('video-is-open');
    setTimeout(function () {
      video.style.display = 'block';
      player1.playVideo();
    }, 500);
  });

  let playButton2 = document.getElementById('play-button2');
  playButton2?.addEventListener('click', function () {
    card2.classList.add('video-is-open2');
    setTimeout(function () {
      video2.style.display = 'block';
      player2.playVideo();
    }, 500);
  });

  let playButton3 = document.getElementById('play-button3');
  playButton3?.addEventListener('click', function () {
    card3.classList.add('video-is-open3');
    setTimeout(function () {
      video3.style.display = 'block';
      player3.playVideo();
    }, 500);
  });

  let playButton4 = document.getElementById('play-button4');
  playButton4?.addEventListener('click', function () {
    card4.classList.add('video-is-open4');
    setTimeout(function () {
      video4.style.display = 'block';
      player4.playVideo();
    }, 500);
  });
  let playButton5 = document.getElementById('play-button5');
  playButton5?.addEventListener('click', function () {
    card5.classList.add('video-is-open5');
    setTimeout(function () {
      video5.style.display = 'block';
      player5.playVideo();
    }, 500);
  });
  let playButton6 = document.getElementById('play-button6');
  playButton6?.addEventListener('click', function () {
    card6.classList.add('video-is-open6');
    setTimeout(function () {
      video6.style.display = 'block';
      player6.playVideo();
    }, 500);
  });
  let playButton7 = document.getElementById('play-button7');
  playButton7?.addEventListener('click', function () {
    card7.classList.add('video-is-open7');
    setTimeout(function () {
      video7.style.display = 'block';
      player7.playVideo();
    }, 500);
  });
  let playButton8 = document.getElementById('play-button8');
  playButton8?.addEventListener('click', function () {
    card8.classList.add('video-is-open8');
    setTimeout(function () {
      video8.style.display = 'block';
      player8.playVideo();
    }, 500);
  });
  let playButton9 = document.getElementById('play-button9');
  playButton9?.addEventListener('click', function () {
    card9.classList.add('video-is-open9');
    setTimeout(function () {
      video9.style.display = 'block';
      player9.playVideo();
    }, 500);
  });
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = '//www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*
 * SLIDER
 */

const sliders = document.querySelectorAll('[data-slider]');

const sliderInit = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    '[data-slider-container]'
  );
  const sliderPrevBtn = currentSlider.querySelector('[data-slider-prev]');
  const sliderNextBtn = currentSlider.querySelector('[data-slider-next]');

  const totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue('--slider-item')
  );
  const totalSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSliderItems;
    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  };

  sliderNextBtn.addEventListener('click', slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSliderItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  };

  sliderPrevBtn.addEventListener('click', slidePrev);

  const dontHaveExtraItem = totalSliderItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.setAttribute('disabled', '');
    sliderPrevBtn.setAttribute('disabled', '');
  }

  /**
   * AUTO SLIDE
   */

  let autoSlideInterval;

  const startAutoSlide = () =>
    (autoSlideInterval = setInterval(slideNext, 3000));
  startAutoSlide();
  const stopAutoSlide = () => clearInterval(autoSlideInterval);

  currentSlider.addEventListener('mouseover', stopAutoSlide);

  currentSlider.addEventListener('mouseout', startAutoSlide);

  /**
   * RESPONSIVE
   */
};

for (let i = 0, len = sliders.length; i < len; i++) {
  sliderInit(sliders[i]);
}
