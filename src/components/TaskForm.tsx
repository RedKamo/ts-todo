import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "../interfaces/Task"


interface Props {
  createTask: (task: Task)=> void
}

const initialState = {
  title: '',
  description: ''
}

export default function TaskForm({createTask}: Props) {

  const [task, setTask] = useState(initialState)

  const handleInputChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log(e.target.value)
    setTask({...task, [name]: value})
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    createTask(task)
    setTask(initialState)
  }


  return (
    <main className="border-2 border-slate-600 p-4 border-solid max-w-md m-auto">
        <h1 className=" text-3xl">Add task</h1>
        <form onSubmit={handleNewTask} className="flex flex-col items-center py-2 text-slate-500">
            <input
            className="my-2 p-2 w-full "
            type="text"
            placeholder="Write your task title"
            name="title"
            onChange={handleInputChange}
            value={task.title} />
            <textarea
            className="my-2 p-2 w-full"
            name="description"
            rows={2}
            placeholder="Write your task description"
            onChange={handleInputChange}
            value={task.description}></textarea>
            <button className="bg-yellow-300 py-2 my-2 rounded-md w-full max-w-sm ">Add</button>
        </form>
    </main>
  )
}
