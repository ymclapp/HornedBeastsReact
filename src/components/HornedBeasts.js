import React from 'react'; 
import Card from 'react-bootstrap/Card';

// class component 
class HornedBeasts extends React.Component { 
  constructor (props) {
    super (props);

    this.state = {
      favorites: 0,
    };
  }

 handleCardClick = () => {
   let currentFavorites = this.state.favorites;
   this.setState({favorites: currentFavorites +1});
 }

 showModal = () => {
   this.props.displayModalForIndex(this.props.beastIndex);
 }

  // render *method* 
  render() { 
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Img variant = "top" src = {this.props.imageURL} onClick = {this.handleCardClick} />
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ ={this.state.favorites}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
        </>
       
      ) 
      
  } 
} 

export default HornedBeasts;