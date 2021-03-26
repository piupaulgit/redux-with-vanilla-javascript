const redux = require ('redux');
const createStore = redux.createStore;

// actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => { return {type: BUY_CAKE}}
const buyIcecream = () => { return {type: BUY_ICECREAM}}
// ======================================

// reducer
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
const store = createStore(reducer)
console.log(store.getState(), 'initial state')
const unsubscribe = store.subscribe(() => console.log(store.getState(),'updated state'))
store.dispatch(buyCake())
store.dispatch(buyIcecream())
unsubscribe()


