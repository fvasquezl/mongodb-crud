import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'

export const GET = async (request, { params }) => {
    try {
        const { id } = params
        connectDB()
        const taskFound = await Task.findById(id)

        if (!taskFound)
            return NextResponse.json({
                message: "Task not found"
            }, {
                status: 404
            })

        return NextResponse.json(taskFound)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params
        const taskDeleted = await Task.findByIdAndDelete(id)

        if (!taskDeleted) {
            return NextResponse.json({
                message: "Task not found"
            }, {
                status: 404
            })
        }

        return NextResponse.json(taskDeleted)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 404
        })
    }

}

export const PUT = async (request, { params }) => {
    try {
        const { id } = params
        const data = await request.json()
        const taskUpdated = await Task.findByIdAndUpdate(id, data, {
            new: true
        })

        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400
        })
    }
}