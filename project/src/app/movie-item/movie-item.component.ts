import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  imgUrl: string = "https://image.tmdb.org/t/p/w440_and_h660_face"
  @Input('movie') movie: Movie = {
    "adult": false,
    "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
    "belongs_to_collection": {
    "id": 94602,
    "name": "Puss in Boots Collection",
    "poster_path": "/anHwj9IupRoRZZ98WTBvHpTiE6A.jpg",
    "backdrop_path": "/feU1DWV5zMWxXUHJyAIk3dHRQ9c.jpg"
    },
    "budget": 90000000,
    "genres": [
    {
    "id": 16,
    "name": "Animation"
    },
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 10751,
    "name": "Family"
    },
    {
    "id": 14,
    "name": "Fantasy"
    }
    ],
    "homepage": "https://www.dreamworks.com/movies/puss-in-boots-the-last-wish",
    "id": 315162,
    "imdb_id": "tt3915174",
    "original_language": "en",
    "original_title": "Puss in Boots: The Last Wish",
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "popularity": 2887.698,
    "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "production_companies": [
    {
    "id": 33,
    "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
    "name": "Universal Pictures",
    "origin_country": "US"
    },
    {
    "id": 521,
    "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png",
    "name": "DreamWorks Animation",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2022-12-07",
    "revenue": 423000000,
    "runtime": 103,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    },
    {
    "english_name": "Spanish",
    "iso_639_1": "es",
    "name": "Español"
    }
    ],
    "status": "Released",
    "tagline": "Say hola to his little friends.",
    "title": "Puss in Boots: The Last Wish",
    "video": false,
    "vote_average": 8.478,
    "vote_count": 3914
    };

    ngOnInit() {
      this.movie.poster_path = this.imgUrl + this.movie.poster_path;
    }
  
}
