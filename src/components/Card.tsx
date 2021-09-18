import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IPlayer } from '../interfaces/IPlayer';
import {testAttribute} from '../helpers/TestAttribute'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PlayerCard(player : IPlayer) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} {...testAttribute("card_root")} variant="outlined">
      <CardContent>
        <Typography className={classes.title}{...testAttribute("card_title")} color="textSecondary" gutterBottom>
         {player.name}
        </Typography>
        <Typography {...testAttribute("card_status")} variant="h5" component="h2">
        {player.status}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {player.priority}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}