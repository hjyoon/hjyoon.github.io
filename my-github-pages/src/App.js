import './App.css';
import React, { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles"
import HideAppBar from './components/HideAppBar';
import TestD from './components/TestD';
import TestG from './components/TestG';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.success.main,
  },
}))

function App(props) {
  const classes = useStyles()
  return (
    <Container>
      <CssBaseline />
      <HideAppBar/>
      <TestG/>
      <br/>
      <About/>
      <br/>
      <Skills/>
      <br/>
      <Projects/>
      <br/>
      <Contact/>
      <br/>
      <Footer/>
    </Container>
  );
}

export default App;
