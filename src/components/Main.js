import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import data from '../data/data.json';


// class component 

export default class Main extends React.Component { 
  // render *method* 
  
          // return whatever you want to render 
    constructor(props) {
      super(props);

      //you don't have to have the console.log below, but it will show that data that you will be pulling from
      console.log(data);
      
      this.state = {
        title: data.title,
        imageURL: data.imageURL,
        description:  data.description,
      }
    }
    render() { 
      let hornedBeasts = data[0];
      return ( 
      <div>
        <ol>
          {
            this.state.
          }
     <HornedBeasts 
     title = {data.title} 
     imageURL = {longhorned} alt = "Long Horned"
     description = "This is a two horned beast.  Beware!" />
     <HornedBeasts 
     title = "Three Horn" 
     imageURL = {triceratops} alt = "Triceratops" 
     description = "This is a three horned beast.  Hear me roar" />
     </ol>
     </div>
    ) 
  } 
} 