import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
    movies: Movie[];

    constructor() {
        this.movies = [
            { name: 'Inception', duration: 148, director: 'Christopher Nolan' },
            { name: 'Interstellar', duration: 169, director: 'Christopher Nolan' },
            { name: 'The Matrix', duration: 136, director: 'Lana Wachowski, Lilly Wachowski' },
            { name: 'The Shawshank Redemption', duration: 142, director: 'Frank Darabont' },
            { name: 'The Godfather', duration: 175, director: 'Francis Ford Coppola' },
            { name: 'Pulp Fiction', duration: 154, director: 'Quentin Tarantino' },
            { name: 'The Dark Knight', duration: 152, director: 'Christopher Nolan' },
            { name: 'Forrest Gump', duration: 142, director: 'Robert Zemeckis' },
            { name: 'Fight Club', duration: 139, director: 'David Fincher' },
            { name: 'The Lord of the Rings: The Return of the King', duration: 201, director: 'Peter Jackson' },
        ];
    }

    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }
}
