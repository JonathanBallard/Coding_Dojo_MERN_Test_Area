import React from 'react';
import './Idea.css';

// This will be a list item
let Idea = props => {

    return (
        <li className='idea'>
            <h5 className='ideaTitle'>{ props.ideaTitle }</h5>

        </li>
    )
}


export default Idea;

