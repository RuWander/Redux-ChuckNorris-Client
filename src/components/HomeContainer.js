import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CategoryList from './ui/CategoryList';
import SearchQuoteContainer from './SearchQuoteContainer';

const HomeContainer = (props) => {

  useEffect(() => {
    props.actions.fetchQuoteCategories()
  },[])
  
    return (
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" style={{ marginBottom: '20px' }}>
          The Awe of Chuck Norris <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="chucksface" />
        </Typography>
        <Typography variant="h5" component="p"  paragraph>
          Welcome to the Chuck Norris app.
          </Typography>
          <Typography component="h6">
          This is where you will find the best Chuck quotes
        </Typography>
        <Typography component="h6" style={{ marginBottom: '30px' }}>
          Choose a category an we will fetch you a unique quote
        </Typography>
        
        <CategoryList items={props.items} pending={props.pending} error={props.error} />

        <Typography variant="h2" component="h2" style={{ marginTop: '100px', marginBottom: '20px' }}>
          You can search for quotes
        </Typography>
        <Typography variant="h5" component="p" style={{ marginBottom: '20px' }}>
          Start typing to start chuckling...  ;-)
        </Typography>

        <SearchQuoteContainer />

      </Container>
    )

}

const mapSateToProps = (state) => ({
  items: state.categories.items,
  pending: state.categories.pending,
  error: state.categories.error
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(HomeContainer)