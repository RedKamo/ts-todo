import { Task } from "../interfaces/Task"
import { BsFillTrashFill } from 'react-icons/bs'

interface Props {
    task:Task
    deleteTask: (id:number)=> void
}

export default function TaskCard({task, deleteTask}: Props) {
    return (
    <main className="flex justify-between border-dashed border-2 border-slate-700 rounded mb-4 py-2">
        <p className=" px-4 text-6xl text-slate-500">{task.id}</p>
        <section className="flex flex-col w-full px-2">
        <h2 className="text-2xl">{task.title}</h2>
        <p className="pt-2 text-slate-300">{task.description}</p>
        </section>
        <button onClick={()=> task.id && deleteTask(task.id)} className="px-4 text-slate-400 text-2xl hover:text-red-400"><BsFillTrashFill /></button>
    </main>
    )
}
