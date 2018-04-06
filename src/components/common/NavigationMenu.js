import React from 'react';
import { Link, IndexLink } from 'react-router';
import { localize } from 'react-localize-redux';
import PropTypes from 'prop-types';

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

NavigationMenu.propTypes = {
    translate: PropTypes.func
};
export default localize(NavigationMenu, 'localeReducer');