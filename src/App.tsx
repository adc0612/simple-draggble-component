import React from 'react';
import './App.css';
import Box from './components/Box';
import Draggable from './components/Draggable';

function App() {
  return (
    <div className='App'>
      <Draggable component={<Box text='box' />}></Draggable>
    </div>
  );
}

export default App;
