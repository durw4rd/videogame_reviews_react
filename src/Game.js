import React from 'react';
import jQuery from 'jquery';
import Review from './Review';

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      game: {}
    }
  }

  componentDidMount() {
    this.getGame();
  }

  getGame() {
    let component = this;
    let url = "https://murmuring-bastion-27564.herokuapp.com/categories/" + this.props.params.categoryId +"/games/" + this.props.params.gameId + ".json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.game
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.game.title}</h1>
        
        <Review gameId = {this.props.params.gameId} categoryId = {this.props.params.categoryId}/>
      </div>
    );
  }
}

export default Game;
