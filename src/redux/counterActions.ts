//action types
export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";
export const RESET = "counter/reset";


// action creators
export const increment = () => {
    return {
        type: INCREMENT
    }
}


export const decrement = () => {
    return {
        type: DECREMENT
    }
}


export const reset = () => {
    return {
        type: RESET
    }
}