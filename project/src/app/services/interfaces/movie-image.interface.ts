export interface MovieImage {
    backdrops: Backdrop[];
    id: number;
    logos: Logo[];
    posters: Poster[];
  }
  
  export interface Backdrop {
    aspect_ratio: number;
    height: number;
    iso_639_1?: any;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }
  
  export interface Logo {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }
  
  export interface Poster {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }