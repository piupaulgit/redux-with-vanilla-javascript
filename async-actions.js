// const redux = require('redux');
// const createStore = redux.createStore()
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleWare = require('redux-thunk').default;
// // state
// const initialState = {
//     loading: false,
//     userd: [],
//     error: ''
// }

// // actions
// const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_FAILURE =  'FETCH_USERS_FAILURE';

// const fetchUserRequest = () => {
//     return {
//         type: FETCH_USERS_REQUEST
//     }
// }
// const fetchUserSuccess = users => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }
// const fetchUserFailure = error => {
//     return {
//         type: FETCH_USERS_FAILURE,
//         payload: error
//     }
// }

// // reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_USERS_REQUEST:
//             return {
//                 ...state,
//                 loading : true
//             }
            
//         case FETCH_USERS_SUCCESS:
//             return {
//                 loading : false,
//                 users: action.payload,
//                 error: ''
//             }

//         case FETCH_USERS_FAILURE: 
//             return {
//                 loading:false,
//                 users: [],
//                 error: action.payload
//             }

//     }
// }

// const store = createStore(reducer, applyMiddleware(thunkMiddleWare))


const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios')
// initial State
const initialState = {
    loading: false,
    users :[],
    error:''
}

// actions

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload : error
    }
}

// reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading : true
            }
            case FETCH_USERS_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    users: action.payload,
                    error: ''
                }
            case FETCH_USERS_SUCCESS:
                return {
                    ...state,
                    loading : false,
                    users: [],
                    error: action.payload
                }
    }
}
 

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const users = res.data;
            dispatch(fetchUserSuccess(users))
        }).catch(err => {
            dispatch(fetchUserFailure(err))
        })
    }
    
}

const store = createStore(reducer,applyMiddleware(thunkMiddleWare))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
console.log('io')