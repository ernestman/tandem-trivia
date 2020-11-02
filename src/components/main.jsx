import React, {useState} from 'react';
import Question from './question';
import $ from 'jquery'
import TandemLogo from '../assets/tandem-logo.png'
import ScoreImg from '../assets/yellow-cloud.png'

const questionsData = require('../Apprentice_TandemFor400_Data.json');

const formatData = (data) => {
    const result = data.map(question => {
        return {
            'question': question.question,
            'choices': [...question.incorrect, question.correct].sort(() => Math.random() - 0.5),
            'correct': question.correct
        }
    })

    return result
}

const Main = () => {
    const [questions] = useState(
        // randomly select 10 problems from the questions set
        formatData(questionsData).slice(0, 10).sort(() => Math.random() - 0.5)
    )
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [beginning, setBeginning] = useState(true)
    const [showEndResults, setShowEndResults] = useState(true)

    const [buttonsDisabled, setButtonsDisabled] = useState(false)

    const question = questions[currentQuestion]

    const startGame = () => {
        setBeginning(false)
        setScore(0)
        setCurrentQuestion(0)
        setShowEndResults(false)
    }

    const handleClick = e => {
        setButtonsDisabled(true)
        $("#correct").toggleClass("clicked")

        if (e.target.innerText === question.correct) {
            setScore(score + 100)
            console.log('Correct!')
        } else {
            $(e.target).addClass("clicked-wrong")
            console.log(`Sorry, the answer was ${question.correct}`)
        }
        
        setTimeout( () => {
            $(e.target).removeClass("clicked-wrong")
            $("#correct").toggleClass("clicked")
            const nextQuestion = currentQuestion + 1
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
            } else {
                setShowEndResults(true)
            }
            setButtonsDisabled(false)
        }, 1300)
    }


    return (
        <div>
            {beginning && showEndResults ? (
                <div className="main">
                    <img src={TandemLogo}/>
                    <h2>Welcome to Tandem Trivia!</h2>
                    <div
                        onClick={startGame}
                        className="btn"
                    >
                        Start
                    </div>
                </div>
            ) : (
                null
            )}

            {!beginning && !showEndResults ? (
                <div>
                    <h3>Tandem Trivia!</h3>
                    <div className="score-img-container">
                        <img id="score-img" src={ScoreImg}/>
                        <div className="score">Score: {score}</div>
                    </div>
                    <Question 
                        question={question}
                        handleClick={handleClick}
                        buttonsDisabled={buttonsDisabled}
                        currentQuestion={currentQuestion}
                        questions={questions}
                    />
                </div>
            ) : (
                null
            )}

            {!beginning && showEndResults ? (
                <div className="main">
                    <h3>Thanks for playing!</h3>
                    <div className="score-img-container">
                        <img id="final-score-img"src={ScoreImg}/>
                        <div className="final-score">Final Score: {score}</div>
                    </div>
                    <div 
                        onClick={startGame}
                        className="btn"
                    >
                        Play Again
                    </div>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Main;