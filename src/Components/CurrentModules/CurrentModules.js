import React from 'react'
import './CurrentModules.css';
import Module from './Module/Module';

// TODO Needs a method of CRUD new CurrentModule components

let CurrentModules = props => {

    return (
        <div className='CurrentModules'>
            <h5>Current Modules</h5>
            <ul className='moduleList'>
                <Module moduleTitle='Test Current Module'></Module>
            </ul>
        </div>
    )
}

export default CurrentModules;