import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton';

let message = "Hello React!";

function Hello() {
  return <h1>{message} {20 + 3} {Date.now()}</h1>
}
// function component
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <MyButton />
    </div>
  )
}

export default App
