import { prisma } from "@/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function createTask(data: FormData) {
   "use server"

   const taskTitle = data.get("taskTitle")?.valueOf()
   const taskDescription = data.get("textDescription")?.valueOf()
 
   if(taskTitle.length === 0 || taskDescription.length === 0) {
      throw new Error("Invalid Entry")
   }

   await prisma.task.create({ data: {title: taskTitle, description: taskDescription, completed: false}})

   revalidatePath('/')
   redirect('/')
}

export default function New() {
   return(
      <div className="new-task-container max-w-4xl mx-auto px-8 py-4">
         <div className="home-header text-center my-4">
            <h1 className="text-2xl font-bold my-1">New Task</h1>
            <p className="text-sm text-gray-400">Add a new task</p>
         </div>
         <form action={ createTask } className="py-4 flex flex-col">
            <label htmlFor="taskTitle" className="text-sm">Task title:</label>
            <input type="text" name="taskTitle" id="taskTitle" className="mb-2 rounded-md bg-transparent border border-gray-500 p-2" required/>
            <label htmlFor="taskDescription" className="text-sm">Task Description:</label>
            <textarea name="textDescription" id="textDescription" cols={30} rows={10} className="rounded-md bg-transparent border border-gray-500 p-2" required></textarea>
            <button type="submit" className="bg-gray-800 p-2 rounded-md my-2">Add task</button>
         </form>
      </div>
   )
}