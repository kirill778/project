"use strict";

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

console.log(personalMovieDB.count);