import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
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
    backgroundColor: red[500],
  },
});

export default function Intro() {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}  align="center">
        <CardHeader
            title="꽃"
            subheader="김춘수"
        />
        <Divider />
        <CardContent>
            <Typography>
                내가 그의 이름을 불러주기 전에는<br/>
                그는 다만<br/>
                하나의 몸짓에 지나지 않았다.<br/>
                <br/>
                내가 그의 이름을 불러주었을 때,<br/>
                그는 나에게로 와서<br/>
                꽃이 되었다.<br/>
                <br/>
                내가 그의 이름을 불러준 것처럼<br/>
                나의 이 빛깔과 향기에 알맞는<br/>
                누가 나의 이름을 불러다오.<br/>
                <br/>
                그에게로 가서 나도<br/>
                그의 꽃이 되고 싶다.<br/>
                <br/>
                우리들은 모두<br/>
                무엇이 되고 싶다.<br/>
                너는 나에게 나는 너에게<br/>
                잊혀지지 않는 하나의 눈짓이 되고 싶다.<br/>
            </Typography>
        </CardContent>
    </Card>
  );
}