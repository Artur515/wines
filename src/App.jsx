import './App.css';
import React from 'react';
import Application from "./application/Application";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <Application/>
        </BrowserRouter>
    );
};

export default App;