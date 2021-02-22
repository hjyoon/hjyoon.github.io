import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BackToTop from './BackToTop';

const useStyles = makeStyles((theme) => ({
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
          <HideOnScroll {...props}>
              <AppBar>
              <Toolbar>
                  <Button color="inherit" className={classes.title} href="#About">About</Button>
                  <Button color="inherit" className={classes.title} href="#Skills">Skills</Button>
                  <Button color="inherit" className={classes.title} href="#Projects">Projects</Button>
                  <Button color="inherit" className={classes.title} href="#Contact">Contact</Button>
              </Toolbar>
              </AppBar>
          </HideOnScroll>
          <Toolbar id="back-to-top-anchor" />
          <BackToTop />
        </Fragment>
    );
}