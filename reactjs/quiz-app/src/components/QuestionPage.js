import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import QuestionBox from './QuestionBox'
import AnswerBox from './AnswerBox'
// import Question from '../models/Question'

class QuestionPage extends Component {

    render() {
        
        const {updateScore} = this.props
        const {markForReview} = this.props

        return (
            <div className='title' >
                <QuestionBox question={this.props.question} markForReview={markForReview} />
                <AnswerBox question={this.props.question} updateScore={updateScore} />
            </div>
        )
    }
}

export default QuestionPage