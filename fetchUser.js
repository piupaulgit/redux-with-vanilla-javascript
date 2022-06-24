const { default: axios } = require('axios')
const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').default


const initialState = {
    loading : false,
    user: [],
    error: ''
}

const fetchUserRequested = () => {
    return {
        type: 'FETCH_USER_REQUESTED'
    }
}
const fetchUserSuccessed = (user) => {
    return {
        type: 'FETCH_USER_SECCESSED',
        payload: user
    }
}

const fetchUserFailed = (msg) => {
    return {
        type: 'FETCH_USER_FAILED',
        payload: msg
    }
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'FETCH_USER_REQUESTED':
            return {
                ...state,
               loading: true
            }
            case 'FETCH_USER_SECCESSED':
                return {
                    ...state,
                   loading: false,
                   user:action.payload
                }
            case 'FETCH_USER_FAILED':
                return {
                    ...state,
                    loading: false,
                    error: payload
                    }
    
        default:
            return state
    }
}

const fetchUsers = () => {
   return function(dispatch){
        dispatch(fetchUserRequested)
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            dispatch(fetchUserSuccessed(res.data))
        }).catch(err => {
            dispatch(fetchUserFailed(err.messsage))
        })
    }
}
const store = redux.createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
