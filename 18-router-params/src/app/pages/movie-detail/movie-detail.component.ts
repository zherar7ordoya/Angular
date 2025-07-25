// File path: /src/app/pages/movie-detail/movie-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-detail',
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: './movie-detail.component.html',
    styleUrl: './movie-detail.component.css',
})

export class MovieDetailComponent implements OnInit {

    selectedMovie?: Movie;

    constructor(
        public movieService: MovieService,
        private route: ActivatedRoute
    ) {
        console.log("I'm executed in order #1.");
    }

    ngOnInit(): void {
        console.log("I'm executed in order #2.");
        const movieName = this.route.snapshot.params['movieName'];
        this.selectedMovie = this.movieService.getMovie(movieName);
    }
}
