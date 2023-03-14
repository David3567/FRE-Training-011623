import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddTodoInput = {
  completed: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['Float'];
};

export type AddTodoOutput = {
  __typename?: 'AddTodoOutput';
  todo: Todo;
};

export type DeleteTodoInput = {
  id: Scalars['Float'];
};

export type DeleteTodoOutput = {
  __typename?: 'DeleteTodoOutput';
  todo: Todo;
};

export type GetTodosOutput = {
  __typename?: 'GetTodosOutput';
  todos: Array<Todo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: AddTodoOutput;
  deleteTodo: DeleteTodoOutput;
};

export type MutationAddTodoArgs = {
  input: AddTodoInput;
};

export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput;
};

export type Query = {
  __typename?: 'Query';
  getTodos: GetTodosOutput;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  userId: Scalars['Float'];
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodosQuery = {
  __typename?: 'Query';
  getTodos: {
    __typename?: 'GetTodosOutput';
    todos: Array<{
      __typename?: 'Todo';
      id?: string | null;
      completed: boolean;
      userId: number;
      title: string;
    }>;
  };
};

export type AddTodoMutationVariables = Exact<{
  addTodoInput: AddTodoInput;
}>;

export type AddTodoMutation = {
  __typename?: 'Mutation';
  addTodo: {
    __typename?: 'AddTodoOutput';
    todo: {
      __typename?: 'Todo';
      id?: string | null;
      userId: number;
      completed: boolean;
      title: string;
    };
  };
};

export const GetTodosDocument = gql`
  query GetTodos {
    getTodos {
      todos {
        id
        completed
        userId
        title
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetTodosGQL extends Apollo.Query<
  GetTodosQuery,
  GetTodosQueryVariables
> {
  override document = GetTodosDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const AddTodoDocument = gql`
  mutation AddTodo($addTodoInput: AddTodoInput!) {
    addTodo(input: $addTodoInput) {
      todo {
        id
        userId
        completed
        title
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AddTodoGQL extends Apollo.Mutation<
  AddTodoMutation,
  AddTodoMutationVariables
> {
  override document = AddTodoDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
