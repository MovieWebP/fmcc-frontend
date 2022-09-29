import axios from "axios";


const Api_KEY = "3e354f52d83220768ad48a5e6ab5121b";
const BASE_PATH = "https://api.themoviedb.org/3"


export interface IMovie {
    genre_id: [number]; // 장르 id
    id: number; // 영화 id
    title: string; // 영화 제목
    overview: string; // 영화 설명
    backdrop_path: string; // 영화 배경 이미지
    poster_path: string; // 영화 포스터 이미지
    release_date: string; // 개봉일
    vote_average: number; // 평점
    is_tv?: boolean; // TV 프로그램인지 여부
    frist_air_date?: string; // 첫 방영일
    name?: string; // tv 제목
}

export interface IGetMovieResults {
    data: {
        minimum: string;
        maximum: string;
    }
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IGetDetail {
    genres: [number];
    id: number;
    name?: string;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    frist_air_date?: string;
    vote_average: number;
}

export interface IGetRecommends {
    page: number; // 페이지
    results: IMovie[]; // 영화 +@TV 목록
    total_pages: number; // 전체 페이지 수
    total_results: number; // 전체 결과 수
}

export interface ICast {
    name: string;
    profile_path: string;
}

export interface IGetCredits {
    id: number;
    cast: ICast[]; // 배우 목록
    crew: ICast[]; // 제작진 목록
}

//Movie
export function getNowPlayingMovie() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getPopularMovie() {
    return fetch(`${BASE_PATH}/movie/popular?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getUpcomingMovie() {
    return fetch(`${BASE_PATH}/movie/upcoming?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getTopRatedMovie() {
    return fetch(`${BASE_PATH}/movie/top_rated?api_key=${Api_KEY}`)
        .then(res => res.json())
}



//TV

export function getAiringTodayTv() {
    return fetch(`${BASE_PATH}/tv/airing_today?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getOnTheAirTv() {
    return fetch(`${BASE_PATH}/tv/on_the_air?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getPopularTv() {
    return fetch(`${BASE_PATH}/tv/popular?api_key=${Api_KEY}`)
        .then(res => res.json())
}

export function getTopRatedTv() {
    return fetch(`${BASE_PATH}/tv/top_rated?api_key=${Api_KEY}`)
        .then(res => res.json())
}

//Search Movie Api
export function getFindMovie(keyword: string | null) {
    return fetch(`${BASE_PATH}/search/movie?api_key=${Api_KEY}&query=${keyword}`)
        .then((res) => res.json())
}

//Search TV Api
export function getFindTv(keyword: string | null) {
    return fetch(`${BASE_PATH}/search/tv?api_key=${Api_KEY}&query=${keyword}`)
        .then((res) => res.json())
}

// Movie + Tv Detail Api
export async function getDetail(part?: string, id?: string) {
    return await fetch(
        `${BASE_PATH}/${part}/${id}?api_key=${Api_KEY}`
    ).then((res) => res.json());
}

// Movie + Tv Clips Api
export async function getClips(part?: string, id?: string) {
    return await fetch(
        `${BASE_PATH}/${part}/${id}/videos?api_key=${Api_KEY}`
    ).then((res) => res.json());
}

// Movie + Tv Trailer Api
export async function getTrailer(part?: string, id?: string) {
    return await (
        await fetch(
            `${BASE_PATH}/${part}/${id}/videos?api_key=${Api_KEY}`
        )
    ).json();
}

// Movie + Tv Recommend Api
export async function getRecommend(part?: string, id?: string) {
    return await fetch(
        `${BASE_PATH}/${part}/${id}/recommendations?api_key=${Api_KEY}`
    ).then((res) => res.json());
}

// Movie + Tv cast Api
export async function getCast(part?: string, id?: string) {
    return await fetch(
        `${BASE_PATH}/${part}/${id}/credits?api_key=${Api_KEY}`
    ).then((res) => res.json());
}