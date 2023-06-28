var val;
const but = $('#apply');
const inputField = $('#my-input');  // Cache the input field for better performance

but.click(function() {
    val = inputField.val();
    const aDynamicLi = `<li class='name'>${val}</li>`;
    const whereTo = $('#spsk');
    whereTo.append(aDynamicLi);
    inputField.val('');  // Clear the input field
});

$(document).on('click', '.name', function(){
  $(this).remove();
});

$(document).ready(function() {
  // Создайте два элемента div с классом 'box'
  const box1 = $('<div/>').addClass('box');
  const box2 = $('<div/>').addClass('box');

  // При наведении мыши на box1, box2 становится красным и наоборот
  box1.hover(
      function() { box2.css('background-color', 'red'); }, 
      function() { box2.css('background-color', '#8e44ad'); }
  );

  box2.hover(
      function() { box1.css('background-color', 'red'); }, 
      function() { box1.css('background-color', '#8e44ad'); }
  );

  // Добавьте оба элемента на страницу
  $('body').append(box1, box2);
});

