import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div id="outer-container" >
                {this.props.children}
            </div>
        );
    }
}

export default App;