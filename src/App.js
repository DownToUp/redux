import React, { Component } from 'react';
import {connect} from 'react-redux'
import TodoList from './Components/TodoList';
import AddTask from './Components/AddTask';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <h1>Here is a list of what you should do</h1>
        </div>
        <TodoList
          todos={this.props.tasks}
          handleDelete={this.props.deleteTask}
          handleDone={this.props.doneTask}
        />
        <AddTask handleAdd={this.props.addTask} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    id: state.id,
    description: state.description,
    done: state.false,
  }
}
function mapDispatchToProps (dispatch){
  return {
    Add:()=>dispatch({type:'ADD'}),
    Del:() =>dispatch({type:'DEL'}),
    Done:() => dispatch({type:'DONE'})
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
