import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from 'ui/routes';

import { Survey } from './ui/views/Survey';
import { SurveySended } from './ui/views/SurveySended';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route exact path={routes.ACCESS_POINT} component={Survey} />
            <Route exact path={routes.SURVEY_SENDED} component={SurveySended} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
