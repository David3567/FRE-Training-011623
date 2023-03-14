import { Component } from '@angular/core';
import { Apollo, gql, Subscription } from 'apollo-angular';
import { AddTodoGQL } from './services/todoGraphql.service';

const GET_TODOS = gql`
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private querySubscription!: Subscription;

  constructor(private readonly apollo: Apollo, private readonly addtodoGql: AddTodoGQL) { }

  ngOnInit(): void {
    // this.apollo
    //   .watchQuery<any>({
    //     query: GET_TODOS
    //   })
    //   .valueChanges.subscribe((data) => {
    //     console.log(data.data.getTodos.todos);
    //   });

    this.addtodoGql.mutate({
      addTodoInput: {
        completed: false,
        userId: 34,
        title: 'testtitle'
      }
    }).subscribe(data => console.log(data.data?.addTodo.todo));

  }
}
