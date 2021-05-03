import React from 'react'
import './Module.css';

let Module = props => {

    return (
        <li className='Module'>
            <h6 className='moduleTitle'>{props.moduleTitle}</h6>
            <p className='moduleDescription'>{ props.moduleDescription }</p>
        </li>
        )
}

export default Module;