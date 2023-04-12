let popupElement = document.querySelector('.popup');
let popupEditButtonElement = document.querySelector('.profile__edit-button');
let popupClosedButtonElement = popupElement.querySelector('.popup__closed');
let profileInfoElement = document.querySelector('.profile__info');
let nameInput = profileInfoElement.querySelector('.profile__title');
let jobInput = profileInfoElement.querySelector('.profile__subtitle');
let formInputName = popupElement.querySelector('.form__input_type_name');
let formInputJob = popupElement.querySelector('.form__input_type_job');
let formElementSubmit = popupElement.querySelector('.form__submit');

//открытие окна
let openPopup = function () {
  formInputName.value = nameInput.textContent;
  formInputJob.value = jobInput.textContent;
  popupElement.classList.add('popup__opened');
};
// закрытие окна
let closePopup = function () { popupElement.classList.close('popup__opened'); };

function handleFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = formInputName.value;
  jobInput.textContent = formInputJob.value;
  closePopup();
}

popupEditButtonElement.addEventListener('click', openPopup);
popupClosedButtonElement.addEventListener('click', closePopup);

// отправка формы
formElementSubmit.addEventListener('submit', handleFormSubmit);
