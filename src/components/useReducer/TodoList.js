import React from 'react'
import { PropTypes } from 'prop-types'

import { TodoListItem } from './TodoListItem'

export const TodoList = (props) => {

    const { todos, handleToggle, handleDelete } = props;

    return (
        <ul className="list-group list-group-flush">
            { todos.map((todo, index) => (
                <TodoListItem
                    key={todo.id}
                    index={index}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
