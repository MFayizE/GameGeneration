import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '6fbd42272fe64af2935b50be8f9f45fe'
    }
})