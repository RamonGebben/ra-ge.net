import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import Projects from './src/projects';
import { Router, Route, Link } from 'react-router'

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    ReactDOM.render( <Router>
                        <Route path="/" component={App}/>
                        <Route path="/projects" component={Projects} />
                    </Router>
    , shell);
}
