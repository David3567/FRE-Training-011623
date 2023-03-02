import { Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class FilterTasksDto {
  @Type(() => Boolean)
  completed?: boolean;

  queryTitle?: string;
}

// * https://javascript.plainenglish.io/validate-and-transform-query-in-nestjs-4d04465fb004
