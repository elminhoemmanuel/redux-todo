import * as t from '../types';

const initialState ={
    todos:[],
    text:'',
    selected:undefined,
}

export const todoReducer = (state = initialState , action )=>{
    switch(action.type){

        case t.PERSIST_TODO :
            const todos = JSON.parse(localStorage.getItem('todos2'));
            return {
                ...state,
                todos:todos ? todos : [],
            }
        case t.ADD_TODO :
            const todos2 = state.todos.concat(action.payload)
            localStorage.setItem('todos2',JSON.stringify(todos2))
            return {
                ...state,
                todos:todos2,
                text:''
            }
        case t.DELETE_TODO :
            return {
                ...state,
                todos:state.todos.filter((todo, i) => i !== action.payload),
            }
        case t.EDIT_TODO :
            return {
                ...state,
                text:state.todos[action.payload],
                selected:action.payload
            }
        case t.ADD_TEXT :
            return {
                ...state,
                text:action.payload,
            }
        case t.EDIT_ADD_TODO:
            return {
                ...state,
                todos:state.todos.map(( todo, i )=> i !== action.payload.selected ? todo : action.payload.value),
                selected:undefined,
                text:''
            }
        case t.DELETE_ALL_TODO:
            return {
                ...state,
                todos:[],
                text:''
            }

        default:
            return state
    }
}