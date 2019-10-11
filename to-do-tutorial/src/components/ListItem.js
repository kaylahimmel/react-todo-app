import React from 'react';

function ListItem (props) {
  
  return (
    <div className="list-item">
      <input type='checkbox' checked={props.task.completed} />
      <p>{props.task.text}</p>
    </div>
  )
}

export default ListItem