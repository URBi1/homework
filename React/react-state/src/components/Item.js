import React from 'react';

function Item(props) {
  let price = props.data.price;
  
  if (props.shouldDiscount) {
    price = price * (1 - props.data.discount);
  }

  return (
    <div>
      {props.data.item}: ${price.toFixed(2)}
    </div>
  );
}

export default Item;

