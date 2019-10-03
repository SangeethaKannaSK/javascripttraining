    /**
 * 
 * Question Types
 * 
 * 0 : Basic Question
 * 1 : Assertion and Reasoning
 * 2 : Match the following
 * 3 : Statements - True or false
 * 4 : Images
 * 
 */

import QuestionType from "./QuestionType"

class Question { 

    constructor( questionData, answer, options = [], questionType = QuestionType.basic, id = 0) {
        
        this.answer = answer
        this.questionType = QuestionType[questionType]                
        this.answered = false

        if(this.questionType === "assertion") {            
            this.assertion = questionData.assertion         
            this.reason = questionData.reason            
            this.options = [
                'Both R and A are true and R is the correct explanation of A',
                'Both R and A are true and R is not the correct explanation of A',
                'Both R and A are false',
                'A is true and R is false'
            ]
        } else if(this.questionType === "match") {
            this.options = this.getMatchingCombinations()
            this.options.push(this.answer)

            this.matchLeft = questionData.matchLeft
            this.matchRight = questionData.matchRight

        } else if(this.questionType === "statement") {
            this.options = this.getStatementProblems()
            this.options.push(this.answer)
            this.statements = questionData.statements
             
        } else {            
            this.options = options
            this.options.push(this.answer)
            this.questionStatement = questionData.questionStatement
        }
        
        this.id = id        
        console.log(this.options)
    }

    getMatchingCombinations() {
        return ['1 2 3 4', '1 2 4 3', '1 3 2 4']
    }
    
    getStatementProblems() {
        return ['All statements are false','All statements are true', 'I II and III are true']
    }

}

export default Question