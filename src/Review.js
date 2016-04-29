import React from 'react';
import jQuery from 'jquery';
import Form from './Form';

class Review extends React.Component{
  constructor() {
    super();
    this.state = {
      review: {}
    };
  }

  retrieveReview(){
    let component = this;
    let url = "https://murmuring-bastion-27564.herokuapp.com/categories/" + this.props.categoryId + "/games/" + this.props.gameId +"/reviews/" + this.props.gameId +".json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        game: data.game,
        review: data.review
      });
    });
  }

  componentDidMount() {
    this.retrieveReview();
  }

  render(){
    return(
      <div className="review">
        <Form onAddReview={this.retrieveReview.bind(this)} />

        <h4>Title: {this.state.review.title}</h4>
        <h4>Review: {this.state.review.review}</h4>
      </div>
    );
  }
}

export default Review;
