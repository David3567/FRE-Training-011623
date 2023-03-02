import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
