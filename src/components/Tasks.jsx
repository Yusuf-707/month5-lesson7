import React from 'react'

export default function tasks({ tasks }) {
    return (
        <div>
            {
                tasks?.map((task) => {
                    <div key={task.id}>
                        <p>Задача : {task.name}</p>
                        <p>Активность: {task.status ? "Активна" : "Не активная"}</p>
                        <p>дата: {task.data}</p>
                    </div>
                })
            }
        </div>
    )
}
