const popupElement = document.querySelector('.popup');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupClosedButtonElement = popupElement.querySelector('.popup__closed');
const profileInfoElement = document.querySelector('.profile__info');
const nameInput = profileInfoElement.querySelector('.profile__title');
const jobInput = profileInfoElement.querySelector('.profile__subtitle');
const formInputName = popupElement.querySelector('.form__input_type_name');
const formInputJob = popupElement.querySelector('.form__input_type_job');
const formElementSubmit = popupElement.querySelector('.form');

//открытие окна
const openPopup = function () {
  formInputName.value = nameInput.textContent;
  formInputJob.value = jobInput.textContent;
  popupElement.classList.add('popup_opened');
};
// закрытие окна

const removePopup = function () {
  popupElement.classList.remove('popup_opened');
};

function handleFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = formInputName.value;
  jobInput.textContent = formInputJob.value;
  removePopup();
}

popupEditButtonElement.addEventListener('click', openPopup);
popupClosedButtonElement.addEventListener('click', removePopup);

// отправка формы
formElementSubmit.addEventListener('submit', handleFormSubmit);