>>>>>>Header.js<<<<<<
import React from 'react';
import Containter from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return(
            <Container>
            <Navbar bg = "dark" variant="light">  <<--you can see it on the website for bootstrap in navbar too
            <Navbar.Brand>Gallery of Horns!</Navbar.Brand>
            </Navbar>
            </Container>
        )
    }
}

export default Header;




[This is missing some stuff.  Check the demo that Keith committed before Lab 03]
>>>>>>app.js<<<<<<
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App(){
    <Header />
    <Main />
    <Footer />
}




>>>>>>Footer.js<<<<<<

import React from 'react';
import Containter from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
    render() {
        return(
            <footer>
            <Navbar> 
            <Navebar.Brand>Author:  DV &copy; {new Date()}.g
            </Navbar>
            </footer>
        )
    }
}

export default Footer;


>>>>>>Main.js<<<<<<

import React from 'react';
import { CardColumns } from 'react-bootstrap';
import HornedBeasts './components/HornedBeasts';

class Main extends React.Component {
    render() {
        let beasts = this.props.beasts;
        console.log(beasts);

        return(
        <CardColumns>
        
        {beasts.map(beast => (
            <HornedBeasts:
            title = {beast.title}
            imageURL = {beast.image_url}
            description = {beast.description}
            />

        ))}
        </CardColumns>
        )
    }

    export default Main;



>>>>>>HornedBeasts.js<<<<<<

import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: 0;
        };
    }
//have to use an arrow function to get this to work 
    handleCardClick = () => {
        let currentFavorites = this.state.favorites;
        this.setState({favorites: currentFavorites +1});
    }
    render() {
        return(
            <Card>
            <Card.Body> 
                <Card.Img variant = "top" src = {this.props.imageURL} onClick = {this.handlCardClick}/>
                <Card.Title>{this.props.title}</Card.Title>
                <Cart.Text>❤️ ={this.state.favorites</Card.Text>}  <<--Googled heart emoji and there was a copy to use and paste here
                <Card.Text>{this.props.description}</Card.Title> 
            </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;



