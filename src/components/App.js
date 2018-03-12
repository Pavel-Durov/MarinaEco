import React, { PropTypes } from 'react';
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

export default App;