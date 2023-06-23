"use server"

import { prisma } from "@/db"
import { revalidatePath } from "next/cache"

export async function deleteTask(id: string) {
   const task =  await prisma.task.findFirst({where: { id }})
   await prisma.task.delete({where: { id: task?.id}})
   revalidatePath('/')
}