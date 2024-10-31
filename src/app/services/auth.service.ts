import { Injectable } from '@angular/core';
import {MOCK_PLAYERS, Player} from "../mock/mock-players";
import {delay, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: Player[] = MOCK_PLAYERS;
  private loggedIn: boolean = false;
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    return of(this.users).pipe(
       delay(1000),
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        this.loggedIn = !!user;
        return this.loggedIn;
      })
    );
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
