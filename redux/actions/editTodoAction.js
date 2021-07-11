import * as t from '../types'

export const editTodo = (key) =>{
    return {
        type:t.EDIT_TODO,
        payload:key
    }
}