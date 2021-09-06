import React from 'react'; 
import { Button,Col, Row, Container, Form } from 'react-bootstrap';
import HornedBeasts from './HornedBeasts';
// import beastData from '../data/data.json';


// class component 
class Main extends React.Component { 
  constructor (props) {
    super (props);

    this.state = {
      filteredBeasts: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let hornCount = parseInt(event.target.elements.hornCount.value);
    console.log(hornCount);

    this.filterBeasts(hornCount);
  }

  handleChange = event => {
    let hornCount = parseInt(event.target.value);
    console.log('this is the horn count ',hornCount);

    this.filterBeasts(hornCount);
  }

  filterBeasts = (hornCount) => {
    let filteredBeasts = this.props.beasts;
    console.log('this props beasts ', this.props.beasts);
    if (hornCount > 0) {
      filteredBeasts = filteredBeasts.filter(beast => beast.horns === hornCount);
    }

    this.setState({
      //filteredBeasts: filteredBeasts//can combine since the name/variable match
      filteredBeasts,
    });
  }
  
    render() { 
      let beasts = this.state.filteredBeasts;
      console.log('beasts inside the main. ', beasts);

      //need to figure out issue here with row and container - watch video
      return ( 
        <Container as = "main">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>How many horns?</Form.Label>
              <Form.Control as="select" name="hornCount" onChange={this.handleChange}>
                <option value = "0">All</option>
                <option value = "1">One</option>
                <option value = "2">Two</option>
                <option value = "3">Three</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Button type = "submit">Filter</Button>
            </Form.Group>
          </Form>  
            <Row>  
            {beasts.map ((beast, i) => (
              <Col>
              <HornedBeasts
                key={i}
                beastIndex={i}
                displayModalForIndex={this.props.handleSelectBeast}
                title={beast.title}
                imageURL={beast.image_url}
                description={beast.description}
          />
          </Col>
      ))}
          </Row>
     </Container>
    ) 
  } 
} 

export default Main;