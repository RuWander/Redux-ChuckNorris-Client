import React, { Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import { Link } from "react-router-dom";


const CategoryList = ({items, pending, error}) => {
  return (
    <Fragment >
      {pending ? <LinearProgress style={{ marginTop: '20px', marginBottom: '20px' }} /> : ''}
      {items ?
        items.map((a, i) => (
          <Chip key={a} variant="outlined" color="primary" label={a} component={Link} to={`/currentQuote/${a}`} style={{ margin: '5px' }} />
        )
        ) : ''}
    </Fragment>
  )
}

export default CategoryList