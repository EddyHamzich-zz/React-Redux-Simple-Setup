import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
// Redux persist
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from 'redux-persist/es/persistReducer';

// Redux persist is a package that allows you to keep the state even after the user has left the website!

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["loggedReducer"] // decide which reducers you want to use Redux Persist ("" are necessary)!
}

// this is where we combine our rootReducer with persistedReducer!
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

