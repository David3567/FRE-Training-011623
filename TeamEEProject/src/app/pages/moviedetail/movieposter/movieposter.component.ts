import { Component, Input } from '@angular/core';
import { moviePoster } from 'src/app/movies.service';

@Component({
  selector: 'app-movieposter',
  templateUrl: './movieposter.component.html',
  styleUrls: ['./movieposter.component.css']
})
export class MovieposterComponent {
  @Input() poster!: string;
}
