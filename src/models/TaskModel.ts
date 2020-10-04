import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
