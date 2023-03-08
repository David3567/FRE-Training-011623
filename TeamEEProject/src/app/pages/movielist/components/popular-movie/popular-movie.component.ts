import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService, popularMovie } from 'src/app/movies.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent {
  @Input() movie!: popularMovie;
  @Input() idx!: number;
  @Output() idxEmiter = new EventEmitter();

  ngOnInit():void {
    
  }
  constructor(private movieService:MoviesService){

  }

  onHover(){
    this.idxEmiter.emit(this.idx)
  }
}
