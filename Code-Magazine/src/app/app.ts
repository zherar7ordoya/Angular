import { Component, signal, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {

    protected readonly title = signal('Analista⭐Programador');

    // 1. Create a base signal
    // Signals must be declared as class properties (not with `const`) so methods/constructor can access them via `this`.
    protected readonly count = signal(0);

    // 2. Create a computed value based on the signal
    protected readonly doubleCount = computed(() => this.count() * 2);

    // 3. Create an effect that reacts to changes
    constructor() {
        effect(() => {
            console.log(`\nDouble count is now: ${this.doubleCount()}\n`);
        });
    }
    increment() {
        // Example mutation
        // Console output: Double count is now: 10
        this.count.set(5);
    }
}
