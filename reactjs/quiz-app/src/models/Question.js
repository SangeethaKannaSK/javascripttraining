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

const QuestionType = {
    basic: 0,
    assertionreasoning: 1,
    match: 2,
    statements: 3,
    images: 4
}

class Question { 
    constructor( questionStatement, correctAnswer, options = [], questionType = QuestionType.basic,  id ){
        this.questionStatement = questionStatement;        
        this.correctAnswer = correctAnswer
        this.questionType = questionType
        this.answered = false
        
        if(questionType === QuestionType.assertionreasoning) {
            this.options = [
                'Both R and A are true and R is the correct explanation of A',
                'Both R and A are true and R is not the correct explanation of A',
                'Both R and A are false',
                'A is true and R is false'
            ]
        } else if(questionType === QuestionType.assertionreasoning) {
            this.options = ['1 2 3 4', '1 2 4 3', '1 3 2 4']

        } else {            
            this.options = options;
        }

        this.options.push(this.correctAnswer)
        this.id = id;
    }

    
}

export default Question