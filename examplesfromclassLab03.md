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





>>>>>>app.js<<<<<<
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import beastData from './data/data.json';
import SelectedBeast from './components/SelectedBeast';

//converted from function compnent to a class component by calling the function 'render' and putting it in a class that extends Component
function App(){
    <Header />
    <Main />
    <Footer />
    <SelectedBeast />
}

//this is converting to a class component
class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            showModal: false, 
            selectedBeast: {},  <<--this is so that the page will load and know that nothing has been picked yet   
    };
}

handleClose = () => {
    this.setState({ showModal: false});
}

handleSelectBeast = () => {
    this.setState({
        selectedBeast: beastData[beastIndex],
        showModal: true,
    });
}

render () {
    let theme = 'dark';
    
    return (
        <div className = "App">
        <Header theme = {theme} />
        <Main 
            beasts = {beastData}
            handleSelectBeast = {this.props.handleSelectBest
         />
        <Footer theme = {theme />
        <SelectedBeast
            beast = {this.state.selectedBeast}
            show = {this.state.showModal}
            handleClose = {this.handleClose}
        />
    )
}


>>>>>>SelectedBeast.js<<<<<<
import React from 'react';
import { Button, Card, Modal } from 'bootstrap';


class SelectedBeast extends React.Component {
    render() {
        const beast = this.props.beast;
        console.log(beast)
        return(
            <Modal show = {this.props.show}
            onHide = {this.props.handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                    <Modal.Title>{beast.title}</Modal.Title>
                   </Modal.Header> 
                   <Modal.Body>
                   <Card
                   bg = "dark"
                   text = "light"
                    onClick = {this.displayAsModal}
                   >
                   <Card.Img variant = "top" alt = "" src = {beast.image_url} />
                   <Card.Body>
                    <Card.Title>{beast.title}</Card.Title>
                    <Card.Text>
                    {beast.description}
                    </Card.Text>
                    </Card.Body>
                    </Card>
                   </Modal.Body>

                   <Modal.Footer>
                    <Button onClick = {this.props.handleClose} variant = "secondary">Close</Button>
                   </Modal.Footer>
                </Modal.Dialog> 
                </Modal>


export default SelectedBeast;


>>>>>>Footer.js<<<<<<

import React from 'react';
import Containter from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
    render() {
        return(
            <footer>
            <Navbar> 
            <Navbar.Brand>Author:  DV &copy; {new Date()}.g
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
import data from './data/data.json';

class Main extends React.Component {
    render() {
        let beasts = this.props.beasts;
        console.log(beasts);

        return(
        <CardColumns>
        
        {beasts.map((beast,i) => (
            <HornedBeasts
            key = {i}
            beastIndex = {i}
            displayModalForIndex = {this.props.handSelectBeast}
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

    showModal = () => {
        this.props.displayModalForIndex(this.props.beastIndex);
    }

    render() {
        return(
            <Card>
            <Card.Body> 
                <Card.Img variant = "top" src = {this.props.imageURL} onClick = {this.handlCardClick}/>
                <Card.Title>{this.props.title}</Card.Title>
                <Cart.Text>❤️ ={this.state.favorites}</Card.Text>  <<--Googled heart emoji and there was a copy to use and paste here
                <Card.Text>{this.props.description}</Card.Title> 
            </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;



