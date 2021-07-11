import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';

const TodosList = () => {

    const todos = useSelector((state) => state.addTodo.todos)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            margin: "0 auto",
            height: "200px",
            overflowY: "auto",
            overflowX: "hidden"
        }}>
            {
                todos.map((item, i)=>(
                    <Todo key={item} todo={item} index={i}/>
                ))
            }
        </div>
    )
}

export default TodosList
