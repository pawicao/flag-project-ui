import React, {Component} from 'react';
import logo from './AGH.svg';
import PropTypes from 'prop-types';
import {Button, Col, Container, Image, Nav, Navbar, Row, Spinner} from "react-bootstrap";

class Quiz extends Component {
    render() {
        let countriesListContent, buttons;
        if(this.props.isLoaded) {
            let countriesList = this.props.countries.map((item) =>
                <Col xs={4} sm={3} md={2} className="p-4" key={item.code}>
                    <Image fluid className="shadow" src={'flags/' + item.code + '.SVG'}/>
                </Col>
            );
            countriesListContent = (
                <React.Fragment>
                    <p className="pt-3 pl-1 mb-0 text-left font-italic">Found {this.props.countries.length} flags
                        matching the criteria.</p>
                    <Row style={{alignItems: "center", justifyContent: "center"}}>{countriesList}</Row>
                </React.Fragment>
            );
        }
        else {
            countriesListContent = (
                <React.Fragment>
                    <Spinner animation="grow" role="status" style={{marginTop:"1rem"}} />
                    <p style={{paddingBottom: "1rem"}}>Please wait - we are analyzing the flags...</p>
                </React.Fragment>
            );
        }
        if(this.props.question.id === 0) {
            buttons = (
              <div>
                  <Button className="mx-2" variant="warning" onClick={() => {this.props.resetQuiz()}}>Reset</Button>
              </div>
            );
        }
        else {
            buttons = (
                <div>
                    <Button disabled={!this.props.isLoaded} className="mx-2" variant="success" onClick={() => {
                        this.props.processQuestion(true)
                    }}>Yes</Button>
                    <Button disabled={!this.props.isLoaded} className="mx-2" variant="danger" onClick={() => {
                        this.props.processQuestion(false)
                    }}>No</Button>
                </div>
            );

        }

        return (
            <div style={{backgroundColor: '#ebebeb'}}>
                <Navbar sticky="top" className="shadow-sm bg-white flex-md-row flex-column">
                    <Navbar.Brand onClick={() => window.location.reload()}>
                        <Image className="quiz-agh" src={logo}/>
                        Flags Project
                    </Navbar.Brand>
                    <Nav className="ml-md-auto flex-column flex-sm-row">
                        <span className="mx-2 mb-2 mb-sm-0" style={{
                            display: 'inline-flex',
                            alignItems: 'center'
                        }}>
                            {this.props.question.content}
                        </span>
                        {buttons}
                    </Nav>
                </Navbar>
                <Container className="shadow mt-4">
                    {countriesListContent}
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
    question: PropTypes.object.isRequired,
    processQuestion: PropTypes.func.isRequired,
    resetQuiz: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired
};

export default Quiz;