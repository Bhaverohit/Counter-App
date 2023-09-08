import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function increaseHandler(){
    setCount(count+1);
  }

  function decreaseHandler(){
    setCount(count-1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='container'>
      <div className='heading'>Increment & Decrement Counter</div>
      
      <div className='background'>
        <div className='plus' onClick={increaseHandler}>
          <button className='btn'>+</button>
        </div>
        <div className='content'>{count}</div>
        <div className='minus' onClick={decreaseHandler}>
          <button className='btn'>-</button>
        </div>
      </div>
      
      <div><button className='reset' onClick={resetHandler}>Reset</button></div>

    </div>
  );
}

export default App;
