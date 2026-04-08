import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../service/character.service';
import { Character } from '../model/character.interface';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css',
})
export class Characterdetails implements OnInit {
  character = signal<Character | null>(null);

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.getCharacterById(id).subscribe({
        next: (data) => this.character.set(data[0]),
        error: (err) => console.error('ERROR:', err)
      });
    }
  }
}
