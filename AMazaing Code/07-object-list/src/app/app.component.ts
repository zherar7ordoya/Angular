import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Animal } from './models/animal.model'; // 💡 este import

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})

export class AppComponent {

    animals: Animal[] = [
        {
            id: 1,
            name: 'dog',
            img: 'https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg',
        },
        {
            id: 2,
            name: 'cat',
            img: 'https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg',
        },
        {
            id: 3,
            name: 'bird',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg',
        },
    ];

}
