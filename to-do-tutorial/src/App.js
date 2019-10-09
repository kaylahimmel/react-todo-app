import React from 'react';
import './styles/styles.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import List from '../src/components/List'

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
