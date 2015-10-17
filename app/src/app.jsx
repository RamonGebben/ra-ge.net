import React from 'react';
import Editor from './components/editor';
import Preview from './components/preview';

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
    }

    onChange(value){
        this.setState({code: value});
    }

    render() {
        return (
            <div id='App'>
                <Preview code={this.state.code} />
                <Editor onChange={this.onChange.bind(this)} code={this.state.code} />
            </div>
        );
    }

}

export default App;
