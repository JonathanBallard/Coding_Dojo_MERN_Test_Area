import React from 'react'
import './CurrentModules.css';
import Module from './Module/Module';

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