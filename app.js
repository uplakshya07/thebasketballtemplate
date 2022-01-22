const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const mobileOverlay = getElement(".mobile-overlay");
const searchOverlay = getElement(".search-overlay");

const mobileMenu = getElement(".mobile-menu");
const closeMenu = getElement(".menu-close");
const menuBtn = getElement(".menu-btn");

const searchOption = document.querySelectorAll(".search-option");
const searchClose = getElement(".search-close");

menuBtn.addEventListener("click", () => {
  mobileOverlay.classList.add("active");
  mobileMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  mobileOverlay.classList.remove("active");
  mobileMenu.classList.remove("active");
});

searchOption.forEach((item) => {
  item.addEventListener("click", () => {
    searchOverlay.classList.add("active");
  });
});
searchClose.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});


let videoSrc = [
  'https://www.youtube-nocookie.com/embed/MJblFudSExU',
  'https://www.youtube-nocookie.com/embed/MJblFudSExU',
  'https://www.youtube-nocookie.com/embed/MJblFudSExU'
];
const videoOverlay = getElement(".video-overlay");
const closeVideo = getElement(".video-close");
const video = getElement(".video");
const playBtn = document.querySelectorAll(".play-btn");

function playVideo(vidNum) {
  video.innerHTML = `<iframe src=${videoSrc[vidNum-1]}></iframe>`;
};
playBtn.forEach((item) => {
  item.addEventListener("click", () => {
    videoOverlay.classList.add("active");
  });
});
closeVideo.addEventListener("click", () => {
  video.innerHTML = null;
  videoOverlay.classList.remove("active");
});



const dropdown = getElement(".dropdown");
const dropdownToggle = getElement(".dropdown-toggle");

dropdown.addEventListener("mouseover", mouseOver);
dropdown.addEventListener("mouseout", mouseOut);

function mouseOver() {
  dropdownToggle.style.color = "#e02529";
}

function mouseOut() {
  dropdownToggle.style.color = "#ffffff";
}

// Video slider
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

// const startSlide = () => {
//   slideId = setInterval(() => {
//   }, interval);
//   moveToNextSlide();
// };

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

// slideContainer.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// });

// slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

// startSlide();

const slideActive = (event) => {
  let el = event.target;
  el.classList.add("active");
};
const slideDeactive = (event) => {
  event.target.classList.remove("active");
};

document.querySelectorAll(".slide").forEach((item) => {
  item.addEventListener("mouseover", slideActive);
  item.addEventListener("mouseout", slideDeactive);
});

document.querySelectorAll(".play-btn").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.parentElement.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.parentElement.classList.remove("active");
  });
});
document.querySelectorAll(".video__title").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.parentElement.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.parentElement.classList.remove("active");
  });
});
