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

        if (!beast) {
            return null;
        }

        
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
            <Navebar.Brand>Author:  DV &copy; {new Date()}.g
            </Navbar>
            </footer>
        )
    }
}

export default Footer;


>>>>>>Main.js<<<<<<

import React from 'react';
import { CardColumns, Container, Form, Button } from 'react-bootstrap';
import HornedBeasts './components/HornedBeasts';
import data from './data/data.json';

class Main extends React.Component {
   constructor (props) {
        super(props)

        this.state = {
            filteredBeasts: [],  <<-start with no beasts

        };
   } 
   
   handleSubmit = (event) => {
       //prevent the page from reloading each time
       event.preventDefault();
       
       let hornCount = parseInt(event.target.hornCount.value)
        console.og(hornCount);

        this.filterBeasts(hornCount);
   }

   handleChange = event => {
       let hornCount = parseInt(event.target.value);
       console.log(hornCount);

       this.filterBeasts(hornCount);
   }
        filterBeasts = (hornCount) => {
            //start with our full list from props
            let filterBeasts = this.props.beasts;
        }
            this.setState({
                filteredBeasts:  this.props.beasts.filter(beast => {
                    if (hornCount === 0) {
                        return true;  <<--this will return all
                    }
                    return beast.horns===hornCount;
                })
            })
        }
   }
   
    render() {
        let beasts = this.state.filteredBeasts;
        console.log(beasts);

        return(
            <Container as = "main">
            <Form onSubmit = {this.handleSubmit}>
                <Form.Group>
                    <Form.Label>How many horns?</Form.Label>
                    <Form.Control as  = "select" name = "hornCount">
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
            </Form>
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
        </Container>
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
                <Cart.Text>❤️ ={this.state.favorites</Card.Text>}  <<--Googled heart emoji and there was a copy to use and paste here
                <Card.Text>{this.props.description}</Card.Title> 
            </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;



