import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/addTodoAction'
import { addText } from '../redux/actions/addTextAction'
import { editAddTodo } from '../redux/actions/editAddTodoAction'

const InputField = () => {

    const dispatch = useDispatch();
    const text = useSelector((state) => state.addTodo.text)
    const selected = useSelector((state) => state.addTodo.selected)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( selected || selected === 0){
            dispatch(editAddTodo({value:text,selected:selected}))
        }else{
            dispatch(addTodo(text));
        }
        
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todoInput" 
                placeholder="Enter your todo..."
                onChange={(e)=>{dispatch(addText(e.target.value))}}
                value={text}
                />
            </form>
        </div>
    )
}

export default InputField
