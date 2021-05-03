import React from 'react';
import './NavItem.css';

let NavItem = props => {

    if(props.isIdea){
        return (
            <li data-key={ props.key } className='NavItem idea btn-primary'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
    else {
        return (
            <li data-key={ props.key } className='NavItem module'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </li>
        )
    }
}

export default NavItem;