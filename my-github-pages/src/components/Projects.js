import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Card elevation={3} align="center" id="Projects">
        <CardHeader
            title={
                <Fragment>
                    <Typography variant="h5">
                        PROJECTS
                    </Typography>
                </Fragment>
            }
        />
        <Divider />
        <CardContent>
        </CardContent>
    </Card>
  );
}