import React from 'react'; 
import { CardColumns } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';
// import beastData from '../data/data.json';


// class component 
class Main extends React.Component { 
  
    render() { 
      let beasts = this.props.beasts;
      console.log(beasts);

      return ( 
      <CardColumns>
        
        {beasts.map ((beast, i) => (
          <HornedBeasts
          key = {i}
          beastIndex = {i}
          displayModalForIndex = {this.props.handleSelectBeast}
          title = {beast.title}
          imageURL = {beast.image_url}
          description = {beast.description}
          />

      ))}
     </CardColumns>
    ) 
  } 
} 

export default Main;