import React from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ListItem from './components/ListItem'
import todoData from './todoData'
import './styles/styles.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        } 
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const taskComponent = this.state.todos.map(task => 
      <ListItem key={task.id} task={task} handleChange={this.handleChange} />
    )
  
    return (
      <div className="App">
        <Header />
        {taskComponent}
        <Footer />
      </div>
    )
  }
}

export default App;
