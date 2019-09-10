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
    // console.log(this.props.pending)
    return (
      <div>
      {this.props.pending ? <h1>pending...</h1> : '' }
      {this.props.pending ? console.log('loading') : ''}
      {this.props.items ? this.props.items.map((a, i) => <Link className="list-group-item list-group-item-action" key={i} onClick={() => (this.props.actions.fetchQuote(a))} to={`/currentQuote/${a}`} >{a}</Link>) : ''}
    </div>
    )
    
  }
}

const mapSateToProps = (state) => ({
  items: state.categories_items,
  pending: state.categories_pending,
  error: state.categories_error
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(Home)