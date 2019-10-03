/**
 * Score component displays score 
 */

import React from "react";

const ScoreCard = (props) => {

    return (

        <div className="scoreCard">
            {   
                console.log(props)
            }
            <button onClick= { () => props.submit() } >Submit</button>
        </div>
    )
}

export default ScoreCard