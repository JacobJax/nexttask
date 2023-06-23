import { prisma } from "@/db"
import TaskItem from "./components/TaskItem"
import NotaskContainer from "./components/NotaskContainer"

function getTasks() {
  return prisma.task.findMany()
}

async function toggleTask(id: string, completed: boolean) {
  "use server"

  await prisma.task.update({ where: { id }, data: { completed }})
}


export default async function Home() {
  const tasks = await getTasks()

  return (
    <main className="p-8">
      <div className="home-header text-center my-4">
        <h1 className="text-2xl font-bold my-1">Your Tasks</h1>
        <p className="text-sm text-gray-400">View tasks you created</p>
      </div>
      <div className="tasks-container">
        {tasks.length > 0 ?
          <ul className="my-4 max-w-4xl mx-auto md:px-8 py-8">
            {tasks.map(task => (
              <TaskItem key={ task.id} {...task} toggleTask={ toggleTask } />
            ))}
          </ul>
        : <NotaskContainer />}
      </div>
    </main>
  )
}
