import React, {useEffect} from 'react'
import InputField from './InputField'
import TodosList from './TodosList'
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllTodos } from '../redux/actions/deleteAllTodosAction'
import { persistTodos } from '../redux/actions/persistTodosAction'


const TodoMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(persistTodos());
        
    }, [persistTodos])

    return (
        <div className='main'>
            <h1 >Todos App</h1>
            <InputField />
            <TodosList />
            <button
            style={{ marginTop: "20px", cursor: "pointer" }}
            onClick={()=>{
                dispatch(deleteAllTodos())
            }}
            >
                Delete All
            </button>
        </div>
    )
}

export default TodoMain
