import React from 'react';
import './ModuleIdeas.css';
import Idea from './Idea/Idea';

let ModuleIdeas = props => {

return (
    <div className='ModuleIdeas'>
        <h5>Module Ideas</h5>
        <ul className='ideaList'>
            <Idea ideaTitle="Test Title"></Idea>
        </ul>
    </div>
);
}

export default ModuleIdeas;


