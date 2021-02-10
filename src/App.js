import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/button';
//import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState('');

  const numbersArray = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['3', '2', '1'],
    ['0'],
    ['00'],
  ];

  const equal = (event) => {
    setInput(eval(input));
  };

  const percentage = (event) => {
    setInput(input + '/100');
  };

  return (
    <div className='App'>
      <h1>
        <span style={{ color: '#ff6ec7' }}>My</span>
        <span style={{ color: 'orange' }}> Calculator</span>
        <span style={{ color: '#ff6ec7' }}> App</span>
      </h1>
      <nav>
        <h1 className='input'>{input}</h1>
      </nav>
      {/*here i am creating the new features, this may break the app so bye*/}
      <div className='flexContainer'>
        {numbersArray.map((subArray) =>
          subArray.map((i) => (
            <Button inputFunc={setInput} prevStateValue={input} value={i} />
          ))
        )}
      </div>
      <button onClick={(event) => setInput('')} className='operators'>
        <h2 className='clear'>{'C'}</h2>
      </button>
      <button
        onClick={(event) => setInput(input.slice(0, input.length - 1))}
        className='operators'
      >
        <h2 className={'clear'}>{'<--'}</h2>
      </button>
      <button onClick={percentage} className='operators'>
        <h2 className='maths'>%</h2>
      </button>
      <button onClick={equal} className='operators'>
        <h2 style={{ color: '#00ffff' }} className='clear'>
          =
        </h2>
      </button>
      <button onClick={(event) => setInput(input + '+')} className='operators'>
        <h2 className='maths'>+</h2>
      </button>
      <button onClick={(event) => setInput(input + '-')} className='operators'>
        <h2 className='maths'>--</h2>
      </button>
      <button onClick={(event) => setInput(input + '*')} className='operators'>
        <h2 className='maths'>x</h2>
      </button>
      <button onClick={(event) => setInput(input + '.')} className='operators'>
        <h2 className={'num'}>{'.'}</h2>
      </button>
      <button onClick={(event) => setInput(input + '/')} className='operators'>
        <h2 className='maths'>/</h2>
      </button>
    </div>
  );
}

export default App;
