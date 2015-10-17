import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/theme/chaos';

class Editor extends React.Component {

    constructor(props){
      super(props);
      this.props = props;
    }

    componentDidMount(){
    }

    render() {
        return (
            <div id='editor'>
            <AceEditor
                mode='html'
                theme='chaos'
                onChange={this.props.onChange}
                name='ace_editor'
                value={this.props.code}
                editorProps={{$blockScrolling: true}} />
            </div>
        );
    }

}

export default Editor;
