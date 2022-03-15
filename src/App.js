import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommanded from './Recommanded';


function App() {
  return (
    <div className="App">
      {/* <h1>Hello world, let's build youtube clone</h1> */}
      <Header />
      <div className='app__page'>
      <Sidebar />
      <Recommanded />
      </div>
    </div>
  );
}

export default App;
