import { useState } from 'react'
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)
  const inputLabel = 'New Item'
  const listHeader = "Todo List"
  return (
    <>
     <form className="new-item-form">
      <div className="">
        <label htmlFor='item' className="">{ inputLabel }</label>
        <input id="item" className="" />
      </div>
      </form> 
      <h1>{}</h1>
      <div className="todo-list">
        
      </div>
    </>
  )
}
