import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import HideAppBar from './components/HideAppBar';

function App(props) {
  return (
    <Fragment>
      <HideAppBar/>
      <Container>
      <br/>
        <Paper elevation={3} id="first">
          <br/>
          <Typography variant="h5" align="center">꽃</Typography>
          <Typography align="center">김춘수</Typography>
          <br/>
          <Divider />
          <br/>
          <Typography align="center">내가 그의 이름을 불러주기 전에는</Typography>
          <Typography align="center">그는 다만</Typography>
          <Typography align="center">하나의 몸짓에 지나지 않았다.</Typography>
          <br/>
          <Typography align="center">내가 그의 이름을 불러주었을 때,</Typography>
          <Typography align="center">그는 나에게로 와서</Typography>
          <Typography align="center">꽃이 되었다.</Typography>
          <br/>
          <Typography align="center">내가 그의 이름을 불러준 것처럼</Typography>
          <Typography align="center">나의 이 빛깔과 향기에 알맞는</Typography>
          <Typography align="center">누가 나의 이름을 불러다오.</Typography>
          <br/>
          <Typography align="center">그에게로 가서 나도</Typography>
          <Typography align="center">그의 꽃이 되고 싶다.</Typography>
          <br/>
          <Typography align="center">우리들은 모두</Typography>
          <Typography align="center">무엇이 되고 싶다.</Typography>
          <Typography align="center">너는 나에게 나는 너에게</Typography>
          <Typography align="center">잊혀지지 않는 하나의 눈짓이 되고 싶다.</Typography>
          <br/>
        </Paper>
        <br/>
        <Paper elevation={3} id="second">
          <br/>
          <Typography variant="h5" align="center">깃발</Typography>
          <Typography align="center">유치환</Typography>
          <br/>
          <Divider />
          <br/>
          <Typography align="center">이것은 소리없는 아우성.</Typography>
          <Typography align="center">저 푸른 해원(海原)을 향하여 흔드는</Typography>
          <Typography align="center">영원한 노스탤지어의 손수건.</Typography>
          <Typography align="center">순정은 물결같이 바람에 나부끼고</Typography>
          <Typography align="center">오로지 맑고 곧은 이념의 푯대 끝에</Typography>
          <Typography align="center">애수(哀愁)는 백로처럼 날개를 펴다</Typography>
          <br/>
          <Typography align="center">아아 누구던가.</Typography>
          <Typography align="center">이렇게 슬프고도 애달픈 마음을</Typography>
          <Typography align="center">맨 처음 공중에 달 줄을 안 그는.</Typography>
          <br/>
        </Paper>
        <br/>
        <Paper elevation={3} id="third">
          <br/>
          <Typography variant="h5" align="center">너에게 나는</Typography>
          <Typography align="center">강재현</Typography>
          <br/>
          <Divider />
          <br/>
          <Typography align="center">너에게 나는</Typography>
          <Typography align="center">비오는 날 생각나는 사람이었으면 좋겠다</Typography>
          <Typography align="center">그 비 그칠 때까지 너의 외로움 옆에 조용히 앉아</Typography>
          <Typography align="center">따뜻한 물을 함께 끓여 마실</Typography>
          <Typography align="center">사람이었으면 좋겠다</Typography>
          <br/>
          <Typography align="center">너에게 나는</Typography>
          <Typography align="center">눈오는 날 생각나는 사람이었으면 좋겠다</Typography>
          <Typography align="center">그 눈 다 마를 때까지 너의 고독 옆에서 말없는</Typography>
          <Typography align="center">눈사람이 되어 서 있는</Typography>
          <Typography align="center">사람이었으면 좋겠다</Typography>
          <br/>
          <Typography align="center">너에게 나는</Typography>
          <Typography align="center">햇빛 찬란한 날 생각나는 사람이었으면 좋겠다</Typography>
          <Typography align="center">부신 햇살에 너의 가슴이 타면</Typography>
          <Typography align="center">그늘을 만들어 줄</Typography>
          <Typography align="center">사람이었으면 좋겠다</Typography>
          <br/>
        </Paper>
        <br/>
      </Container>
    </Fragment>
  );
}

export default App;
