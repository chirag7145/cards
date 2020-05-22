import React from 'react';
import './App.css';
import Top from './components/Top';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className='mt-5 container'>
      <Top />
      <div className='row'>
        <div className='col-md-4'>
          <Left />
        </div>
        <div className='col-md-8'>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
