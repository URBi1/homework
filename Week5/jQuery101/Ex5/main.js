const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]

$(document).ready(function() {
  const basket = $('#basket');

  for (let i = 0; i < fruits.length; i++) {
     
      const fruitDiv = $(`<div class="${fruits[i].color}">${fruits[i].name}</div>`);


      basket.append(fruitDiv);
  }
});
