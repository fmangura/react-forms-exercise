import React from 'react';

const Todo = ({text, id, delTodo}) => {
    const deleteTodo = (e) => {
        e.preventDefault()
        delTodo(e.target.id)
    }

    return (
        <div className='Todo'> {text} <button onClick={deleteTodo} id={`${id}`}>x</button></div>
    )
}

export default Todo;