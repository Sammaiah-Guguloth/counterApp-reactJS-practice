import { useState  } from 'react';

import './App.css';

function App() {

  const [count , updateCount] = useState(0)

  function incrementHandler() {
    updateCount(count+1);
  }

  function decrementHandler() {
    updateCount(count-1)
  }

  function resetHandler() {
    updateCount(0);
  }

  return (<div className='bg-[#344151] w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
    
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h2 className='text-blue-700 text-2xl'>Increment & Decrement</h2>
      
      <div className='bg-white flex flex-row justify-around text-5xl w-[200px] rounded-sm text-gray-800 py-2 text-center'>
        <button onClick={incrementHandler} className='border-r-4 border-b-gray-700 text-center px-4'>
          +
        </button>
        <p className='border-r-4 border-b-gray-700 text-center px-4'>
          {count}
        </p>
        <button onClick={decrementHandler} className='px-4'>
          -
        </button>
      </div>

      <button onClick={resetHandler} className='text-white bg-blue-700 px-7 py-2 rounded-md'>
        Reset
      </button>

    </div>
    
  </div>)
    
}

export default App;
