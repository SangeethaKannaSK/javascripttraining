import Configruation from './configuration'
// import Answers from './Answers'

/**
 * Quiz service for getting questions, updating score marks
 * 
 * This is the communication service class for Quiz
 * 
 * All methods are asynchronous
 */

 class quizService {

    constructor() {
        this.config = Configruation;
        this.questions = [
            {
                questionStatement: 'What is the capital of India',
                answer: 'New Delhi',
                options: ['Calcutta', 'Chennai', 'Mumbai'],
                type: 0
            }, {
                assertion: 'I am Sangeethakanna',
                reason: 'Yes This is your correct name',
                answer: 2,
                type: 1
            }, {
                matchLeft: 'a,b,c,d',
                matchRight: '1,2,3,4',
                answer: '4 3 2 1',
                type: 2
            }, {
                statements:['stsdsdf', 'sd245ds'],
                answer: 2,
                type: 3
            }
        ]
    }

    async retrieveQuestions() {
        // return fetch(this.config.QUESTION_COLLECTION_URL)
            // .then(response => {
            //     if (!response.ok) {
            //     this.handleResponseError(response);
            //     }
            //     return response.json();
            // })
            // .then(json => {
            //     return json.questions;
            // })
            // .catch(error => {
            //     this.handleError(error);
            // });

        return Promise.resolve(this.questions)
    }

    async postAnswer(selectedAnswer, question) {
        return fetch(this.config.ITEM_COLLECTION_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                  "Content-Type": "application/json"
              },
            body: JSON.stringify({answer: selectedAnswer, questionId: question})
        })
            .then(response => {
             if (!response.ok) {
                  this.handleResponseError(response);
              }
              return response.json();
            })
            .catch(error => {
              this.handleError(error);
            });
    }

    async getReferences(question){
        return fetch(this.config.QUESTION_COLLECTION_URL + '/' + question.questionId )
            .then(response => {
             if (!response.ok) {
                  this.handleResponseError(response);
              }
              return response.json();
            })
            .catch(error => {
              this.handleError(error);
            });
    }

    /*
     *
     *  Error Handling code starts
     *
     *
    */

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }
    
    handleError(error) {
        console.log(error.message);
    }

}

export default quizService