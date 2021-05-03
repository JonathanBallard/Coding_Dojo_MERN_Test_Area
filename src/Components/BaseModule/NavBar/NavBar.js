
import React, { useEffect, useState } from 'react';
import './NavBar.css';
import NavItem from './NavItem/NavItem';

let NavBar = props => {

    let listIdeas = [];
    let listModules = [];

    let listNavItemIdeas = [];
    let listNavItemModules = [];

    let createNavItem = (name, route, isIdeaBool, keyIn) => {
        return (
            <NavItem navName={ name } isIdea={ isIdeaBool } navRoute={ route } key={ keyIn }></NavItem>
        )
    }

    let deleteNav = (name, isIdeaBool) => {
        if(isIdeaBool){
            //locate correct idea for deletion
        }
    }


    // When link/name passed back here from create Idea/Module then createNav
    // When same link/name passed back, then deleteNav



    // Add in some test population
    listModules.push(
        {name:'TestModule1', route:'/testModule1', isIdeaBool:false}
    )
    listModules.push(
        {name:'TestModule2', route:'/testModule2', isIdeaBool:false}
    )
    listModules.push(
        {name:'TestModule3', route:'/testModule3', isIdeaBool:false}
    )
    listModules.push(
        {name:'TestModule4', route:'/testModule4', isIdeaBool:false}
    )

    listIdeas.push(
        {name:'TestIdea1', route:'/testModule1', isIdeaBool:true}
    )
    listIdeas.push(
        {name:'TestIdea2', route:'/testModule2', isIdeaBool:true}
    )
    listIdeas.push(
        {name:'TestIdea3', route:'/testModule3', isIdeaBool:true}
    )
    listIdeas.push(
        {name:'TestIdea4', route:'/testModule4', isIdeaBool:true}
    )
    
    
    let updateIdeas = () => {
        // create array of all Idea NavItem
        for(let i = 0; i < listIdeas.length; i++){
            listNavItemIdeas.push(createNavItem(listIdeas[i].name, listIdeas[i].route, listIdeas[i].isIdeaBool, i));
        }
    }
    
    let updateModules = () => {
        // create array of all Module NavItem
        for(let i = 0; i < listModules.length; i++){
            listNavItemModules.push(createNavItem(listModules[i].name, listModules[i].route, listModules[i].isIdeaBool, i));
        }
    }
    
    
    useEffect(() => {
        updateIdeas();
        updateModules();
    }, [listModules, listIdeas, updateIdeas(), updateModules()]);


    return (
        <div className='NavBar'>
            <ul className="nav nav-tabs">
                <NavItem navName='Test' navRoute='/test' isIdea='true'></NavItem>
                { listNavItemIdeas }
                { listNavItemModules }
                { props.children }
            </ul>
        </div>
    )
}

export default NavBar;

