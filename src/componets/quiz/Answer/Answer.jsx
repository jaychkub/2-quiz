import React, { useState } from 'react';

import './Answer.scss'

import STARS from './images/stars.png'
import SHOOTINGSTAR from './images/shooting-star.png'
import SATURN from './images/saturn.png'
import MOON from './images/moon.png'

const images = {
    'a': STARS,
    'b': SHOOTINGSTAR,
    'c': SATURN,
    'd': MOON
}

const Answer = (props) => {
    const color = props.color
    const value = props.value
    const question = props.question
    const onClick = props.onClick

    return (
        <button value={value} onClick={onClick} className={'Answer ' + color}>
            <img src={images[value]} alt="" />
            <p>{question[value]}</p>
        </button>
    );
}

export default Answer;
