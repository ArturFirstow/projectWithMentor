

//плавный скролл до блоков

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
   
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
    }
  }
}


//  Валидация формы

const form = document.getElementById("form");
form.onsubmit = function() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (name.length < 3 || phone.length < 3 || message.length < 3) {
        alert("Введи больше символов, говна кусок");
        return false;
    }
    // Send the POST request to the URL "/" here
    return false;
  }

// стрелки слайдера

const sliderArrowLeft = document.querySelector(".slider-arrow-left");
const sliderArrowRight = document.querySelector(".slider-arrow-right");
const slider = document.querySelector(".slider");
const card = document.querySelector(".card");

sliderArrowLeft.addEventListener("click", function() {
if (slider.scrollLeft === 0) {
slider.scrollLeft = slider.scrollWidth - slider.offsetWidth;
} else {
slider.scrollLeft -= card.offsetWidth;
}
});

sliderArrowRight.addEventListener("click", function() {
if (slider.scrollLeft === slider.scrollWidth - slider.offsetWidth) {
slider.scrollLeft = 0;
} else {
slider.scrollLeft += card.offsetWidth;
}
});


// счетик слайдера(не работает)

const currentSlide = document.querySelector(".current-slide");
const totalSlides = document.querySelector(".total-slides");
const cards = document.querySelectorAll(".card");

slider.addEventListener("scroll", function() {
  currentSlide.textContent = Math.round(slider.scrollLeft / slider.offsetWidth) + 1;
});

totalSlides.textContent = cards.length;

const toggleThemeButton = document.querySelector("#toggle-theme-button");
const body = document.querySelector("body");

toggleThemeButton.addEventListener("click", function() {
  body.classList.toggle("dark-theme");
});

//всплывающая картинка с описанием
const offerPoints = document.querySelector('.offer__points');
const popUp = document.querySelector('.pop-up');

offerPoints.addEventListener('mouseover', () => {
  popUp.style.display = 'block';
});

offerPoints.addEventListener('mouseout', () => {
  popUp.style.display = 'none';
});