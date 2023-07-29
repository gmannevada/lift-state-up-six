import React from 'react'

function TodoListItem({listItemKey, todo, onComplete}) {
  return (
           <li id="ListItem" key={listItemKey}>
               {todo.title}&nbsp;
               {!todo.completed ? <input type="button" onClick={() => onComplete(todo.id)}  value="Complete" /> :null }           
          </li>      
        )
}

export default TodoListItem