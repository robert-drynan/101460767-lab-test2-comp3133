import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Characterlist } from './characterlist/characterlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Characterlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101460767-lab-test2-comp3133');
}
