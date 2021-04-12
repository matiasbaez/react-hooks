import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer'
import { AddTodoForm } from './AddTodoForm'
import { TodoList } from './TodoList'

import './styles.css'

// Assign the initialState
const initReducer = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initReducer)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

    const handleAddTodo = (todo) => {
        const action = {
            type: '@todo/add',
            payload: todo
        }
     
        dispatch(action)
    }

    const handleToggle = (id) => {
        const action = {
            type: '@todo/completed',
            payload: id
        }
     
        dispatch(action)
    }

    const handleDelete = (id) => {
        const action = {
            type: '@todo/delete',
            payload: id
        }
     
        dispatch(action)
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete} />
                </div>

                <div className="col-5">
                    <AddTodoForm
                        handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </div>
    )
}
