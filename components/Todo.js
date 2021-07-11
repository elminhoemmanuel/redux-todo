import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/deleteTodoAction'
import { editTodo } from '../redux/actions/editTodoAction'

const Todo = ({todo, index}) => {

    const dispatch = useDispatch();
    const text = useSelector((state) => state.addTodo.text)
    const selected = useSelector((state) => state.addTodo.selected)

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid #ffffffa6",
            padding: "5px",
            cursor: "pointer"
        }}>
            <div onClick={()=>{
                dispatch(editTodo(index))
            }}>
                {
                    selected === index ?
                    text
                    :
                    todo
                }
            </div>
            <div style={{cursor:'pointer'}} onClick={()=>{
                dispatch(deleteTodo(index))  
            }}>X</div>
        </div>
    )
}

export default Todo
