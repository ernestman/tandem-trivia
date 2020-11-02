import React, {useState, useEffect} from 'react';

const Question = props => {
    const {question} = props;

    const options = question.choices.map( (opt, key) => (
        <button
            className="option"
            id={opt === question.correct ? 'correct' : 'incorrect'}
            onClick={props.handleClick}
            disabled={props.buttonsDisabled}
            key={key}
        >
            {opt}
        </button>
    ))

    return (
        <div className="question-card">
            <div id="question-num">Question {props.currentQuestion + 1} / {props.questions.length}</div>
            <h4>{question.question}</h4>
            {options}
        </div>
    )
}

export default Question;