import React from 'react'

import { useForm } from '../../hooks/useForm'

export const AddTodoForm = (props) => {

    const { handleAddTodo } = props;
    const [form, handleInputChange, resetForm ] = useForm({ description: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: form.description,
            done: false
        }

        handleAddTodo(newTodo)
        resetForm()
    }

    return (
        <>
            <h5>Agregar TODO</h5>
            <hr />

            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <input
                        value={form.description}
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        onChange={handleInputChange} />
                </div>

                <button
                    type="submit"
                    className="btn btn-block btn-outline-primary">
                    Agregar
                </button>
            </form>
        </>
    )
}
