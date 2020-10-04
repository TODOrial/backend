import { Request, Response } from "express";
import validator from "../helpers/validator";
import { TaskModel } from "../models";

export default class TaskController {
    static async index(req: Request, res: Response) {
        // const offset: number = parseInt((req.query.offset || 0) as string);
        // const limit: number = parseInt((req.query.limit || 10) as string);

        // um dia isso sera paginado... um dia...
        // const tasks = await TaskModel.find({}, null, { skip: offset, limit: limit }).catch(() => undefined);

        const tasks = await TaskModel.find({}).catch(() => undefined);

        const taskCount = await TaskModel.countDocuments();

        return res.send({
            // offset,
            // limit,
            last: taskCount,
            results: tasks,
        });
    }

    static async show(req: Request, res: Response) {
        const { id } = req.params;

        const task = await TaskModel.findById(id).catch(() => undefined);

        if (!task) {
            return res.status(404).send({ error: "Task not found!" });
        }

        return res.send(task);
    }

    static async store(req: Request, res: Response) {
        const validation = await validator.validate("task", req.body);

        if (!validation) {
            return res.status(400).send({ error: validator.errorsText() });
        }

        const newTask = await TaskModel.create(req.body);

        return res.send(newTask);
    }

    static async update(req: Request, res: Response) {
        const validation = await validator.validate("task", req.body);

        if (!validation) {
            return res.status(400).send({ error: validator.errorsText() });
        }

        const { id } = req.params;

        const updatedTask = await TaskModel.findOneAndUpdate({ _id: id }, req.body, { new: true }).catch(() => undefined);

        if (!updatedTask) {
            return res.status(404).send({ error: "Task not found!" });
        }

        return res.send(updatedTask);
    }

    static async destroy(req: Request, res: Response) {
        const { id } = req.params;

        await TaskModel.findByIdAndDelete(id).catch(() => {
            return res.status(404).send({ error: "Task not found!" });
        });

        res.sendStatus(200);
    }
}
