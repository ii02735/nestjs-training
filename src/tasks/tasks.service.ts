import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from "uuid";
import { CreateTaskDto } from './dto/create-task.dto';
/**
 * A service is a class that must have
 * the BUSINESS LOGIC
 * Because in Controller, we must not
 * write a lot of code
 * Controllers are firstly destined to retrive and
 * send http requests.
 */
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks()
    {   
        //Make array immutable (very important) by returning a copy
        return this.tasks.slice();
    }

    createTask(createTaskDto:CreateTaskDto): Task {
        const {title,description} = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task)
        return task;

    }

    getTaskById(id: string): Task
    {
        return this.tasks.find(task => task.id === id);
    }

    deleteTask(id: string): void
    {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }


}
