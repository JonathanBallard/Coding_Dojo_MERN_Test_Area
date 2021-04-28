import React from 'react'
import './Module.css';

let Module = props => {

    return (
        <li className='Module'>
            <h6>{props.moduleTitle}</h6>
        </li>
        )
}

export default Module;