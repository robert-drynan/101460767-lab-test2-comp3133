import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css',
})
export class Characterlist implements OnInit {
  characters = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters').subscribe({
      next: (data) => {
        this.characters.set(data);
        console.log('Set characters:', this.characters().length);
      },
      error: (err) => console.error('ERROR:', err)
    });
  }
}
