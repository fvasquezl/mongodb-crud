
import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'


export const GET = async () => {
    connectDB()
    const tasks = await Task.find()
    return NextResponse.json(tasks)
}


export const POST = async (request) => {
    try {
        const data = await request.json() // get information from request
        const newTask = new Task(data) // create task object
        const savedTask = await newTask.save()  //save the info
        return NextResponse.json(savedTask) //retornar la respuesta de lo que se creo

    } catch (error) {
        return NextResponse.json(error.message, { status: 400 })
    }
}
