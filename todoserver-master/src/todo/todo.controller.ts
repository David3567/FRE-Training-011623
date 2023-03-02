import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dto/add-todo.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { Todo } from './entities/todo.entity';
import { EditTaskDto } from './dto/edit-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTasks(@Query() filterTasksDto: FilterTasksDto): Promise<Todo[]> {
    if (Object.keys(filterTasksDto).length) {
      return this.todoService.queryTasks(filterTasksDto);
    } else {
      return this.todoService.getAllTasks();
    }
  }
  @Get('/:id')
  findTaskById(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findTaskById(id);
  }

  @Post()
  createTask(@Body() createTodoDto: AddTodoDto): Promise<Todo> {
    return this.todoService.createTask(createTodoDto);
  }

  @Patch('/:id')
  editTask(
    @Param('id') id: string,
    @Body() editTaskDto: EditTaskDto,
  ): Promise<Todo> {
    return this.todoService.editTask(id, editTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.todoService.deleteTask(id);
  }
}
