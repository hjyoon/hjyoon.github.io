import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BackToTop from './BackToTop';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
    const classes = useStyles();
    return (
        <Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>hjyoon's home</Typography>
                {/* <Typography variant="h6" display="block"><Link href="#first" color="inherit">first</Link></Typography>
                <Typography variant="h6"><Link href="#second" color="inherit">second</Link></Typography>
                <Typography variant="h6"><Link href="#third" color="inherit">third</Link></Typography> */}
                <Button color="inherit" className={classes.title} href="#Profile">Profile</Button>
                <Button color="inherit" className={classes.title} href="#first">Skills</Button>
                <Button color="inherit" className={classes.title} href="#second">Projects</Button>
                <Button color="inherit" className={classes.title} href="#third">Contact</Button>
            </Toolbar>
            </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <BackToTop />
        </Fragment>
    );
}