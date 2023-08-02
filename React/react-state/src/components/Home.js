import React from 'react';
import Item from './Item';

function Home(props) {
  return (
    <div>
    {props.store.map((itemData, index) => 
      <Item key={index} data={itemData} shouldDiscount={props.shouldDiscount} />
    )}
  </div>
  );
}

export default Home;
