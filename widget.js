'use strict';

/* global window, document, require */

var $ = require('jquery');
var template = require('html!./template.html');
require('web-design-standards/css/main.css');

var css = {
  'text-align': 'center',
  position: 'fixed',
  bottom: 0,
  right: 0
};

var $form = $(template).css(css);

$form.find('button[value]').click(function() {
  var value = $(this).val();
  sendFeedback(value);
});

function init(target) {

  // script may be loaded from the <head>, so wait for the page to be fully parsed
  $(document).on('ready', function() {
    target = target || document.body;
    $form.appendTo(target);
  });
}

function sendFeedback(upvote) {

  var data = {
    url: window.location.url,
    referer: document.referrer,
    upvote: upvote
  };

  $.ajax({
    method: 'POST',
    url: '',
    data: data
  }).done(function(resp) {
    console.log('submitted feedback');
  }).fail(function() {
    console.log('error submitting feedback');
  });
}

window.FeedbackWidget = {
  init: init
};
