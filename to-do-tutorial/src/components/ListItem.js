import React from 'react';

function ListItem(props) {
  
  return (
    <div 
      className="list-item"
    >
      <input 
        type='checkbox' 
        checked={props.task.completed} 
        onChange={() => props.handleChange(props.task.id)}
      />
      <p>{props.task.text}</p>
    </div>
  )
}

export default ListItem