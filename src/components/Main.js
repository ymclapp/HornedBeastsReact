import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';
// import beastData from '../data/data.json';


// class component 
class Main extends React.Component { 
  
    render() { 
      let beasts = this.props.beasts;
      console.log(beasts);

      //need to figure out issue here with row and container - watch video
      return ( 
      <Container>
        <Row>
        {beasts.map ((beast, i) => (
          <Col>
          <HornedBeasts
          key = {i}
          beastIndex = {i}
          displayModalForIndex = {this.props.handleSelectBeast}
          title = {beast.title}
          imageURL = {beast.image_url}
          description = {beast.description}
          />
          </Col>

      ))}
          </Row>
        </Container>
    ) 
  } 
} 

export default Main;