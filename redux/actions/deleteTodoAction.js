import * as t from '../types'

export const deleteTodo = (key) =>{
    return {
        type:t.DELETE_TODO,
        payload:key
    }
}