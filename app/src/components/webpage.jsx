import React from 'react';

class Webpage extends React.Component {

    constructor(props){
      super(props);
      this.props = props;
    }

    componentDidMount(){
    }

    render() {
        let project = this.props.project;
        return (
            <div className='project'>
                <div className='project_description'>
                    <h2>{ project.title } </h2>
                    <div dangerouslySetInnerHTML={{__html:project.description}} />
                    <a className='button' target='_blank' href={ project.url }>{ project.title }</a>
                </div>
                <div className='project_image' style={{'backgroundImage': `url(${project.image})`}} />
            </div>

        );
    }

}

export default Webpage;
