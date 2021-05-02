import React from 'react';
import './Idea.css';

// This will be a list item
let Idea = props => {

    return (
        <li className='idea'>
            <h5 className='ideaTitle h5'>{ props.ideaTitle }</h5>
            <p className='ideaDescription'>{ props.desc }</p>
        </li>
    )
}


export default Idea;

