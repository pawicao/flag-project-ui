import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Quiz from "./Quiz";
import Header from "./Header"

class App extends Component {
    static API_URL = 'https://flag-project-api.herokuapp.com/';
    static ENDPOINT_START = 'start';
    static ENDPOINT_QUESTION = 'processQuestion';

    state = {
        question: null,
        countries: [],
        isLoaded: true
    };

    resetQuiz = () => {
        this.setState({
            isLoaded: false
        });
        axios.get(App.API_URL + App.ENDPOINT_START)
            .then(res => this.setState({
                countries: res.data.countries,
                question: res.data.question,
                isLoaded: true
            }))
            .catch(function (error) {
                console.log(error);
            });
    };

    processQuestion = (answer) => {
        this.setState({
            isLoaded: false
        });
        axios.post(App.API_URL + App.ENDPOINT_QUESTION, {
            countries: this.state.countries,
            question: this.state.question,
            answer: answer
        })
            .then(res => this.setState({
                countries: res.data.countries,
                question: res.data.question,
                isLoaded: true
            }))
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let content = this.state.question == null ? <Header start={this.resetQuiz}/>
            : <Quiz countries={this.state.countries} question={this.state.question}
                    processQuestion={this.processQuestion} resetQuiz={this.resetQuiz}
                    isLoaded={this.state.isLoaded} /> ;
        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
