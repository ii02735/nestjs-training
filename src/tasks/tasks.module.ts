import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService] //Elements that can be injected, services can be providers, but not all providers are services
})
export class TasksModule {}
