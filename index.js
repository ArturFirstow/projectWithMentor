// const slider = document.querySelector('.slider');
// const cards = document.querySelectorAll('.card');


// for (const card of cards) {
// card.addEventListener('mouseenter', function() {
// card.style.marginRight = '200px';
// card.classList.add('animate');
// });

// card.addEventListener('mouseleave', function() {
// card.style.marginRight = '74px';
// card.classList.remove('animate');
// });
// }



// const offerPoints = document.querySelectorAll('.offer__points');

// offerPoints.forEach(point => {
//   point.addEventListener('mouseenter', function() {
//     const popUp = document.querySelector('.pop-up');
//     if (popUp) {
//       popUp.style.display = 'block';
//     }
//   });
//   point.addEventListener('mouseleave', function() {
//     const popUp = document.querySelector('.pop-up');
//     if (popUp) {
//       popUp.style.display = 'none';
//     }
//   });
// });


//

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

//   const slider = document.querySelector(".slider");
// const cards = document.querySelectorAll(".card");
// let currentIndex = 0;

// setInterval(function() {
//     currentIndex++;
//     if (currentIndex >= cards.length) {
//         currentIndex = 0;
//     }
//     slider.scrollLeft = cards[currentIndex].offsetLeft;
// }, 3000);

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


const currentSlide = document.querySelector(".current-slide");
const totalSlides = document.querySelector(".total-slides");
const cards = document.querySelectorAll(".card");

slider.addEventListener("scroll", function() {
  currentSlide.textContent = Math.round(slider.scrollLeft / slider.offsetWidth) + 1;
});

totalSlides.textContent = cards.length;