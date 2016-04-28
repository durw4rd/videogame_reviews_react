import React from 'react';
import jQuery from 'jquery';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: {}
    }
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory() {
    let component = this;
    let url = "https://murmuring-bastion-27564.herokuapp.com/categories/" + this.props.params.categoryId + ".json";
    jQuery.getJSON(url, function(data) {
      component.setState({
        category: data.category
      });
    });
  }

  render() {
    return (
      <div className="category">
        <h1>{this.state.category.name}</h1>
        <ul>

        </ul>

      </div>
    );
  }
}

export default Category;
