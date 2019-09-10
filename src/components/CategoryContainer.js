import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';


class CategoryContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchQuote(this.props.match.params.category)
  }
  
  render() {
    return (
      <div>
        Category item should go here
        <img src={this.props.currentQuote.icon_url} alt={"Chuck Norris quote for category " + this.props.currentQuote.categories}/>
        <p>{this.props.currentQuote.value}</p>
        <p>Quote est {this.props.currentQuote.created_at}</p>
      </div>
    )
  }
}

const mapSateToProps = (state) => state

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(CategoryContainer)
