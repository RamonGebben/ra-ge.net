import React from 'react';

class ProjectSliderItem extends React.Component {

    constructor(props){
      super(props);
      this.props = props;
    }

    componentDidMount(){
    }

    onClick(){
        this.props.onSelect( this.props.project );
    }

    render() {
        let project = this.props.project,
            selectedClass = this.props.selected ? 'selected' : '';
        return (
            <div className={`ProjectSliderItem ${ selectedClass }`}
                onClick={ this.onClick.bind(this) }
                style={{backgroundImage: `url(${ project.thumbnail })`}} />
        );
    }

}

export default ProjectSliderItem;
