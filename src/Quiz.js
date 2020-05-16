import React, {Component} from 'react';
import logo from './AGH.svg';
import PropTypes from 'prop-types';
import {Button, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";

class Quiz extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#ebebeb'}}>
                <Navbar sticky="top" className="shadow-sm bg-white flex-md-row flex-column">
                    <Navbar.Brand>
                        <Image className="quiz-agh" src={logo}/>
                        Flags Project
                    </Navbar.Brand>
                    <Nav className="ml-md-auto flex-column flex-sm-row">
                    <span className="mx-2 mb-2 mb-sm-0" style={{
                        display: 'inline-flex',
                        alignItems: 'center'
                    }}>{this.props.question.text}</span>
                        <div><Button className="mx-2" variant="success">Yes</Button>
                            <Button className="mx-2" variant="danger">No</Button></div>
                    </Nav>
                </Navbar>
                <Container className="shadow mt-4">
                    <p className="pt-3 pl-1 mb-0 text-left font-italic">Found {this.props.countries.length} flags
                        matching the criteria.</p>
                    <Row>{
                        this.props.countries.map((item) =>
                            <Col xs={4} sm={3} md={2} className="p-4" key={item.code}>
                                <Image fluid className="shadow-sm" src={'flags/' + item.code + '.SVG'}/>
                            </Col>
                        )
                    }</Row>
                </Container>
                <div className="text-center mt-3">
                    <p className="font-weight-bold mb-0">Project Studio 1</p>
                    <p className="font-italic">Oskar Pawica & Maciej Kutyła</p>
                </div>
            </div>
        );
    }
}

Quiz.propTypes = {
    countries: PropTypes.array.isRequired,
    question: PropTypes.object.isRequired
};

export default Quiz;