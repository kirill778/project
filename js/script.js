"use strict";

//Task 1

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?");

//Task 2

let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

// Task 3

let lastOfFilms = prompt('Один из последних просмотренных фильмов?');
let estimation = prompt('На сколько оцените его?');

let movies = {

    lastOfFilms: lastOfFilms,
    estimation: estimation,

};



