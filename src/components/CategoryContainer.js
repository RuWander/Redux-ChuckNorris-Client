import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';


class CategoryContainer extends Component {

  componentDidMount() {
    // this.props.actions.fetchQuote(this.props.match.params.category)
    // this.props.actions.fetchRandomQuote()
    this.props.actions.fetchSearchQuote('food')
  }
  
  render() {
    const {item, pending, error} = this.props
    return (
      <div>
        <h1>{pending ? <h1>Loading...</h1>: ''}</h1>
        <h1>{error ? <h1>Sorry but some kind of error occurred, maybe try again later..</h1>: ''}</h1>
        <img src={item.icon_url} alt={"Chuck Norris quote for category " + item.categories}/>
        <p>{item.value}</p>
        <p>{item.categories}</p>
        <p>{item.created_at}</p>
      </div>
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

export default connect(mapSateToProps, mapDispatchToProps)(CategoryContainer)
