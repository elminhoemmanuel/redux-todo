import * as t from '../types'

export const editAddTodo = obj =>{
    return {
        type:t.EDIT_ADD_TODO,
        payload:obj
    }
}