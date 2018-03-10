import React, { PropTypes } from 'react';
import { selectProject } from '../../actions/ProjectActions';
const connect = require('react-redux').connect;


class ProjectList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleWorkClick = this.handleWorkClick.bind(this);
    }

    handleWorkClick(event, workItem) {
        this.props.dispatch(selectProject(workItem));
    }
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div>
                    {this.props.projects.map(work =>
                        <div key={work.id} onClick={(e) => this.handleWorkClick(e, work)}>
                            <img src={work.path} width='100' />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
//TODO: Depricated -> switch to something else
ProjectList.defaultProps = {
    projects: []
}

export default connect()(ProjectList);