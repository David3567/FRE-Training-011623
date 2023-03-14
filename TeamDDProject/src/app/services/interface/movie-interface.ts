export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean,
  published_at: string;
  id: number;
}


export interface Movie {
  [x: string]: any;
  id: number;
  img: string;
  title: string;
  rate: number;
  date: string;
  description: string;
  language: string;
  popularity: number;
  video: boolean;
  adult: boolean;
}

export interface ApiData {
  dates: object;
  page: number;
  results: Array<object>;
}


