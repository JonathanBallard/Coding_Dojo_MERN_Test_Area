import React from 'react';
import './BaseModule.css';
import ModuleIdeas from '../ModuleIdeas/ModuleIdeas';
import CurrentModules from '../CurrentModules/CurrentModules';

// TODO this will hold a bar to traverse between test components

let BaseModule = props => {

    return(
        <div className='BaseModule'>
            <h1>Different Test Components Here!</h1>
            <div className='leftCol'>
                <ModuleIdeas></ModuleIdeas>
            </div>
            <div className="rightCol">
                <CurrentModules></CurrentModules>
            </div>
        </div>
    )

}

export default BaseModule;