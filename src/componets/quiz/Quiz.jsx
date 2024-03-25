import React from 'react';

import './Quiz.scss'

import Answer from './Answer/Answer'

const Quiz = (props) => {
    const question = props.question

    return (
        <div className='Quiz-Container'>
            <div className="Question-Container">This is a test Question?</div>
            <div className="Picture-Container"></div>
            <div className='Answer-Container'>
                <Answer color="pink" value="a" />
                <Answer color="orange" value="b" />
                <Answer color="purple" value="c" />
                <Answer color="blue" value="d" />
            </div>
        </div>
    );
}

export default Quiz;
