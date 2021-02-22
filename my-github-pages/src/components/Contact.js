import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({

}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Card elevation={3} align="center" id="Contact">
        <CardHeader
            title={
                <Fragment>
                    <Typography variant="h5">
                        CONTACT
                    </Typography>
                </Fragment>
            }
        />
        <Divider />
        <CardContent>
            <EmailIcon fontSize="large"/> <br/>
            <Typography><Link href="mailto:hjyoon314@gmail.com">hjyoon314@gmail.com</Link></Typography> <br/>
            <GitHubIcon fontSize="large"/> <br/>
            <Typography><Link href="https://github.com/hjyoon">https://github.com/hjyoon</Link></Typography>
        </CardContent>
    </Card>
  );
}