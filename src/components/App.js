import React from 'react';
import PropTypes from 'prop-types';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.node
};
export default App;