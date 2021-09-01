import React from 'react'; 
import HornedBeasts from './HornedBeasts';

// class component 

export default class Main extends React.Component { 
  // render *method* 
  render() { 
          // return whatever you want to render 
    return ( 
      <div>
     <HornedBeasts title = "One Horn" imageURL = "image" description = "This is a one horned beast.  Beware!" />
     <HornedBeasts title = "Three Horn" imageURL = "image" description = "This is a three horned beast.  Hear me roar" />
     </div>
    ) 
  } 
} 