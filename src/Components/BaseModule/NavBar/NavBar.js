
import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
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

    let deleteNavItem = (name, isIdeaBool) => {
        if(isIdeaBool){
            //locate correct idea for deletion
        }
    }


    // When link/name passed back here from create Idea/Module then createNavItem
    // When same link/name passed back, then deleteNav
    // run navHandler on button, pass it down in props?


    let navHandler = (obj) => {
        if(obj.delete){
            deleteNavItem(obj.name, obj.ideaBool);
        }
        else {
            createNavItem(obj.name, obj.route, obj.ideaBool, obj.keyIn)
        }
    }



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
        <div className='NavBar fixed-top'>
            <ul className="nav nav-tabs">

                    <div className='homeBtn'>
                        <a className='btn btn-danger homeText' href='/'><i className="icon fas fa-home"></i>Homepage</a>
                    </div>

                <li role='presentation' className='dropdown'>
                    <button className="dropBtn btn btn-primary dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-lightbulb icon"></i> Ideas <span className="caret"></span>
                    </button>
                    <ul className='dropdown-menu'>
                        { listNavItemIdeas }
                    </ul>
                </li>
                <li role='presentation' className='dropdown'>
                    <button className="dropBtn btn btn-success dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-archive icon"></i> Modules <span className="caret"></span>
                    </button>
                    <ul className='dropdown-menu'>
                        { listNavItemModules }
                    </ul>
                </li>
            </ul>
            <div className='folderBar'></div>
            { props.children }
        </div>
    )
}

export default NavBar;

