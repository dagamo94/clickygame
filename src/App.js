import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/TItle';
import Card from './components/Card/Card'
import cards from "./cards.json";
import './App.css';


class App extends Component {
  state = {
    cards,
    selectedCards: [],
    score: 0,
    highestScore: 0
  }

  shuffleCards = () => {

  }

  selectedCard = id => {
    console.log(id);
    const selectedArr = this.state.selectedCards;
    // this.shuffleCards();
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
        {this.state.cards.map(friend => (
          <Card
            key={friend.id}
            id={friend.id}
            image={friend.image}
            clicked={this.selectedCard}
          />
        ))}
      </>
    );
  }
}

export default App;
