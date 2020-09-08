import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/style.css';

import Comp from './components/comp/comp.jsx';

const container = document.getElementById('app');

ReactDom.render(
    <div>
        <Comp name="Darth Vader"/>
    </div>,
    container 
)


