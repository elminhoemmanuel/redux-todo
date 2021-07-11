import * as t from '../types'

export const persistTodos = ()=>{
    return {
        type:t.PERSIST_TODOS,
    }
}