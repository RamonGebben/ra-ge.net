import React from 'react';
import ProjectSliderItem from './project-slider-item';

class ProjectSlider extends React.Component {

    constructor(props){
      super(props);
      this.props = props;
      this.state = {
          currentProject: this.props.currentProject
      }
    }

    componentDidMount(){
    }

    onItemSelect(project){
        this.props.onSelect(project);
        this.setState({currentProject: project });
    }

    render() {
        let webProjects = this.props.projects.web.map(project => {
            let selected = project.title === this.state.currentProject.title ? true : false;
            return(<ProjectSliderItem
                onSelect={ this.onItemSelect.bind(this) }
                project={project}
                selected={selected}/>)
        });
        return (
            <div className='ProjectSlider dragscroll'>
                { webProjects }
            </div>
        );
    }

}

export default ProjectSlider;
