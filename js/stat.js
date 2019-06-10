'use strict';

var fireballSize = 22;
var getFireballSpeed = function(left) {
  return (left) ? 5 : 2;
};

var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

var getWizardX = function (width) {
  return (width / 2) - wizardWidth / 2;
};

var getWizardY = function (height) {
  return (height / 3 * 2) - getWizardHeight() / 2;
};

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 50;
var histogramYbottom = CLOUD_Y + CLOUD_HEIGHT - GAP * 2;
var betweenColumn = 90;
var saturation = Math.floor(Math.random() * (100 - 0)) + 0 + '%';
var zonder = 50 + '%';
var randomColor = 'hsl(240, saturation, z)';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'black';
  ctx.font = '16px, PT Mono'; //проверить
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + GAP * 5 + betweenColumn * i, histogramYbottom);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP * 5 + betweenColumn * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4 -(BAR_HEIGHT * times[i]) / maxTime - 10);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = randomColor;
    }
    ctx.fillRect(CLOUD_X + betweenColumn * i + TEXT_WIDTH, CLOUD_Y + CLOUD_HEIGHT - GAP * 4, 40, -(BAR_HEIGHT * times[i]) / maxTime);

  }
};
