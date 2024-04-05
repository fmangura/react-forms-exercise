import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './newTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [TodoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        setTodoList(TodoList => [...TodoList, {id:uuidv4(), todo:todo}]);
    }

    const delTodo = (id) => {
        setTodoList(todo => {
            const copyTodo = [...todo];
            return copyTodo.filter(todo => todo.id !== id)
        })
    }

    return (
        <>  
            <div>
                <NewTodoForm addTodo={addTodo} />
            </div>
            <h1>To Do:</h1>
                {TodoList.map(({id, todo}) => <Todo key={id} text={todo} id={id} delTodo={delTodo}/>)}
            <hr />
        </>
    )
}

export default TodoList;