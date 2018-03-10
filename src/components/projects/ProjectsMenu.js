import React, { PropTypes } from 'react';
import { selectProject } from '../../actions/ProjectActions';
const connect = require('react-redux').connect;

const styles = {
    project: {
        color: "red"
    },
    work: {
        color: "green"
    }
}


class ProjectsMenu extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleWorkClick = this.handleWorkClick.bind(this);
        props.projects = [];
    }

    handleWorkClick(event, workItem) {
        this.props.dispatch(selectProject(workItem));
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.projects.map(project =>
                        <div key={project.id}

                            onClick={(e) => this.handleWorkClick(e, project)}>
                            <div style={styles.project}>
                                <span>{project.name}</span>
                            </div>

                            {project.works.map(work =>
                                <div style={styles.work}>
                                    <span>
                                        {work.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default connect()(ProjectsMenu);