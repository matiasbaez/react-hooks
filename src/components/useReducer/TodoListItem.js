import React from 'react'
import { PropTypes } from 'prop-types'

export const TodoListItem = (props) => {

    const { index, todo, handleToggle, handleDelete } = props;

    return (
        <li
            key={todo.id}
            className="list-group-item">
            <p
                onClick={() => handleToggle(todo.id) }
                className={`text-center ${todo.done && 'completed'}`}>
                {index + 1}. {todo.desc}
            </p>

            <button className="btn btn-danger" onClick={() => handleDelete(todo.id) }>
                <span className="fas fa-trash"></span>
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}