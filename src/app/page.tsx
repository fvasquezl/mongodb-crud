import { connectDB } from "@/utils/mongoose"
import Task from "@/models/Task"
import TaskCard from '@/components/TaskCard'



const loadTasks = async () => {
  connectDB
  const tasks = await Task.find()
  return tasks
}


const HomePage = async () => {
  const tasks = await loadTasks()
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index}></TaskCard>
      ))}
    </div>
  )
}

export default HomePage
