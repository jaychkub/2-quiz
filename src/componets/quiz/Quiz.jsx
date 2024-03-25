import React from 'react';

import './Quiz.scss'

import Answer from './Answer/Answer'
import Timer from '../Timer/Timer'

import QUESTION1 from '../../images/question-1.jpg'

const Quiz = (props) => {
    const question = props.question

    const handleAnswer = (event) => {
        if (event.target.value === question['correct'])
            console.log("correct")
        else console.log("wrong")
    }

    return (
        <div className='Quiz-Container'>
            <div className="Question-Container">
                <p>{question['question']}</p>
                <Timer />
            </div>
            <div className="Picture-Container">
                <img src={QUESTION1} alt="" />
            </div>
            <div className='Answer-Container'>
                <Answer color="pink" value="a" question={question} onClick={handleAnswer} />
                <Answer color="orange" value="b" question={question} onClick={handleAnswer} />
                <Answer color="purple" value="c" question={question} onClick={handleAnswer} />
                <Answer color="blue" value="d" question={question} onClick={handleAnswer} />
            </div>
        </div>
    );
}

export default Quiz;
