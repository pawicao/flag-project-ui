import React from 'react';
import logo from "./AGH.svg";
import {Button, Container, Row, Spinner} from "react-bootstrap";

function Header(props) {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Flags Argument Tree</h1>
                <h2 style={{fontWeight: "normal", fontSize: '1.45rem'}}>Project Studio 1</h2>
                <h3 style={{fontSize: '1.2rem', fontWeight: "normal", fontStyle: 'italic'}}>Oskar Pawica & Maciej
                    Kutyła</h3>
                <Container>
                    <Row className="p-2 mt-5">
                        {props.isLoaded ? (<Button variant="primary" className="m-auto" onClick={props.start}>Start</Button>) : (<Spinner animation="grow" role="status" className="mx-auto" />)}
                    </Row>
                    <Row className="p-2">
                        <a className="mx-auto" href="/~pawicao/flag_project/FlagsArgumentTree-documentation.pdf" target="_blank"><Button variant="success" className="m-auto">Documentation</Button></a>
                    </Row>
                </Container>
            </header>
        </React.Fragment>
    );
}

export default Header;