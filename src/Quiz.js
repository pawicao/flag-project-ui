import React, {Component} from 'react';
import logo from './AGH.svg';
import PropTypes from 'prop-types';
import {Button, Col, Container, Image, Nav, Navbar, OverlayTrigger, Row, Spinner, Tooltip} from "react-bootstrap";

class Quiz extends Component {

    render() {
        let countriesListContent, buttons;
        let countriesList = this.props.initial_countries.map((item) => {
            let equals = false;
            for (let i=0; i<this.props.countries.length; i++) {
                if (this.props.countries[i].code === item.code) {
                    equals = true;
                }
            }
            return (
                <Col xs={4} sm={3} md={2} className="p-4" key={item.code}>
                    <OverlayTrigger placement="top" overlay={<Tooltip id={item.code}>{item.name}</Tooltip>}>
                        <Image fluid className={equals ? 'shadow' : 'shadow opacited'} src={'flags/' + item.code + '.SVG'}
                        />
                    </OverlayTrigger>
                </Col>

            );
        });
        countriesListContent = (
            <React.Fragment>
                <p className="pt-3 pl-1 mb-0 text-left font-italic">Found {this.props.countries.length} flags
                    matching the criteria.</p>
                <Row style={{alignItems: "center", justifyContent: "center"}}>{countriesList}</Row>
            </React.Fragment>
        );

        if(this.props.question.id === 0) {
            buttons = (
              <div>
                  <Button className="mx-2" variant="warning" onClick={() => {this.props.resetQuiz()}}>Reset</Button>
              </div>
            );
        }
        else {
            if(this.props.isLoaded) {
                buttons = (
                    <div>
                        <Button className="mx-2" variant="success" onClick={() => {
                            this.props.processQuestion(true)
                        }}>Yes</Button>
                        <Button className="mx-2" variant="danger" onClick={() => {
                            this.props.processQuestion(false)
                        }}>No</Button>
                    </div>
                )
            }
            else {
                buttons = (
                    <div>
                        <React.Fragment>
                            <Spinner animation="grow" role="status" style={{marginTop: '0.2rem'}} />
                            <p>Please wait - we are analyzing the flags...</p>
                        </React.Fragment>
                    </div>
                );
            }
        }

        return (
            <div style={{backgroundColor: '#ebebeb'}}>
                <Navbar sticky="top" className="shadow-sm bg-white flex-md-row flex-column">
                    <Navbar.Brand onClick={() => window.location.reload()}>
                        <Image className="quiz-agh" src={logo}/>
                        Flags Argument Tree
                    </Navbar.Brand>
                    <Nav className="ml-md-auto flex-column flex-sm-row">
                        <span className={this.props.isLoaded ? "mx-2 mb-2 mb-sm-0" : "mx-2 mb-2 mb-sm-0 hidden"} style={{
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
    faulty_countries: PropTypes.array.isRequired,
    initial_countries: PropTypes.array.isRequired,
    truthy_countries: PropTypes.array.isRequired,
    question: PropTypes.object.isRequired,
    processQuestion: PropTypes.func.isRequired,
    resetQuiz: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired
};

export default Quiz;