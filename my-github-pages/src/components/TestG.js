import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    avatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: 20,
    },
}));

export default function TestG() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h5" align="center">SKILLS</Typography>
        <Grid container spacing={0}>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>C</Typography>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>C++</Typography>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>Java</Typography>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>Python</Typography>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>JavaScript</Typography>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card elevation={0} align="center">
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography>React.js</Typography>
                </Card>
            </Grid>
        </Grid>
    </div>
  );
}