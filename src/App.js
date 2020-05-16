import React, {Component} from 'react';
import logo from './AGH.svg';
import './App.css';
import axios from 'axios';
import {Image, Button, Row, Col, Container} from "react-bootstrap";
import Quiz from "./Quiz";
import Header from "./Header"

class App extends Component {
    state = {
        question: null,
        countries: []
    };

    resetQuiz =() => {
        let endpoint = 'https://flag-project-api.herokuapp.com/getAll';
        axios.get(endpoint).then(res => this.setState({
                countries: res.data,
                question: {
                    id: 1,
                    text: 'Does this flag have a red color?'
                }
            })
        );
    };

    render() {
        let content = this.state.question == null ? <Header start={this.resetQuiz}/> : <Quiz countries={this.state.countries} question={this.state.question} />;
        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
