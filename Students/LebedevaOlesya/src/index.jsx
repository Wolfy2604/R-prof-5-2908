import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
    container,
 );