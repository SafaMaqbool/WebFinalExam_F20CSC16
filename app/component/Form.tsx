"use client"

import { formSchema } from "@/schemas/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTask } from "@/actions/createTask"

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createTask(values)
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-8 justify-center items-center gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
             
              <FormControl>
                <Input className="w-[1900px]" placeholder="Enter task here..." {...field} />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex gap-2" type="submit">Add Task <span><FaPlus />
        </span></Button>
      </form>
    </Form>
  )
}
