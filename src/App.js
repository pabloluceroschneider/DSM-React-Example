import React, { useState, useRef } from 'react';
import './App.css';

const Welcome = props => {
  const { name } = props;
  const [ hello, setHello ] = useState(true)

  return (
    <div>
      <button onClick={ () => {setHello(!hello)} }> 
        { hello ? "Say Goodbye" : "Say Hi"}
      </button>
      <br/><br />
      {
        name ? 
        <>
          <span> { hello ? "Hi" : "Bye"} </span>
          <span> { name } </span>
        </>
        : null
      }
    </div>
  )
}

const App = () => {
  const [name, setName] = useState(null)
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus();
  }

  const handleInput = e => {
    e.preventDefault();
    setName( e.target.value );
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Focus on input</button> <br />
        <input onChange={handleInput} ref={inputRef} placeholder="Name"></input> <br />
        <Welcome name={name} />
      </header>
    </div>
  );
}

export default App;
