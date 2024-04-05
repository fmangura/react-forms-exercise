import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const [textInput, setTextInput] = useState(' ');

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(textInput);
        setTextInput(' ');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Todo">What to do?</label>
                <input id="Todo" type="text" name="Todo" onChange={handleChange} style={{width:'500px'}}/>
                <br />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default NewTodoForm;