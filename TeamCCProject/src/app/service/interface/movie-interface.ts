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

