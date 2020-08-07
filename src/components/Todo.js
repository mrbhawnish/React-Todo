import React from "react";
import "./Todo.css"

 const todo = (props) => {

 return(
   <div className={`item${props.todoData.completed ? " purchased" : ""}`} 
   onClick={() => props.toggleItem(props.todoData.id)}>
   <h3>{props.todoData.task}</h3>
 </div>
 );
};

export default todo;