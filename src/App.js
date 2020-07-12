import React from 'react';
import Todo from './components/Todo'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      name: "Ryan"
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        <h1>Hello {this.state.name}</h1>
        <h2>Welcome to your Todo App!</h2>
        <Todo/>
      </div>
    );
  }
}

export default App;
