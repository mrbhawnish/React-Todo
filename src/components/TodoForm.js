import React from "react";


class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: ""
    }
  }

  handleChanges = (e) => {

    this.setState({
    item: e.target.value
    })

   }
 
   submitHandler = (e) => {
     e.preventDefault();
    this.props.addItem(this.state.item)
    this.setState({
      item: ""
      })
   } 

render() {
  return (
    <form onSubmit={this.submitHandler}>
    <input
    type="text"
    name="task"
    value={this.state.item}
    onChange={this.handleChanges}
    />
   <button type="submit">Add Todo</button>
    </form>
     );
   }
  }

export default TodoForm;