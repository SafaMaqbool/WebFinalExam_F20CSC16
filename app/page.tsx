"use client"
import { ProfileForm } from "./component/Form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getTask } from "@/actions/getTask";
import { deleteTask } from "@/actions/deleteTask";
import { FaHeart } from "react-icons/fa";

export default function Home() {

  // const cardsInfo = [
  //   {
  //     id: 1,
  //     text: "This is sample task 1"
  //   },
  //   {
  //     id: 2,
  //     text: "This is sample task 2"
  //   },
  //   {
  //     id: 3,
  //     text: "This is sample task 3"
  //   }

  // ]

  const [cardsInfo, setCardInfo]=useState<any>()

  useEffect(()=>{
    getTask().then((values)=>{
      setCardInfo(values)
    })

  },[cardsInfo])
  return (
    <main className=" m-4 p-4">
      <div className="grid grid-cols-3 gap-6">
        <div className="border border-black rounded-lg bg-blue-500 flex w-3/4 flex-col justify-center items-center">
          <p className="font-bold text-2xl">Total Tasks</p>
          <p className="text-6xl">04</p>
        </div>
        <div className="border border-black rounded-lg bg-green-500 w-3/4 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">Completed</p>
          <p className="text-6xl">02</p>
        </div>
        <div className="border border-black rounded-lg bg-orange-300  w-3/4 flex flex-col justify-center items-center">
          <p className="font-bold text-2xl">Pending</p>
          <p className="text-6xl">02</p>
        </div>

      </div>
   
       <div className="flex m-4">
      <ProfileForm />
      </div>

      <div className="flex flex-col gap-4 m-2 p-4">

      {
            cardsInfo?.map((cardsInfo:any) => {
              return (
                <Card className="gap-y-4 border border-black rounded-lg flex justify-between items-center m-2" key={cardsInfo.id}>
                  
                  <CardContent>
                    <p>{cardsInfo.text}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center items-center gap-4 m-2">
                  
                    <Button className="gap-2 rounded-lg "><FaHeart size={20} />
                    Mark as completed</Button>
                    <Button variant={'ghost'} ><MdDelete size={35} onClick={()=>(deleteTask(cardsInfo.id))} /></Button>
                  </CardFooter>
                </Card>


              )
            })
          }
          </div>

          <div className=" flex justify-between">
            <Button className="invisible">Previous</Button>
            <Button>Next</Button>
          </div>
    </main>
  );
}
