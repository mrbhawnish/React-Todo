// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./Todo";

const TodoList = (props) => {

   return (
       <div>
           {props.todoData.map(item => (
               <TodoItem key={item.id} todoData={item} toggleItem={props.toggleItem}></TodoItem>
          ))}
          <button className="clear-btn" onClick={props.clearPurchased}>Clear completed</button>
       </div>
   )
}

export default TodoList;
