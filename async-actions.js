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

const store = createStore(reducer)
console.log('io')