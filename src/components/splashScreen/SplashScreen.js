import React from 'react';
import SplashScreenMenu from './SplashScreenMenu';

import { Link } from 'react-router';

const mainDivStyle = {
    backgroundImage: "url('assets/img/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "100%",
    position: "fixed"
};

const menu = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

class SplashScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div style={mainDivStyle}>
                <div style={menu}>
                    <SplashScreenMenu />
                </div>
            </div>
        );
    }
}


export default SplashScreen;