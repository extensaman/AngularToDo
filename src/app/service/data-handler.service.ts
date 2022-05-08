import {Injectable} from '@angular/core';
import {MenuScreenName} from "../model/MenuScreenName";
import {Horse} from "../model/Horse";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/Coach";
import {UserData} from "../views/coach/coach.component";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  selectedUser: UserData | undefined;

  constructor(private http: HttpClient) {
  }

  getMenuScreenNameArray(): Observable<MenuScreenName[]>{
    return this.http.get<MenuScreenName[]>('http://localhost:8081/controller_war_exploded/');
  }

  setSelectedUser(user : UserData) {
    this.selectedUser = user;
  }

  getSelectedUser(): Observable<UserData> {
    // @ts-ignore
    return of(this.selectedUser);
  }

  getHorses(): Observable<Horse[]> {
     return  this.http.get<Horse[]>('http://localhost:8081/controller_war_exploded/horse');
  }

  getCoaches(){
    return this.http.get<Coach[]>('http://localhost:8081/controller_war_exploded/coach');
  }
}
