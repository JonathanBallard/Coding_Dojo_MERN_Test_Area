import React from 'react';
import './ModuleIdeas.css';
import Idea from './Idea/Idea';

// TODO Needs a method of CRUD new Idea components

let ModuleIdeas = props => {

    let createIdea = (title, description) => {

        return(
            <Idea ideaTitle={ title } desc={ description }></Idea>
        )
    }

return (
    <div className='ModuleIdeas'>
        <h5>Module Ideas</h5>
        <ul className='ideaList'>
            <Idea ideaTitle="Test Idea Title" desc="Description for Test Idea"></Idea>
        </ul>
    </div>
);
}

export default ModuleIdeas;


