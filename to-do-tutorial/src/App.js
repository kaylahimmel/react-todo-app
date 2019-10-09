import React from 'react';
import './styles/styles.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ListItem from './components/ListItem'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <Footer />
    </div>
  );
}

export default App;
