import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.css';
import quizService from './quizService'
import QuestionBox from './components/QuestionBox'

class Quiz extends Component {
    state = {
        questions: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        quizService().then(question => {
            this.setState( {
                questions: question
            })
        })
    }

    playAgain = () => {
        this.getQuestions()
        this.setState( {
            score: 0,
            responses: 0
        })
    }

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer) {
            this.setState( {
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 5? this.state.responses + 1:5
        })
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    {this.state.questions.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questions.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox 
                            question={question} 
                            options={answers} 
                            key={questionId} 
                            selected={answer => this.computeAnswer(answer, correct)}
                            />
                        )
                    )}

                    {this.state.responses === 5 ? (
                        <Result score = {this.state.score} playAgain={this.playAgain} />
                    )}
                </div>                
            </div>
        );
    }
}

ReactDOM.render(<Quiz/>, document.getElementById("root") )