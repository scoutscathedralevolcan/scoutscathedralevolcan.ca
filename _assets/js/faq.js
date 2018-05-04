$('body').delegate('.faq-question', 'click', function(){
  $('.faq-question').removeClass('faq-question-active');
  $(this).addClass('faq-question-active');
});
