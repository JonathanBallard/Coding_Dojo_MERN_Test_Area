
import React from 'react';
import './NavBar.css';
import NavItem from './NavItem/NavItem';

let NavBar = props => {

    let listOfNavItems = [];

    let createNav = (name, route) => {
        return (
            <NavItem navName={ name } navRoute={ route }></NavItem>
        )
    }

    let deleteNav = () => {

    }

    // When link/name passed back here then createNav
    // When same link/name passed back, then deleteNav



    return (
        <div className='NavBar'>
            <NavItem navName='Test'></NavItem>
        </div>
    )
}

export default NavBar;

