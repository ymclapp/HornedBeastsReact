import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import longhorned from './longhorned.jpg';
import triceratops from './triceratops.jpg';

// class component 

export default class Main extends React.Component { 
  // render *method* 
  render() { 
          // return whatever you want to render 
    return ( 
      <div>
     <HornedBeasts 
     title = "Two Horn" 
     imageURL = {longhorned} alt = "Long Horned"
     description = "This is a two horned beast.  Beware!" />
     <HornedBeasts 
     title = "Three Horn" 
     imageURL = {triceratops} alt = "Triceratops" 
     description = "This is a three horned beast.  Hear me roar" />
     </div>
    ) 
  } 
} 