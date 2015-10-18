import './stylesheets/main.css';
import React from 'react';
import App from './src/app';
import Projects from './src/projects';
import { Router, Route, Link } from 'react-router'

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    React.render( <Router>
                        <Route path="/" component={App}/>
                        <Route path="/projects" component={Projects} />
                    </Router>
    , shell);
}
