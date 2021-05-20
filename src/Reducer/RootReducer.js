const initstate = [
     {
        id: 1,
        description: 'Buy Tabac !',
        done: false,
      },
      {
        id: 2,
        description: 'Buy more Tabac !',
        done: false,
      },
      {
        id: 3,
        description: 'Save the world !',
        done: false,
      }
    ]
  

const reducer = (state=initstate ,action) =>{
    if(action.type==="ADD"){
        const addTask = (task) => this.setState({ tasks: [...this.state.tasks, task] });
    }
    else if (action.type==="DEL"){
       const deleteTask = (id) =>
        this.setState({
          tasks: this.state.tasks.filter((el) => el.id !== id),
        });
    }
    else if(action.type==="DONE"){
       const doneTask = (id) =>
        this.setState({
          tasks: this.state.tasks.map((el) =>
             el.id === id ? { ...el, done: !el.done } : el
             ),
        });
    } else
    return state
}

export default reducer