"use server"
import dbConnect from "@/lib/db_connect";
import Task from "@/models/Task";

export default async function createTask(formData: FormData) {
    await dbConnect();
    try {
        const task = formData.get("task") as string;
        const data = new Task({ task });
        data.save();
    } catch (error) {}
}
