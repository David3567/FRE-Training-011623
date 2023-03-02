import { Type } from 'class-transformer';
import { IsEnum } from 'class-validator';

export class EditTaskDto {
  @Type(() => Boolean)
  completed: boolean;

  title: string;
}
