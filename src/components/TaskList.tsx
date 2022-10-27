import { Task } from "../interfaces/Task"
import TaskCard from "./TaskCard"

interface Props {
    tasks: Task[]
    deleteTask: (id:number) =>void
}


export default function TaskList({tasks, deleteTask}: Props) {
  return (
    <main className=" p-2 mt-8 w-full">
         {
        tasks.map(task=> (
          <TaskCard  key={task.id} task={task} deleteTask={deleteTask}  />
        ))
      }
    </main>
  )
}
