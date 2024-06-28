"use server"

import prisma from "@/lib/db"
import { formSchema } from "@/schemas/formSchema"
import { z } from "zod"



export const createTask =async (values: z.infer<typeof formSchema>) => {
 await prisma.task.create({

    
    data:<any> {
        
        text: values.name,
        isCompleted: false

      },
 })
}

