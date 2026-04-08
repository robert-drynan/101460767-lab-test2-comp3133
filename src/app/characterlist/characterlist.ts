import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../service/character.service';
import { Character } from '../model/character.interface';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css',
})
//exports the character list
export class Characterlist implements OnInit {
  characters = signal<Character[]>([]);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe({
      next: (data) => this.characters.set(data),
      error: (err) => console.error('ERROR:', err)
    });
  }
}