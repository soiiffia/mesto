let editButton = document.querySelector('.profile__button_edit');
let closeButton = document.querySelector('.popup__close-button');
let popupSection = document.querySelector('.popup');
let jobSubtitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');

editButton.addEventListener('click', function {
  popupSection.classList.add('popup__opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeButton.addEventListener('click', function {});

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 

function popupClose() {
  popupSection.classList.remove('popup__opened');
};

--------------------------------

const popupElement = document.querySelector('.popup');
const popupProfileButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileElement = document.querySelector('.profile__profile-info');
const nameVar = profileElement.querySelector('.profile__name');
const jobVar = profileElement.querySelector('.profile__status');
let popupProName = popupElement.querySelector('.popup__input_text_name');
let popupProJob = popupElement.querySelector('.popup__input_text_job');
const formElementSubmit = popupElement.querySelector('.popup__form');

//открытие окна
const showPopup = function () {
  popupProName.value = nameVar.textContent;
  popupProJob.value = jobVar.textContent;
  popupElement.classList.add('popup_opened');
};
// закрытие окна
const hidePopup = function () { popupElement.classList.remove('popup_opened'); };

function handleFormSubmit(event) {
  event.preventDefault();
  nameVar.textContent = popupProName.value;
  jobVar.textContent = popupProJob.value;
  hidePopup();
}

popupProfileButtonElement.addEventListener('click', showPopup);
popupCloseButtonElement.addEventListener('click', hidePopup);

// отправка формы
formElementSubmit.addEventListener('submit', handleFormSubmit);

------

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

const cardTemplate = document.querySelector('.card');
const cardGrid = document.querySelector('.elements');
const newCardPopup = document.querySelector('.addnewcard');
const newCardButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('.addnewcard__close');
const newCardForm = document.querySelector('.addnewcard__form');
const nameInput = newCardForm.querySelector('.addnewcard__input_text_name');
const linkInput = newCardForm.querySelector('.addnewcard__input_text_link');

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content
    .querySelector('.elements__element')
    .cloneNode(true);

  const cardName = cardElement.querySelector('.elements__tag');
  const cardPhoto = cardElement.querySelector('.elements__photo');

  cardName.textContent = cardData.name;
  cardPhoto.src = cardData.link;
  cardPhoto.alt = cardData.name;

  const deleteCardButton = cardElement.querySelector('.card__delete-button_type_delete');
  const likeCardButton = cardElement.querySelector('.elements__like_type_like');

  handleDelete = () => {
    cardElement.remove();
  };

  handleLike = () => {
    likeCardButton.classList.toggle('elements__like_active');
  };

  deleteCardButton.addEventListener('click', handleDelete);
  likeCardButton.addEventListener('click', handleLike);

  return cardElement;
};

const addCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  addCardElement(createCardElement(card));
});

const openPopup = (newCardPopup) => {
  newCardPopup.classList.add('addnewcard_open');
};

const closePopup = (newCardPopup) => {
  newCardPopup.classList.remove('addnewcard_open');
};

newCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
});

closeCardButton.addEventListener('click', () => {
  closePopup(newCardPopup);
});

const handleNewCardSubmit = (event) => {
  event.preventDefault();

  let name = nameInput.value;
  let link = linkInput.value;

  const newCardData = {
    name, link
  };

  addCardElement(createCardElement(newCardData));
  closePopup(newCardPopup);
  newCardForm.reset();
};

newCardForm.addEventListener('submit', handleNewCardSubmit);