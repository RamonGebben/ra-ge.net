import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.jsx';

class Hello extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div>
            <h1>Hello</h1>
            <Editor />
        </div>
    );
  }
}

export default Hello;
