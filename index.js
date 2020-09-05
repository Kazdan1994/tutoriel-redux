import { TodoReducer, ADD_TODO } from './src/reducer.js';

const state = TodoReducer(undefined, {});
const newState = TodoReducer(state, {type: ADD_TODO, payload: {title: 'Demo'}})
console.log(state, newState)
