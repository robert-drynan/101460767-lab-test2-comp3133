import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CharacterService } from '../service/character.service';
import { Character } from '../model/character.interface';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css',
})
//exports the house filters 
export class Characterfilter {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'Other'];
  selectedHouse = signal('');
  characters = signal<Character[]>([]);

  constructor(private characterService: CharacterService) {}

  onHouseChange(house: string) {
    this.selectedHouse.set(house);
    if (!house) return;
//if they do not have a house(muggle or unknowen they will be in the other cat)
    if (house === 'Other') {
      this.characterService.getAllCharacters().subscribe({
        next: (data) => this.characters.set(data.filter(c => !c.house)),
        error: (err) => console.error(err)
      });
    } else {
      this.characterService.getCharactersByHouse(house).subscribe({
        next: (data) => this.characters.set(data),
        error: (err) => console.error(err)
      });
    }
  }
}