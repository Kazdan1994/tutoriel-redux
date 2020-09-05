import {createStore} from "redux";

console.log('test redux')

const initialState = [
    {
        id: 1,
        title: 'Enregistrer le tutoriel',
        completed: false
    },
    {
        id: 2,
        title: 'Préparer le tutoriel',
        completed: true
    }
]

const ADD_TODO = 'ADD_TODO'
let id = 2;

function TodoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default:
            return state
    }
}

const store = createStore(
    TodoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
store.subscribe(() => console.log(store.getState()))

for (let i = 0; i < 5; i++) {
    store.dispatch({ type: ADD_TODO, payload: { title: 'Demo ' + i} })
}
