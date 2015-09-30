'use strict';

/* global window, document */

window.FeedbackWidget = (function(window, $) {
  function init(target) {
    target = target || document.body;
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

  return {
    init: init,
    sendFeedback: sendFeedback
  };
})(window, $);
