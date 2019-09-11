import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchQuoteCategories()
  }

  render() {
    return (
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" style={{marginBottom: '20px'}}>
          The Awe of Chuck Norris
        </Typography>
        {this.props.pending ? <LinearProgress style={{ marginTop: '20px', marginBottom: '20px' }} /> : ''}
        <Fragment>
          {this.props.items ?
            this.props.items.map((a, i) => (
                <Chip variant="outlined" color="primary" label={a} component={Link} to={`/currentQuote/${a}`} style={{margin:'5px'}} />
              )
            ) : ''}
        </Fragment>
      </Container>
    )

  }
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