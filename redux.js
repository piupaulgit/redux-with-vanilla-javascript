
const redux = require('redux')
const createStore = redux.createStore;

const initialStore = {
    numberOfcakes : 20
}


const buyCake = () => {
    return {
        type: 'BUY_CAKE'
    }
}

const addCake = () => {
    return {
        type: 'ADD_CAKE'
    }
}


const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state, 
                numberOfcakes : state.numberOfcakes - 1
            }
        case 'ADD_CAKE':
            return {
                ...state, 
                numberOfcakes : state.numberOfcakes + 1
            }
    
        default: return state
    }
}

const store = createStore(reducer)

console.log(store.getState())

store.dispatch(buyCake())
console.log(store.getState())