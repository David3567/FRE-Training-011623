export interface Movie {
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
