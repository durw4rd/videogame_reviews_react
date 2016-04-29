import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    this.getCategoryGames();
  }

  getCategoryGames() {
    let component = this;
    let url = "https://murmuring-bastion-27564.herokuapp.com/categories/" + this.props.params.categoryId + "/games.json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        category: data.category,
        games: data.games
      });
    });
  }

  render() {
    var categoryId = this.state.category.id;
    return (
      <div className="games">
        <ul>
        {this.state.games.map(function(game) {
          return(
            <li key={game.id}>
              <Link to={`/categories/${categoryId}/games/${game.id}`}>{game.title}</Link>
            </li>
          );
        })}
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default Games;
