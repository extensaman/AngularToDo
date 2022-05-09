import {Injectable} from '@angular/core';
import {MenuScreenName} from "../model/MenuScreenName";
import {Horse} from "../model/Horse";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Coach} from "../model/Coach";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  selectedCoach: Coach | undefined;

  constructor(private http: HttpClient) {
  }

  getMenuScreenNameArray(): Observable<MenuScreenName[]> {
    return this.http.get<MenuScreenName[]>('http://localhost:8081/controller_war_exploded/');
  }

  setSelectedCoach(coach: Coach) {
    this.selectedCoach = coach;
  }

  getSelectedCoach(): Observable<Coach> {
    // @ts-ignore
    return of(this.selectedCoach);
  }

  getHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>('http://localhost:8081/controller_war_exploded/horse');
  }

  getCoaches() {
    return this.http.get<Coach[]>('http://localhost:8081/controller_war_exploded/coach');
  }
}
