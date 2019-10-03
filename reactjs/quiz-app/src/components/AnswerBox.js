import React from "react";

const AnswerBox = (props) => {

    //Adding answer to present options 

    //TODO: Randomly push - To Be Removed
    // props.question.options.push(props.question.answer);
    
    return (

        <div className="answerBox">            
            {   
                props.question.options.map((text, index) => (
                    <button className="answerBtn"
                    key={index}
                    onClick= {
                        () => { props.updateScore( [text] ) }
                    }
                    >{text}</button>
                ))
            }
        </div>
    )
}

export default AnswerBox;