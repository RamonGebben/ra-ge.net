import React from 'react';

class Preview extends React.Component {

    constructor(props){
      super(props);
      this.props = props;
    }

    componentDidMount(){
    }

    render() {
        return (
            <div id='preview' dangerouslySetInnerHTML={{__html:this.props.code}}></div>
        );
    }

}

export default Preview;
