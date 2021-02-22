import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: theme.spacing(17),
    height: theme.spacing(17),
    margin: 20,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card elevation={3} align="center" id="About">
        <CardHeader
            title={
                <Fragment>
                    <Avatar src="https://placeimg.com/128/128/any" className={classes.avatar}/>
                    <Typography variant="h5">
                        윤효전
                    </Typography>
                </Fragment>
            }
            subheader={
              <Fragment>
                <Typography variant="h6" color="textSecondary">
                    full-stack developer
                </Typography>
              </Fragment>
            }
        />
        <Divider />
        <CardContent>
            안녕하세요. 주니어 풀스택 개발자 윤효전 입니다.
        </CardContent>
    </Card>
  );
}