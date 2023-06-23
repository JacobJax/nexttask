import Link from "next/link";

export default function NotaskContainer() {
   return (
      <div className="no-task-container max-w-4xl mx-auto border border-2 border-gray-300 bg-slate-800 rounded-md my-8 p-8 grid place-items-center">
         <h1 className="text-4xl font-bold my-2">No Tasks Yet</h1>
         <Link href='/task/new' className="underline">Add a new task &rarr;</Link>
      </div>
   )
}