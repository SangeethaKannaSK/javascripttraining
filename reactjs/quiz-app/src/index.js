import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import QuizService from './quizService'
import QuestionPage from './components/QuestionPage'
import ScoreCard from './components/ScoreCard'
//import MasonryLayout from './components/MansonaryLayout'
import './assets/styles.css'
import Question from './models/Question'

class Quiz extends Component {
    constructor() {
        super()
        this.quizService = new QuizService()
        this.updateScore = this.updateScore.bind(this)
        this.markForReview = this.markForReview.bind(this)
    }

    state = {
        questions: [],
        score: 0,
        responses: 0,
        currentQuestionNumber: 0        
    }

    getQuestions = () => {
        this.quizService.retrieveQuestions().then(_questions => {
            
            this.setState( { questions: _questions.map((_q) => 
                new Question( 
                    { statement: _q.questionStatement, 
                        assertion:  _q.assertion, reason: _q.reason, 
                        matchRight: _q.matchRight, matchLeft: _q.matchLeft, 
                        statements: _q.statements 
                    },
                     _q.answer, _q.options, _q.type, _q.matchLeft, _q.matchRight 
                    ) ) 
            })
          }
      );
    }

    playAgain = () => {        
        this.setState( {
            questions: [],
            score: 0,
            responses: 0,
            currentQuestionNumber: 0
        })
        this.getQuestions()
    }

    componentDidMount() {
        this.getQuestions()
    }

    updateScore(answer) {
        // TODO: Dynamically get answers and hints and explanation
        // this.quizService.updateScore(answer, question).then(result => {
        //     console.log(result)
        // })
        if(this.state.currentQuestionNumber < this.state.questions.length ) {

            this.setState({
                score: (answer[0] === this.state.questions[this.state.currentQuestionNumber].answer) ? this.state.score + 1 : this.state.score,
                currentQuestionNumber: this.state.currentQuestionNumber + 1,
                responses: this.state.responses + 1
            })

        } else {
            this.displayScore()
        }
    }

    markForReview() {        
        this.setState({

        })
    }

    displayScore() {
        this.setState( {
            completed: true
        })
    }

    submit() {
        console.log('Questions submitted')
    }

    tryAgain() {
        console.log('Play Again')
    }

    render() {

        return (

            <div className="container">  
                {
                    this.state.currentQuestionNumber +  ' ' +  this.state.questions.length
                }
                {
                    this.state.questions.length > 0 && this.state.currentQuestionNumber < this.state.questions.length ? 
                    <QuestionPage question={this.state.questions[this.state.currentQuestionNumber]} 
                        updateScore={this.updateScore} markForReview={this.markForReview} /> : 
                        
                        this.state.currentQuestionNumber == this.state.questions.length ? '' :
                            <h1>Loading Questions...</h1>
                }
                {
                    this.completed && <ScoreCard submit={this.submit} />
                }
                {
                    /* 
                question={this.currentQuestionNumber} handleClick={this.displayNextQuestion} 
                <MasonryLayout columns={2} gap={25}>
                    {
                    [...Array(1).keys()].map(key => {
                        const height = 200 + Math.ceil(Math.random() * 300);

                        return (
                        <div style={{height: `${height}px`}} >Hi</div>
                        )
                    })
                    }
                </MasonryLayout> */
                }

                <h1>Current Score: {this.state.score}</h1>
                <div>Question Number: {this.state.currentQuestionNumber}<span>/</span>{this.state.questions.length}</div>
                <div>Number of questions answered : {this.state.responses}</div>
            </div>
        )
    }
}

ReactDOM.render(<Quiz/>, document.getElementById("root") )