import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import Category from './ui/Category';
import Container from '@material-ui/core/Container'
import { withRouter } from "react-router";

class CategoryContainer extends Component {
  state = {
    path: ''
  }

  componentDidMount() {
    this.props.actions.fetchQuote(this.props.match.params.category)
    this.setState({path: this.props.match.params.category})
  }

  
  
  render() {
    const {item, pending, error} = this.props

    if (this.props.match.params.category !== this.state.path && this.state.path !== '') {
      this.props.actions.fetchQuote(this.props.match.params.category)
      this.setState({path: this.props.match.params.category})
    }
    return (
      <Container maxWidth="md">
        <Category category={this.props.match.params.category} item={item} pending={pending} error={error} />
      </Container>
    )
  }
}

const mapSateToProps = (state) => ({
  item: state.current_quote.item,
  pending: state.current_quote.pending,
  error: state.current_quote.error
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(mapSateToProps, mapDispatchToProps)(CategoryContainer))
