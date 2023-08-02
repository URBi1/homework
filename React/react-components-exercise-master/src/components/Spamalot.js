import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    let spamArray = [];

  for(let i=0; i<500; i++){
    spamArray.push(<Spam />);
  }

  return spamArray;
}

export default Spamalot

