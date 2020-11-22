import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    /**
     * Because we precised the TaskService type,
     * an instance of TaskService will be injected
     * for two reasons :
     * 1) TaskService class has the Injectable decorator
     * 2) TaskService belongs to the TaskController's module 
     */
    constructor(private tasksService: TasksService){}

    @Get() /** By default "/" route */
    getAllTasks()
    {   
        return this.tasksService.getAllTasks();
    }

    @Post("/test")  /**Decorate body object in order to tell that it is the request's body, it's also possible to designate the key to retrieve directly the value*/
    testPost(@Body("description") description: string)
    {
        console.log('body',description)
    }

    @Post()
    createTask(@Body("title") title:string, @Body("description") description:string)
    {
        return this.tasksService.createTask(title,description)
    }
}
