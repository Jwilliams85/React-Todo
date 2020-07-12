import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean House',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash Car',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash Laundry',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state ={
      name: "Janneth",
       todo:todo
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
addTodo = (e, item) => {
  e.preventDefault();
  const newTodo = {
    task: item,
    id:Date.now(),
    completed: false
  };
  this.setState({
    todo: [...this.state.todo, newTodo]
  });
}

toggleItem = itemId => {
  console.log(itemId);
  this.setState({
    todo:this.state.todo.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    })
  })
}
  clearCompleted = e => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };
  
  render() {
    console.log('rendering...')
    return (
      <div className = "App">
        <div className ="header">
        <h1>Hello {this.state.name}</h1>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
        <TodoForm></TodoForm>
        </div>
      </div>
    );
  }
}

export default App;
