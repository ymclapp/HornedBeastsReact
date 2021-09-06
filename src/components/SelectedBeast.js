import React from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        const beast = this.props.beast;
        console.log('beast inside selected beast',beast);

        return (
            <Modal show={this.props.show}
                onHide={this.props.handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card
                        bg = "primary"
                        text = "light"
                        //you have no displayAsModal 
                        // onClick = {this.displayAsModal}
                        // onClick={this.handleSelectBeast}
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
        )
    }
}

export default SelectedBeast;