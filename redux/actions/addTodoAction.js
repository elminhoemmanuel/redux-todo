import * as t from '../types'

export const addTodo = (todo) =>{
    return {
        type:t.ADD_TODO,
        payload:todo
    }
}