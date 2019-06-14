'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

setup.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Подготовка Моков для тестирования
var MOCK = {
  wizard: {
    name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surname: ['да Марья', 'Верон', 'Мираблелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  },
};

// Генерация массива объектов со случайными данными
var generateData = function () {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: MOCK.wizard.name[Math.floor(Math.random() * ((MOCK.wizard.name.length - 1) - 0 + 1))] + ' ' + MOCK.wizard.surname[Math.floor(Math.random() * ((MOCK.wizard.surname.length - 1) - 0 + 1))],
      coatColor: MOCK.wizard.coatColor[Math.floor(Math.random() * ((MOCK.wizard.coatColor.length - 1) - 0 + 1))],
      eyesColor: MOCK.wizard.eyesColor[Math.floor(Math.random() * ((MOCK.wizard.eyesColor.length - 1) - 0 + 1))]
    };
  }

  return wizards;
};

var data = generateData();

// Создание DOM элемента
var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Завполнение блока элементами
var appendWizard = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(createWizard(data[i]));
  }
  similarListElement.appendChild(fragment);
};

appendWizard();
