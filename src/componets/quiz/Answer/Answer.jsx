import React from 'react';

import './Answer.scss'

import STARS from './images/stars.png'

const Answer = (props) => {
    const color = props.color
    const value = props.value

    return (
        <button value={value} className={'Answer ' + color}>
            <img src={STARS} alt="" />
            <p>ANSWER</p>
        </button>
    );
}

export default Answer;
