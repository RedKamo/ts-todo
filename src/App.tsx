import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { Task } from './interfaces/Task'


const  App = ()=> {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: 'Create Todo tasks to practice TS',
    description: 'This is the description of the task that I will be working on...',
    completed: false
  }])

  const createTask = (task: Task) => {
    const newId:number = tasks.length + 1
    setTasks([...tasks, {...task, id: newId}])
  }

  const deleteTask = (id: number)=> {
    setTasks(tasks.filter(task => task.id !== id ))
  }

  return (
    <main className="flex border-2 border-red-100 justify-center  bg-slate-800 min-h-screen p-2">
    <section className=' text-slate-200   w-full p-4'>
    <h1 className='font-bold text-4xl py-20 text-center'>React + Ts</h1>
    <TaskForm createTask={createTask} />
    <TaskList deleteTask={deleteTask} tasks={tasks}/>
    </section>
    </main>
  )
}

export default App
