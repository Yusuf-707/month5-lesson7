import axios from "axios"

export default function Tasks({tasks, getTasks}) {
    const deleteTask = (id) =>{
        axios.delete(`http://localhost:8000/tasks/${id}`)
        .then(() => {
            getTasks()
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        {
            tasks?.map((task) => (
                <div key={task.id}>
                    <p>Задача: {task.text}</p>
                    <p>Активность: {String(task.status) === 'true' ? 'Активна' : 'Не активная'}</p>
                    <p>дата: {task.date}</p>
                    <p>Категория: {task.category}</p>
                    <button onClick={() => deleteTask(task.id)}>DELETE</button>
                </div>
            ))
        }
    </div>
  )
}
