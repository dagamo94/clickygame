import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/TItle';
import Card from './components/Card/Card'
import cards from "./cards.json";
import './App.css';

let shuffledArr = [];

class App extends Component {

  state = {
    cards,
    selectedCards: [],
    score: 0,
    highestScore: 0
  }

  componentDidMount(){
    shuffledArr = this.shuffleCards(this.state.cards);
    console.log(shuffledArr);
  }

  shuffleCards = arr => {
    const shuffled = arr.sort(() => Math.random() - 0.5);
    return shuffled;
  }

  selectedCard = id => {
    console.log(id);
    const selectedArr = this.state.selectedCards;
    shuffledArr = this.shuffleCards(this.state.cards);
      console.log("click");
      if (selectedArr.includes(id)) {
        this.setState({
          selectedCards: [],
          highestScore: this.state.highestScore > this.state.score ? this.state.highestScore : this.state.score,
          score: 0,
        })
      } else {
        this.state.selectedCards.push(id);
        this.setState({
          score: this.state.selectedCards.length,
        })
      }
  }

  render() {
    return (
      <>
        <NavBar>
         <div type="clicky"> Clicky Memory Game </div>
        <h3 className="float-right mt-60 score">Score: {this.state.score} | Highest Score: {this.state.highestScore}</h3>
        </NavBar>
        <Title>
          <h1 className="display-4">Clicky Memory Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on a any more than once!</p>
        </Title>
        {this.shuffleCards(this.state.cards).map(card => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            clicked={this.selectedCard}
          />
        ))}
      </>
    );
  }
}

export default App;
