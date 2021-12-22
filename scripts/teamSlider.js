const slider = document.querySelector(".team__slider");
const cards = slider.querySelector(".cards");
const cardElement = cards.querySelector(".cards__card");

const switchItemLeft = slider.querySelector(".slider__switch-item_left");
const switchItemCenter = slider.querySelector(".slider__switch-item_center");
const switchItemRight = slider.querySelector(".slider__switch-item_right");

// Функция обрабатывающая скролл
function switchItemScrollActive() {
  if (cards.scrollLeft === 0) {
    switchItemLeft.classList.add("slider__switch-item_active");
    switchItemCenter.classList.remove("slider__switch-item_active");
    switchItemRight.classList.remove("slider__switch-item_active");
  } else if (cards.scrollLeft === cardElement.offsetWidth) {
    switchItemLeft.classList.remove("slider__switch-item_active");
    switchItemCenter.classList.add("slider__switch-item_active");
    switchItemRight.classList.remove("slider__switch-item_active");
  } else if (cards.scrollLeft === cardElement.offsetWidth * 2) {
    switchItemLeft.classList.remove("slider__switch-item_active");
    switchItemCenter.classList.remove("slider__switch-item_active");
    switchItemRight.classList.add("slider__switch-item_active");
  }
}

// Функция обрабатывающая клик по переключателям
function switchItemClickActive(switchItem, scrollPos) {
  // Ниже "тушим" все переключатели, чтобы потом "зажечь" нужный
  switchItemLeft.classList.remove("slider__switch-item_active");
  switchItemCenter.classList.remove("slider__switch-item_active");
  switchItemRight.classList.remove("slider__switch-item_active");

  cards.scrollLeft = scrollPos; // Перемещаем сколл в положение выбранного переключателя
  switchItem.classList.add("slider__switch-item_active");
}

// Обработчки событий
cards.onscroll = switchItemScrollActive;

switchItemLeft.addEventListener("click", () => switchItemClickActive(switchItemLeft, 0));
switchItemCenter.addEventListener("click", () => switchItemClickActive(switchItemCenter, cardElement.offsetWidth));
switchItemRight.addEventListener("click", () => switchItemClickActive(switchItemRight, cardElement.offsetWidth * 2));
