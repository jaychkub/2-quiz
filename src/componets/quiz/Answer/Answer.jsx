import React, { useState } from 'react';

import './Answer.scss'

import STARS from './images/stars.png'
import SHOOTINGSTAR from './images/shooting-star.png'
import SATURN from './images/saturn.png'
import MOON from './images/moon.png'
import CONSTELLATION from './images/constellation.png'
import EARTH from './images/earth.png'

const style = {
    'a': [STARS, 'pink'],
    'b': [MOON, 'orange'],
    'c': [EARTH, 'purple'],
    'd': [CONSTELLATION, 'blue']
}

const Answer = (props) => {
    const value = props.value
    const question = props.question
    const handleAnswer = props.handleAnswer

    return (
        <button onClick={() => handleAnswer(value)} className={`Answer ${style[value][1]}`}>
            <img src={style[value][0]} alt="" />
            <p>{question[value]}</p>
        </button>
    );
}

export default Answer;
