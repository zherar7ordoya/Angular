import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //@Input()
  //msg: string = '';

  msg = input<string>('Hello from Child Component!');

  //@Input()
  //person: any;

  person = input<any>('Hello from Child Component!');
}
