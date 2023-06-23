"use client"

import DeleteButton from "./DeleteButton"

type TaskItemProps =  {
   id: string,
   title: string,
   description: string,
   completed: boolean,
   toggleTask: (id: string, completed: boolean) => void
}

export default function TaskItem({id, title, description, completed, toggleTask}: TaskItemProps) {
   return (
      <li className="p-4 border rounded-md my-2 border-gray-300  hover:bg-slate-800 flex items-center gap-4 justify-between">
         <div className="task-item-text">
            <div className="task-item-title flex gap-2">
               <input 
                  id={ id } 
                  type="checkbox"
                  className="cursor-pointer peer"
                  defaultChecked = { completed } 
                  onChange={ e => toggleTask(id, e.target.checked) }
               />
               <label htmlFor={ id } className="peer-checked:line-through peer-checked:text-gray-300 cursor-pointer">{ title }</label>
            </div>
            <div className="task-item-description">
               <p className="text-sm text-gray-400 ml-5">{ description }</p>
            </div>
         </div>
         <div className="task-action">
            <DeleteButton id={id} />
         </div>
      </li>
   )
}