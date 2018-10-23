import {EVENT} from './actions'

export function quizReducer(state={
        questions:[], 
        score: 0
    }, action){
    switch(action.type){
        case EVENT.FETCHED_QUIZ:
            return {
                questions: action.data,
                score: 0
            };
        case EVENT.QUIZ_SUBMITTED:
            let score = 0;
            state.questions.map(q=>{
                let entry = action.options.find((o)=>{
                    return q.id == o.id
                });
                if(entry.option == q.answer)
                    score++;
            });   
            return {
                questions: state.questions,
                score: score
            };    
        default:
            return {
                questions: [],
                score: 0
            };
    }
};