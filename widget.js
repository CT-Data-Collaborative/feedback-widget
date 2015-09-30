'use strict';

/* global window, document, require */

var $ = require('jquery');
  
var template = '<form>'
  +  '<label for="feedback-happy-button" >How do you feel?</label>'
  +  '<button id="feedback-happy-button" value="happy">☺</button>'
  +  '<button id="feedback-sad-button" value="unhappy">☹</button>'
  +'</form>';
  
var css = {
  position : 'fixed',
  bottom : 0,
  right: 0
};

var $form = $(template).css(css);

$form.find('button').click(function(){
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

function sendFeedback(upvote){

  var data = {
    url: window.location.url,
    referer: document.referrer,
    upvote: value
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
