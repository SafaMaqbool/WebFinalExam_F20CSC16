"use server"

import prisma from "@/lib/db"



export const deleteTask = async (id: string) => {
 await prisma.task.delete({
    where:{id:id}
 })
}

