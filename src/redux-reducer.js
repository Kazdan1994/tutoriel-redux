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

const state = TodoReducer(undefined, {});
const newState = TodoReducer(state, {type: ADD_TODO, payload: {title: 'Demo'}})
console.log(state, newState)
