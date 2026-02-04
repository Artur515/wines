import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/Application';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/wines">
        <Application />
      </BrowserRouter>
    </div>
  );
}

export default App;
