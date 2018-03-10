import React from 'react';
import { Link, IndexLink } from 'react-router';
import { localize } from 'react-localize-redux';

const menuStyle = {
    display: "inline-block"
};


const NavigationMenu = ({translate}) => {
    return (
        <div style={menuStyle} >
            <IndexLink to="projects">
                {translate('navigation.projects')}
            </IndexLink>
                {'/'}
            <Link to="about">
                {translate('navigation.about')}
            </Link>
                {'/'}
            <Link to="contactMe">
                {translate('navigation.contactMe')}
            </Link>
        </div>
    );
};

export default localize(NavigationMenu, 'localeReducer');