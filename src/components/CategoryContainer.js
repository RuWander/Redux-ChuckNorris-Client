import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import Category from './ui/Category';
import Container from '@material-ui/core/Container'
import { withRouter } from "react-router";

const CategoryContainer = (props) => {
  const routeCategory = props.match.params.category
  const { item, pending, error } = props

  useEffect(() => {
    props.actions.fetchQuote(routeCategory)
  }, [routeCategory])

  return (
    <Container maxWidth="md">
      <Category category={routeCategory} item={item} pending={pending} error={error} />
    </Container>
  )

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
