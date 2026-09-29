import {INCREMENT,DECREMENT,RESET} from './counterActions';

type CounterState = {
    count: number
}

const initialState:CounterState =  {
    count: 0
}

type CounterAction = 
    | {type: typeof INCREMENT} 
    | {type: typeof DECREMENT} 
    | {type: typeof RESET};


export function countReducer (
    state: CounterState = initialState,
    action: CounterAction
):CounterState{

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count +1
            }
    
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1
            }
            
        case RESET:
            return{
                ...state,
                count: 0
            }
            
        default:
            return state;
    }
}