import { useState } from 'react'
import './App.css'

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState(['Sleep', 'Restart'])
  // setNewItem()
  // setTodoList()
  const inputLabel = 'New Item'
  const listHeader = "Todo List"
  return (
    <>
      <form className="new-item-form">
        <div className="">
          <label htmlFor='item' className="">{inputLabel}</label>
          <input id="item" value={newItem} onChange={e => setNewItem(e.target.value)} className="" />
        </div>
      </form> 
      <h1>{listHeader}</h1>
      <div className="todo-list">
        <ul>
          {todoList.map((todo) => <li key={todo.id}>{todo}</li>)}
        </ul>
      </div>
    </>
  )
}
