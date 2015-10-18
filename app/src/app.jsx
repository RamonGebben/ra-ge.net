import React from 'react';
import Editor from './components/editor';
import Preview from './components/preview';
import ga from 'react-google-analytics';

const GAInitiailizer = ga.Initializer;

import html from 'raw!../html/index.html';

class App extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            code: html
        }
    }

    componentDidMount(){
        ga('create', 'UA-43600864-1', 'auto');
        ga('send', 'pageview');
    }

    onChange(value){
        this.setState({code: value});
    }

    render() {
        return (
            <div id='App'>
                <GAInitiailizer />
                <Preview code={this.state.code} />
                <Editor onChange={this.onChange.bind(this)} code={this.state.code} />
            </div>
        );
    }

}

export default App;
