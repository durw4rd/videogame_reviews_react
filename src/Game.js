import React from 'react';
import jQuery from 'jquery';

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
        {this.state.game.title}
      </div>
    );
  }
}

export default Game;
