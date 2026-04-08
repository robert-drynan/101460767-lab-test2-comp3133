import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}
//the gets for the characters 
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }
//get for the characters by id
  getCharacterById(id: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/character/${id}`);
  }
//gets them by there house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house}`);
  }
}