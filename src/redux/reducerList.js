
/*----- counterReducer below -----*/

export const counterReducer = (state = 0 , action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state
    }
}
export const INCREMENT = () => { return {type: "INCREMENT"} }
export const DECREMENT = () => { return {type: "DECREMENT"} }

/*----- loggedReducer below -----*/

export const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return !state;
        default:
            return state;
    }
}
export const SIGN_IN = () => { return {type: "SIGN_IN"} }