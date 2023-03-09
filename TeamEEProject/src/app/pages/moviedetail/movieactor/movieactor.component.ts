import { Component, Input } from '@angular/core';
import { movieCredit } from 'src/app/movies.service';

@Component({
  selector: 'app-movieactor',
  templateUrl: './movieactor.component.html',
  styleUrls: ['./movieactor.component.css']
})
export class MovieactorComponent {
  @Input() actor!: movieCredit;
}
