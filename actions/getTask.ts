"use server"

import prisma from "@/lib/db"


export const getTask =async () => {
    return await prisma.task.findMany()

}

