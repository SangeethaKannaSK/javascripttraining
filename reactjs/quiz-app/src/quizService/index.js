// import Configruation from './configuration'
// import Answers from './Answers'

/**
 * Quiz service for getting questions, updating score marks
 */

 class quizService {

    constructor() {
        this.questions = [
            {
                questionStatement: 'What is the capital of India',
                answer: 'New Delhi',
                options: ['Calcutta', 'Chennai', 'Mumbai'],
                type: 'simple'
            }, {
                assertion:'',
                reason:'',
                options: ['Calcutta', 'Chennai', 'Mumbai'],
                type:'assertion'
            }, {
                matchLeft: 'a,b,c,d',
                matchRight: '1,2,3,4',
                options: ['Calcutta', 'Chennai', 'Mumbai'],
                answer: '4,3,1,2'
            }, {
                statementI:'stsdsdf',
                statementII:'sd245ds',
                options: ['Calcutta', 'Chennai', 'Mumbai'],
                answer:'2'

            }
        ]
    }

    async retrieveQuestions() {
        return Promise.resolve(this.questions)
    }


}

export default quizService