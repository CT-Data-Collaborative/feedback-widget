'use strict';

/* global window, document, require */

var $ = require('jquery');

function init(target) {
  // script may be loaded from the <head>, so wait for the page to be fully parsed
  $(document).on('ready', function() {
    target = target || document.body;
    $form.appendTo(target);
  });
  var $form = $('<form>' +
    '<textarea name="comment"></textarea>' +
  '</form>').appendTo(target);
  $form.on('submit', function(e) {
    e.preventDefault();
    sendFeedback({
      comment: $form.find('[name=["comment"]').val()
    });
  });
}

function sendFeedback(data) {
  $.ajax({
    method: 'POST',
    url: '',
    data: $.extend({
      url: window.location.url,
      referer: document.referrer
    }, data)
  }).done(function(resp) {
    console.log('submitted feedback');
  }).fail(function() {
    console.log('error submitting feedback');
  });
}

window.FeedbackWidget = {
  init: init
};
