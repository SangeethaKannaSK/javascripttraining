import React from "react"


const QuestionBox = ({question}) => {
    
    return (
        <div className="questionBox">
            {
                question.questionType === 0 && <div className="question">{question.questionStatement}</div>
            }
            {
                question.questionType === 1 && <div className="question">{question.questionStatement}</div>
            }
            {
                question.questionType === 2 && <div className="question">{question.questionStatement}</div>
            }
            {
                question.questionType === 3 && <div className="question">{question.questionStatement}</div>
            }            
        </div>
    )
}

export default QuestionBox