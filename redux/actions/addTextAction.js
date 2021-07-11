import * as t from '../types'

export const addText = (value) =>{
    return {
        type:t.ADD_TEXT,
        payload:value
    }
}