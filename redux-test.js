const redux = require ('redux');
const createStore = redux.createStore;

// actions
const BUY_CAKE = 'BUY_CAKE';

const buyCake = () => { return {type: BUY_CAKE}}
// ======================================

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }

        default: return state
    }
}
// =====================================

// state
const initialState = {
    numberOfCakes: 10
}

// =================================

// store
const store = createStore(reducer)
console.log(store.getState(), 'initial state')
const unsubscribe = store.subscribe(() => console.log(store.getState(),'updated state'))
store.dispatch(buyCake())
unsubscribe()


