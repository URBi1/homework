$('.item[data-instock="true"]').on('click', function() {
  // Получаем текст выбранного элемента
  const itemText = $(this).text();
  
  // Создаем новый элемент div с классом 'cart-item' и текстом из выбранного элемента
  const cartItem = $(`<div class="cart-item">${itemText}</div>`);

  // Добавляем новый элемент в #cart
  $('#cart').append(cartItem);
});
