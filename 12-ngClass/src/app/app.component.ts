import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  isDark: boolean = false;

  toggleDark() {
    this.isDark = !this.isDark
  }
}
