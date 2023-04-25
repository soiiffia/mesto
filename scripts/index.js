const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// ред. профиля
const popupElement = document.querySelector('.popup');
const popupEditButtonElement = document.querySelector('.profile__edit-button');
const popupClosedButtonElement = popupElement.querySelector('.popup__closed');
const profileInfoElement = document.querySelector('.profile__info');
const nameInput = profileInfoElement.querySelector('.profile__title');
const jobInput = profileInfoElement.querySelector('.profile__subtitle');
const formInputName = popupElement.querySelector('.form__input_type_name');
const formInputJob = popupElement.querySelector('.form__input_type_job');
const formElementSubmit = popupElement.querySelector('.form');

// открытие окна
/*const openedPopup = function () {
  formInputName.value = nameInput.textContent;
  formInputJob.value = jobInput.textContent;
  popupElement.classList.add('popup_opened'); 
};
// закрытие окна

const removePopup = function () {
  popupElement.classList.remove('popup_opened');
}; */

/*function handleFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = formInputName.value;
  jobInput.textContent = formInputJob.value;
  removePopup();
}*/

const openedPopup = (popup) => { popup.classList.add('popup_opened'); };
const removePopup = (popup) => { popup.classList.remove('popup_opened'); };

//popupEditButtonElement.addEventListener('click', openedPopup);
//popupClosedButtonElement.addEventListener('click', removePopup);

popupEditButtonElement.addEventListener('click', () => {
  formInputName.value = nameInput.textContent;
  formInputJob.value = jobInput.textContent;
  openedPopup(popupElement);
});

popupClosedButtonElement.addEventListener('click', () => { removePopup(popupElement); });
// отправка формы
//formElementSubmit.addEventListener('submit', handleFormSubmit);

formElementSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  nameInput.textContent = formInputName.value;
  jobInput.textContent = formInputJob.value;
  removePopup(popupElement);
});

// добавление карточки
const newCardPopup = document.querySelector('.new-card');
const cardTemplate = document.querySelector('.card');
const cardGrid = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-button');
const closeCardButton = newCardPopup.querySelector('.popup__closed');
const newCardForm = newCardPopup.querySelector('.form');
const nameMestoInput = newCardForm.querySelector('.form__input_mesto_name');
const linkMestoInput = newCardForm.querySelector('.form__input_mesto_link');

// увеличение карточки 
const fullScreenPopup = document.querySelector('.fullscreen');
const closefullscreenPhotoButton = fullScreenPopup.querySelector('.popup__closed');
const fullScreenPhoto = fullScreenPopup.querySelector('.popup__fullscreen-photo');
const fullScreenTitle = fullScreenPopup.querySelector('.popup__fullscreen-title');

const createlementsElement = (cardContent) => {
  const elementsElement = cardTemplate.content
    .querySelector('.elements__element')
    .cloneNode(true);

  const cardTitle = elementsElement.querySelector('.elements__element-title');
  const cardPhoto = elementsElement.querySelector('.elements__element-pic');

  cardTitle.textContent = cardContent.name;
  cardPhoto.src = cardContent.link;
  cardPhoto.alt = cardContent.name;

  const deleteButton = elementsElement.querySelector('.elements__delete-button');
  const likeButton = elementsElement.querySelector('.elements__like');

  const deleteActive = () => {
    elementsElement.remove();
  };
  
  const likeActive = () => { 
    likeButton.classList.toggle('elements__like-active');
  };

  const photoActive = () => { 
    fullScreenPhoto.src = cardPhoto.src;
    fullScreenPhoto.alt = cardTitle.textContent;
    fullScreenTitle.textContent = cardTitle.textContent;
    openedPopup(fullScreenPopup);
  };

  deleteButton.addEventListener('click', deleteActive);
  likeButton.addEventListener('click', likeActive);
  cardPhoto.addEventListener('click', photoActive);

  return elementsElement;
};

const addelementsElement = (elementsElement) => {
  cardGrid.prepend(elementsElement);
};

initialCards.forEach((card) => {
  addelementsElement(createlementsElement(card));
});

addCardButton.addEventListener('click', () => { openedPopup(newCardPopup); });
closeCardButton.addEventListener('click', () => { removePopup(newCardPopup); });

const activeNewCardSubmit = (event) => {
  event.preventDefault();

  const name = nameMestoInput.value;
  const link = linkMestoInput.value;

  const newcardContent = {
    name, link
  };

  addelementsElement(createlementsElement(newcardContent));
  removePopup(newCardPopup);
  newCardForm.reset();
};

newCardForm.addEventListener('submit', activeNewCardSubmit);

closefullscreenPhotoButton.addEventListener('click', () => { removePopup(fullScreenPhoto); });

