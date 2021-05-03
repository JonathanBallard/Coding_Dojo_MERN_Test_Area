import React from 'react';
import './NavItem.css';

let NavItem = props => {

    if(props.isIdea){
        return (
            <li className='NavItem idea btn-primary'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
    else {
        return (
            <li className='NavItem module'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
}

export default NavItem;