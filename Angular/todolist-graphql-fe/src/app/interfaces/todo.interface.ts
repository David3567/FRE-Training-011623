export interface Todo {
  id?: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todolist: Todo[];
  err?: string;
}