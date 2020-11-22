import { Controller } from '@nestjs/common';
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
    constructor(private taskService: TasksService)
    {

    }
}
