import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';


class Home extends Component {

  componentDidMount() {
    this.props.actions.fetchQuoteCategories()
  }
  
  render() {
    return (
      <div>
        {this.props.categories.map((a, i) => <Link className="list-group-item list-group-item-action" key={i} onClick={() => (this.props.actions.fetchQuote(a))} to={`/currentQuote/${a}`} >{a}</Link>)}
      </div>
    )
  }
}


const mapSateToProps = (state) => ({
  categories: state.categories,
  // currentQuote: state.currentQuote,
  // errors: state.errors
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(Home)