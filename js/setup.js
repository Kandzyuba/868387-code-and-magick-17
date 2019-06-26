'use strict';

// Настройка образа персонажа
(function () {
  var setupWizard = window.setup.querySelector('.setup-wizard');

  var getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var coatName = window.setup.querySelector('input[name=coat-color]');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = MOCK.wizard.coatColor[getRandomInRange(0, MOCK.wizard.coatColor.length - 1)];
    coatName.value = wizardCoat.style.fill;
  });

  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var eyesName = window.setup.querySelector('input[name=eyes-color]');

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = MOCK.wizard.eyesColor[getRandomInRange(0, MOCK.wizard.eyesColor.length - 1)];
    eyesName.value = wizardEyes.style.fill;
  });

  var fireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fireballWrap = window.setup.querySelector('.setup-fireball-wrap');
  var fireballName = document.querySelector('input[name=fireball-color]');

  fireballWrap.addEventListener('click', function () {
    var colorFireball = fireball[getRandomInRange(0, fireball.length - 1)];
    fireballWrap.style.background = colorFireball;
    fireballName.value = colorFireball;
  });

  var similarListElement = window.setup.querySelector('.setup-similar-list');

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

  // Заполнение блока элементами
  var appendWizard = function () {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(createWizard(data[i]));
    }
    similarListElement.appendChild(fragment);
  };

  appendWizard();
})();
