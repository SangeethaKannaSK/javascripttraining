import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/styles.css'
import QuizService from './quizService'
import QuestionPage from './components/QuestionPage'
//import MasonryLayout from './components/MansonaryLayout'

class Quiz extends Component {
    constructor() {
        super()
        this.quizService = new QuizService()
        this.updateScore = this.updateScore.bind(this)
    }

    state = {
        questions: [],
        score: 0,
        responses: 0,
        currentQuestionNumber: 0        
    }

    getQuestions = () => {
        this.quizService.retrieveQuestions().then(_questions => {
            this.setState( { questions: _questions })
          }
      );
    }

    playAgain = () => {
        this.getQuestions()
        this.setState( {
            score: 0,
            responses: 0            
        })
    }

    componentDidMount() {
        this.getQuestions()
    }

    updateScore(answer) {
        // TODO: Dynamically get answers and hints and explanation
        // this.quizService.updateScore(answer, question).then(result => {
        //     console.log(result)
        // })      
        this.setState({
            score: (answer[0] === this.state.questions[this.state.currentQuestionNumber].answer) ? this.state.score + 1 : this.state.score,
            currentQuestionNumber: this.state.currentQuestionNumber + 1,            
            responses:this.state.responses + 1 
        })        
    }

    render() {
        return (

            <div className="container">               
                {
                    this.state.questions.length > 0 ? 
                    <QuestionPage question={this.state.questions[this.state.currentQuestionNumber]} updateScore={this.updateScore} /> : <h1>Loading Questions...</h1>
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

                <h1>{this.state.score   }</h1>
                <div>{this.state.responses}<span>/</span>{this.state.questions.length}</div>
            </div>
        )
    }
}

ReactDOM.render(<Quiz/>, document.getElementById("root") )  