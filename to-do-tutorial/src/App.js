import React from 'react';
import './styles/styles.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ListItem from './components/ListItem'
import todoData from './todoData'

class App extends React.Component {
  render() {
    const taskComponent = todoData.map(task => {
      return (
        <div>
          <ListItem key={task.id} task={task} />
        </div>
      )
    })
  
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
