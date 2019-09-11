import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  progress: {
    // margin: theme.spacing(2),
    margin: 'auto'
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Category = ({ category, item, pending, error }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <img src={item.icon_url} alt={item.icon_url} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chuck Norris on.."
        subheader={category}
      />
      <CardContent>
        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">

          <Grid item>
            {pending ? <CircularProgress className={classes.progress} /> : ''}
          </Grid>

        </Grid>

        <Typography variant="h5" color="textSecondary" component="p">
          {item.value}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography>
                <span>Updated at: </span><Moment format="DD MMM YYYY">{item.update_at}</Moment>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <span>Created at: </span><Moment format="DD MMM YYYY">{item.update_at}</Moment>
              </Typography>

            </Grid>

          </Grid>
          <Button variant="outlined" href={item.url} className={classes.button}>
            Go to Source
          </Button>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Category