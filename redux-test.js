const redux = require ('redux');
const createStore = redux.createStore;

const reduxLogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()
// actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => { return {type: BUY_CAKE}}
const buyIcecream = () => { return {type: BUY_ICECREAM}}
// ======================================

// reducer
// (previous state, action) => new state
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }

        case BUY_ICECREAM : return {
            ...state,
            numberOfIceCream : state.numberOfIceCream - 1
        }

        default: return state
    }
}
// =====================================

// state
const initialState = {
    numberOfCakes: 10,
    numberOfIceCream : 5
}

// =================================

// store
const store = createStore(reducer, applyMiddleware(logger))
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()


