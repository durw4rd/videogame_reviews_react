import React from 'react';
import jQuery from 'jquery';

class Form extends React.Component{
  constructor(){
    super();
  }

  createReview(event){
    event.preventDefault();

    let newReview = {
      title: this.refs.title.value,
      review: this.refs.review.value
    };

    var app = this;

    jQuery.ajax({
      type: "POST",
      url: "https://murmuring-bastion-27564.herokuapp.com/categories/" + this.props.params.categoryId + "/games/" + this.props.params.gameId +".json",
      data: JSON.stringify({
        review: newReview
      }),
      contentType: "application/json",
      dataType: "json"

    }).done(function( data ) {
      app.props.onAddReview();
      alert( "Data saved: " + data );
    })
    .fail(function(error) {
      console.log(error);
    });
  }


  render() {
      return (
          <div>
            <form onSubmit={this.createReview.bind(this)}>
              <input type="text" className="form-control" ref="title" placeholder="Review title" />
              <textarea className="form-control" ref="review" placeholder="review content"></textarea>
              <button type="submit" className="btn btn-primary">Add review</button>
            </form>
          </div>
      );
  }
}

export default Form;
