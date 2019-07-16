import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='CardContent'>
            <p className='CardTitle'>Get started with React</p>
            <p className='CardText'>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a className='CardLink' href='reactjs.org'>reactjs.org</a>
        </div>
    );
};

export default CardContent;