import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/Application';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </div>
);

export default App;
