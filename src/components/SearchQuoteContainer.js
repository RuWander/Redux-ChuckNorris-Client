import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';

import debounce from 'lodash/debounce';
import Moment from 'react-moment'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Badge from '@material-ui/core/Badge';



const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

const SearchQuoteContainer = ({ actions, items, pending, error }) => {
  const classes = useStyles();

  // const [searchQuote, { data, error, loading }] = useLazyQuery(SEARCH_QUOTE);


  const [searchString, setSearchString] = React.useState('');

  const searchQuote = (s) => {
    actions.fetchSearchQuote(s)
  }
  const handleChange = event => {
    setSearchString(event.target.value)
    if (searchString.length < 2) return
    debounceFunction()
  }

  const debounceFunction = debounce(() => {
    searchQuote(searchString);
  }, 100)

  if (error) {
    return (
      <div>
        <Fragment>
          <TextField
            id="outlined-with-placeholder"
            label="Just start typing here..."
            placeholder="Placeholder"
            margin="normal"
            variant="outlined"
            name="searchString"
            value={searchString}
            onChange={handleChange}
          />
        </Fragment>
        <h3>Some error occurred... Sorry about that, please try again soon</h3>
        <h5>{error.message}</h5>
      </div>
    )
  }

  if (pending) {
    return (
      <div>
        <Fragment>
          <TextField
            id="outlined-with-placeholder"
            label="Just start typing here..."
            placeholder="Placeholder"
            margin="normal"
            variant="outlined"
            name="searchString"
            value={searchString}
            onChange={handleChange}
          />
        </Fragment>
        <CircularProgress className={classes.progress} />
      </div>

    )
  }

  if (items) {
    return (
      <div>
        <Fragment>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={5}>
            <Grid item>
              <TextField
                id="outlined-with-placeholder"
                label="Just start typing here..."
                placeholder="Placeholder"
                margin="normal"
                variant="outlined"
                name="searchString"
                value={searchString}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              {items.length > 0 ? `We found:  ${items.length} results` : ''}
            </Grid>
          </Grid>



        </Fragment>
        <Grid container spacing={3}>
          {items.map(q => {
            return (
              <Grid key={q.id} item xs={12} sm={4} md={3}>
                <Card >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe">
                        <FormatQuoteIcon />
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">

                      </IconButton>
                    }
                    title="Chuck Said..."
                    subheader={<Moment format="YYYY-MM-DD">{q.updated_at}</Moment>}
                  />
                  <CardContent>
                    <Typography>
                      {q.value}
                    </Typography>
                  </CardContent>
                </Card>

              </Grid>
            )
          })}
        </Grid>

      </div>
    )
  }

  return (
    <div>
      <Fragment>
        <TextField
          id="outlined-with-placeholder"
          label="Just start typing here..."
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          name="searchString"
          value={searchString}
          onChange={handleChange}
        />
      </Fragment>
    </div>
  );
}

const mapSateToProps = (state) => ({
  items: state.search_quote.items,
  pending: state.search_quote.pending,
  error: state.search_quote.error
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapSateToProps, mapDispatchToProps)(SearchQuoteContainer)