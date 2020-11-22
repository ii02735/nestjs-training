import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateTaskDto } from './dto/create-task.dto';
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

    @Post()            //Replacing paramaters by their Dto (describer object that will receive the parameters)
    createTask(@Body() createTaskDto:CreateTaskDto): Task
    {
        return this.tasksService.createTask(createTaskDto)
    }

    @Get('/:id')
    getTaskById(@Param("id") id: string): Task
    {
        return this.tasksService.getTaskById(id)
    }

    @Delete("/:id")
    deleteTask(@Param("id") id: string)
    {
        this.tasksService.deleteTask(id);
        return { "message": `Task ${id} deleted successfully !` }
    }
}
