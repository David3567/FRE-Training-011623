import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { AddTodoDto } from './dto/add-todo.dto';
import { EditTaskDto } from './dto/edit-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { QueryTodoDto } from './dto/query-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async getAllTasks(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }

  async findTaskById(id: string): Promise<Todo> {
    const todo = await this.todosRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  async queryTasks({ completed, queryTitle }: FilterTasksDto): Promise<Todo[]> {
    let tasks = await this.getAllTasks();

    if (completed) {
      tasks = tasks.filter((task) => task.completed === completed);
    }
    if (queryTitle) {
      tasks = tasks.filter((task) => task.title.includes(queryTitle));
    }

    return tasks;
  }

  async editTask(id: string, editTaskDto: EditTaskDto): Promise<Todo> {
    const task = await this.findTaskById(id);

    Object.entries(editTaskDto).forEach(([key, val]) => {
      task[key] = val;
    });
    await this.todosRepository.save(this.todosRepository.create(task));

    return task;
  }

  async createTask({ title }: AddTodoDto): Promise<Todo> {
    const newTask: Todo = {
      id: uuid(),
      userId: 4,
      completed: false,
      title,
    };
    const task = this.todosRepository.create(newTask);
    await this.todosRepository.save(task);

    return task;
  }

  async deleteTask(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
