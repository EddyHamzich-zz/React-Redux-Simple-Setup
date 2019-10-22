import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, SIGN_IN } from './redux/reducerList';

export default function App() {

    const counterReducer = useSelector(state => state.counterReducer);
    const loggedReducer = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch();

    return (
        <div className="app">
            <h1>Counter {counterReducer} </h1>
            <button onClick={() => dispatch(INCREMENT())}> + </button>
            <button onClick={() => dispatch(DECREMENT())}> - </button>
            <br/>
            <br/>
            <button onClick={() => dispatch(SIGN_IN())}> { loggedReducer ? (<h3> You have succesfully logged in!</h3>) : (<h3>Log in</h3>) } </button>
        </div>
    )
}