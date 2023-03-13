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
    adult:boolean;
    isLoading: boolean;
}

export interface ApiData {
    dates: object;
    page: number;
    results: Array<object>;
}

export interface Plans {
    name: string;
    price: number;
    quality: string;
    resolution: string;
    downLoad: boolean;
    select : boolean;
}

export interface MovieDetail{
    adult: boolean;
    img: string;
    budget: number;
    id: number;
    language: string;
    title: string;
    description: string;
    popularity: number;
    date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    poster_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Person {
    id: number;
    name: string;
    biography: string;
    profile_path: string;
    movies: Movie[];
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface RootObject {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


