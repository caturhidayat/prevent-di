import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const database =
    process.env.DATABASE_URL ||
    "mongodb+srv://mongodb:mabvGWTakVDWfp62@prevent-di.suh362r.mongodb.net/?retryWrites=true&w=majority&appName=prevent-di";

// Connect to Database
async function connectToDatabase() {
    await mongoose.connect(database);
}

// Task Schema
const taskSchema = new mongoose.Schema({
    task: String,
});

// Model
const taskModel = mongoose.model("task", taskSchema);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // Process a POST request
        console.log("OK")
        // const taskData = req.body.task;
        // try {
        //     const data = new taskModel({ task: taskData });

        //     await data.save();

        //     res.status(200).json({ message: "OK" });
        // } catch (error) {
        //     console.log("Error");
        // }
    } 
}
