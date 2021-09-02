import React from 'react'; 
import Card from 'react-bootstrap/Card';

// class component 
class HornedBeasts extends React.Component { 
  constructor (props) {
    super (props);

    this.state = {
      favorites: 0;
    };
  }

 handleCardClick = () => {
   let currentFavorites = this. state.favorites;
   this.setState({favorites: currentFavorites +1});
 }


  // render *method* 
  render() { 
  
    // return whatever you want to render 
    console.log(this.props);
      return (
        <div id = "hornedBeasts">
        <strong>
          {this.props.title}
          {this.props.imageURL} {this.props.alt}
         <p> {this.props.description} </p>
          </strong>  
        </div>
      ) 
     
    // return ( 
    //   <div id = "hornedBeasts">
    //     <h2>Horned Beasts</h2>
    //     <div>
        
    //     </div>

    //   </div> 
    // ) 
  } 
} 

export default HornedBeasts;