import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

function App() {
  const [task, setTask] = useState([]);
  
  const getTasks = () => {
    axios.get('http://localhost:8000/tasks')
    .then(({data}) => {setTask(data)})
    .catch((e) => console.log(e))
  }

  useEffect(() => {
    getTasks();
  }, [])
  return (
    <>
      <CreateTask getTasks={getTasks} />
      <h1>Задачи</h1>
      <Tasks tasks={task} getTasks={getTasks} />
    </>
  )
}

export default App
