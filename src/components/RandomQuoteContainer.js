import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import Category from './ui/Category';
import Container from '@material-ui/core/Container'


class RandQuoteContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchRandomQuote()
  }

  render() {
    const { item, pending, error } = this.props
    return (
      <Container maxWidth="md">
        <Category category={this.props.match.params.category} item={item} pending={pending} error={error} />
      </Container>
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
