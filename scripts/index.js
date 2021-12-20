const header = document.querySelector(".header");
const openPopupHeaderBtn = header.querySelector(".button"); // Находим кнопку в шапке
const footer = document.querySelector(".footer");
const openPopupFooterBtn = footer.querySelector(".button"); // Находи кнопку в подвале
const popup = document.querySelector(".popup"); // Находим попап
const formUserInfo = popup.querySelector(".popup__form"); // Находим форму

// Функция открытия попапа
function openPopup() {
  popup.classList.add("popup_opened");
}

// Функция закрытия попапа
function closePopup() {
  popup.classList.remove("popup_opened");
}

function submitPopup(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

  formUserInfo.reset();
  closePopup();
}

// Слушатели кнопок
openPopupHeaderBtn.addEventListener("click", openPopup);
openPopupFooterBtn.addEventListener("click", openPopup);

formUserInfo.addEventListener("submit", submitPopup);
