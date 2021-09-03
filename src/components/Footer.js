import React from 'react'; 
import Navbar from 'react-bootstrap/Navbar';

// class component 
class Footer extends React.Component { 
  // render *method* 
  render() { 
    // return whatever you want to render 
    return ( 
      <footer> 
        <Navbar bg = "primary" variant = {this.props.theme}>
          <Navbar.Brand>Author:  Yvette Clapp &copy; {new Date().getFullYear()}</Navbar.Brand>
        </Navbar>
      </footer> 
    ) 
  } 
}
 
export default Footer;