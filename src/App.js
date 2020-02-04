import React from 'react';
import logo from './logo.svg';
import { Survey } from './ui/views/Survey';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Survey />
      </header>
    </div>
  );
}

export default App;
