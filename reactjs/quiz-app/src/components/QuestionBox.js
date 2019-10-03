import React from "react"
import QuestionType from "../models/QuestionType"

const QuestionBox = (props) => {

    const {question} = props

    return (
        <div className="questionBox">
            {
                QuestionType[question.questionType] === QuestionType.basic && <div className="question">{question.questionStatement}</div>
            }
            { 
                QuestionType[question.questionType] === QuestionType.assertion && 
                    <div className="question">  
                        <ul>
                            <li>{question.assertion}</li>
                            <li>{question.reason}</li>
                        </ul>
                    </div>
            }
            {
                QuestionType[question.questionType] === QuestionType.match && <div className="question">
                <div className="left"> {question.matchLeft}</div><div className="right">{question.matchRight}</div></div>
            }
            {
                QuestionType[question.questionType] === QuestionType.statement && 
                question.statements !== undefined && question.statements.map((text, index) => (
                        <li className="answerBtn" key={index} >{text}</li>
                    ))
            }
            {
                QuestionType[question.questionType] === QuestionType.image && <div className="question">{question.questionStatement}</div>
            }
            
            <input type="checkbox" onClick= { () => props.markForReview() } value="Mark for Review" />

        </div>
    )
}

export default QuestionBox