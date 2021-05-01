import React from 'react';
import './NavItem.css';

let NavItem = props => {

    if(props.isIdea){
        return (
            <div className='NavItem idea'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </div>
        )
    }
    else {
        return (
            <div className='NavItem module'>
                <a href={ props.navRoute }>{ props.navName }</a>
            </div>
        )
    }
}

export default NavItem;