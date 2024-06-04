import mongoose from "mongoose";

export interface Task extends mongoose.Document {
    task: String;
}

const TaskSchema = new mongoose.Schema<Task>({
    task: {
        type: String,
        required: [true, "Please Provide task Field"],
        maxlength: [60, "Task cannot be more than 60 characters"],
    },
});

export default mongoose.models.Task || mongoose.model<Task>("Task", TaskSchema);
