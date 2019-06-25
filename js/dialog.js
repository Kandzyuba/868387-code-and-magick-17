'use strict';

// Открытие/закрытие окна настройки персонажа
(function () {
  window.setup = document.querySelector('.setup');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var openSetup = document.querySelector('.setup-open');
  var closeSetup = window.setup.querySelector('.setup-close');

  var windowStart = function () {
    window.setup.style.top = '80px';
    window.setup.style.left = '50%';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    window.setup.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.classList.add('hidden');
    window.setup.querySelector('.setup-similar').classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  openSetup.addEventListener('click', function () {
    openPopup();
  });

  closeSetup.addEventListener('click', function () {
    closePopup();
    windowStart();
  });

  var openSetupImage = openSetup.querySelector('.setup-open-icon');
  var setupUserName = window.setup.querySelector('.setup-user-name');

  openSetupImage.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  closeSetup.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
      windowStart();
    }
  });

  // перемещение диалога
  var upload = window.setup.querySelector('.upload');

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragger = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragger = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
      window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragger) {
        // eslint-disable-next-line no-shadow
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
