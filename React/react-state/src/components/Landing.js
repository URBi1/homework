import React from 'react';

function Landing(props) {
  return (
    <div>
      Welcome, {props.user}!
      The hottest item is {props.hottestItem.item} at ${props.hottestItem.price}
    </div>
  );
}

export default Landing;
