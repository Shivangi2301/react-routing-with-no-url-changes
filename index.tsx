import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import LandingPage from './Main/LandingPage';
import { BrowserRouter as Router, browserHistory, } from "react-router-dom";
import createMemoryHistory from 'react-router'
import Routes from './Main/Routes';
import { MemoryRouter } from 'react-router'

const memoryHistory = createMemoryHistory;

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {

  render() {
    console.log(createMemoryHistory, MemoryRouter);
    return (
      <div>
        <LandingPage />
        <Routes />
      </div>
    );
  }
}

render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
  , document.getElementById('root'));
