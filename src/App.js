import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

class App extends Component {
  
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  handleAnswer = answerWasCorrect => {
    if(answerWasCorrect) {
      this.setState(currState => ({
      correctAnswer: currState.correctAnswer + 1,
      }));
    }
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		  <Game handleAnswer={this.handleAnswer} />
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
