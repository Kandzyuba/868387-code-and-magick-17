'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

setup.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Подготовка Моков для тестирования
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surnames = ['да Марья', 'Верон', 'Мираблелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Генерация массива объектов со случайными данными
var wizards = [{}];

var renderRandomInfo = function () {
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: names[Math.floor(Math.random() * ((names.length - 1) - 0 + 1))] + ' ' + surnames[Math.floor(Math.random() * ((surnames.length - 1) - 0 + 1))],
      coatColor: coatColors[Math.floor(Math.random() * ((coatColors.length - 1) - 0 + 1))],
      eyesColor: eyesColors[Math.floor(Math.random() * ((eyesColors.length - 1) - 0 + 1))]
    };
  }

  return wizards;
};

// Создание DOM элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Завполнение блока элементами
var appendWizard = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    renderRandomInfo();
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

appendWizard();
