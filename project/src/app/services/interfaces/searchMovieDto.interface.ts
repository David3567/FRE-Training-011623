export interface SearchMovieDto {
    api_key: string;
    query: string;
    language?: string;
    page?: number;
    include_adult?: boolean;
    region?: string;
    year?: number;
    primary_release_year?: number;
  }