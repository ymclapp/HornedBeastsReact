import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// class component 
class Header extends React.Component { 

  // render *method* 
  render() { 
   
    // return whatever you want to render 
    return ( 
      <Container>
        <Navbar bg = "primary" variant = "light">
          <Navbar.Brand>Gallery of Horns!</Navbar.Brand>
        </Navbar>
      </Container>
     
    ) 
  } 
} 

export default Header;