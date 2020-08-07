import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
   super();
  
   this.state = {
     todoData
   }
   
  }
   
  toggleItem = (id) => {

   this.setState({
     todoData: this.state.todoData.map(item => {
      
      if(id === item.id){
        return {

          ...item,
          completed: !item.completed
        };
        
      }
       return item;
     })
   })
  }
  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newItem]
    })
  
   }
 
   clearPurchased = (e) => {
      e.preventDefault();
      this.setState({
        todoData: this.state.todoData.filter(item => !item.completed)
      })

   }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        toggleItem={this.toggleItem} 
        todoData={this.state.todoData}
        clearPurchased={this.clearPurchased}
        />
        <TodoForm >
        addItem={this.addItem} 
       </TodoForm>
      </div>
    );
  }
}

export default App;
