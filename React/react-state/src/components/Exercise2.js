import React, { useState } from 'react';
import Home from './Home';
import Landing from './Landing';

function Exercise2() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  });

  const hottestItem = state.store.find(item => item.hottest === true);

  const switchPage = (page) => {
    setState(prevState => ({ ...prevState, currentPage: page }));
  }

return (
  <div>
    <button onClick={() => switchPage('Landing')}>Go to Landing</button>
    <button onClick={() => switchPage('Home')}>Go to Home</button>
    {state.currentPage === 'Landing' ? 
      <Landing user={state.user} hottestItem={hottestItem} /> : 
      <Home store={state.store} shouldDiscount={state.shouldDiscount} />
    }
  </div>
);
}

export default Exercise2;
