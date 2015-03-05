$(function () {
  'use strict';

  $('.catalog').on('click', function (e) {
    $(this).find(e.target).toggleClass('open');
  });
});