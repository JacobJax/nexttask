"use client"

import { useTransition } from "react"
import { deleteTask } from "../actions"

export default function DeleteButton({ id }: any) {
   let [isPending, startTransition] = useTransition()

   return(
      <button className="text-red-500 text-sm p-1 hover:bg-red-400 hover:text-red-800 rounded-sm" onClick={ () => startTransition(() => deleteTask(id))}>Delete</button>
   )
}