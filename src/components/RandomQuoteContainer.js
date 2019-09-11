import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';


class RandQuoteContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchRandomQuote()
  }

  render() {
    const { item, pending, error } = this.props
    return (
      <Fragment>
        <h1>{pending ? <h1>Loading...</h1> : ''}</h1>
        <h1>{error ? <h1>Some error occurred</h1> : ''}</h1>
        <img src={item.icon_url} alt={"Chuck Norris quote for category " + item.categories} />
        <p>{item ? item.value : 'nothing here'}</p>
        <p>{item.categories}</p>
        <p>{item.created_at}</p>
      </Fragment>
    )
  }

}

const mapSateToProps = (state) => ({
  item: state.random_quote.item,
  pending: state.random_quote.pending,
  error: state.random_quote.error
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(RandQuoteContainer)
