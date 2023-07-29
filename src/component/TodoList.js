import React, {useState} from 'react'
import TodoListItem from './TodoListItem'

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", selected: false, completed: false },
        { id: 2, title: "Build a React app", selected: false, completed: false },
        { id: 3, title: "Deploy the React App", selected: false, completed: false },
      ]);

  function handleComplete(id) {
    const updatedTodo = [...todos];
    const todo = updatedTodo.find((todo) => todo.id === id);
    todo.completed = true;

    console.log(updatedTodo)
    setTodos(updatedTodo);
  }    

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <ul>
        {todos.map(
                 (todo) => {
                    return(<TodoListItem key={todo.id}  listItemKey={todo.id} todo={todo} onComplete={handleComplete} />)
            })} 
      </ul>
    </div>
  )
}

export default TodoList
