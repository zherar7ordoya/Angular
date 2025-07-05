import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})

/*
export class AppComponent {
  
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.name = new FormControl('Nombre de la Película');
    this.duration = new FormControl('120');
    this.director = new FormControl('Director de la Película');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director,
    });
  }
*/

export class AppComponent {
    movieForm: FormGroup;

    constructor() {
        this.movieForm = new FormGroup({
            name: new FormControl('Nombre de la Película'),
            duration: new FormControl('120'),
            director: new FormControl('Director de la Película'),
        });
    }

    handleSubmit(): void {
        console.log("Movie created:", this.movieForm.value);
    }
}
