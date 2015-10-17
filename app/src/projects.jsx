import React from 'react';
import Webpage from './components/webpage'
import Tabs from './components/project-slider'

import data from '../projects/projects.js';

class App extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.projects = data;
        this.state = {
            currentProject: this.projects.web[0]
        };
    }

    componentDidMount(){
    }

    onSelect(project){
        console.log( project );
        this.setState({ currentProject: project });
    }

    render() {

        return (
            <div className='Projects'>
                <a href='/#/' className='back_button'>Back</a>
                <Tabs projects={ this.projects }
                               onSelect={ this.onSelect.bind(this) }
                               currentProject={ this.state.currentProject }/>
                <Webpage project={ this.state.currentProject } />
            </div>
        );
    }

}

export default App;
