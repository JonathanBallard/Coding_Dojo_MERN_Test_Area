
import React from 'react';
import './NavBar.css';
import NavItem from './NavItem/NavItem';

let NavBar = props => {

    let listIdeas = [];
    let listModules = [];

    let listNavItemIdeas = [];
    let listNavItemModules = [];

    let createNavItem = (name, route, isIdeaBool) => {
        return (
            <NavItem navName={ name } isIdea={ isIdeaBool } navRoute={ route }></NavItem>
        )
    }

    let deleteNav = (name, isIdeaBool) => {
        if(isIdeaBool){
            //locate correct idea for deletion
        }
    }


    // create array of all Idea NavItem
    for(let i = 0; i < listIdeas.length; i++){
        listNavItemIdeas.push(createNavItem(listIdeas[i].name, listIdeas[i].route, listIdeas[i].isIdeaBool));
    }

    // create array of all Module NavItem
    for(let i = 0; i < listModules.length; i++){
        listNavItemModules.push(createNavItem(listModules[i].name, listIdeas[i].route, listIdeas[i].isIdeaBool));
    }


    // When link/name passed back here from create Idea/Module then createNav
    // When same link/name passed back, then deleteNav



    return (
        <div className='NavBar'>
            <NavItem navName='Test'></NavItem>
        </div>
    )
}

export default NavBar;

