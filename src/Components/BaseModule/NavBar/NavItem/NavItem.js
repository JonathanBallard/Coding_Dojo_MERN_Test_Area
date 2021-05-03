import React from 'react';
import './NavItem.css';

let NavItem = props => {

    if(props.isIdea){
        return (
            <li className='NavItem list-group-item idea btn-primary'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
    else {
        return (
            <li className='NavItem list-group-item module btn-warning'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
}

export default NavItem;