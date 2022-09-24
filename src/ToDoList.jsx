import React from 'react'
import Header from "./components/ToDoList/Header"
import List from "./components/ToDoList/List"


function ToDoList() {
  return (
    <div className="ToDoList">
        <Header/>
        <List/>
    </div>
  )
}

export default ToDoList