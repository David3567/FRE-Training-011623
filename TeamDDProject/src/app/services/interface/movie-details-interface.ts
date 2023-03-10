export interface MovieDetails {
    id: number;
    title: string;
    vote_average: number;
    runtime: number;
    genres: { id: number, name: string }[];
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
}
