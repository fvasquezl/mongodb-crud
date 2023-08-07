import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {

    if (conn.isConnected) return

    const db = await connect('mongodb://localhost:27017/nextmongocrud')
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}
connection.on('connected', () => {
    console.log("mongodb is connected")
})

connection.on('error', (err) => {
    console.log("mongodb is connected error", err)
})