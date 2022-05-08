import {Injectable} from '@angular/core';
import {Entity} from "../model/Entity";
import {Horse} from "../model/Horse";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coach} from "../model/Coach";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  activeEntitySubject = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  getEntities(): Observable<Entity[]>{
    return this.http.get<Entity[]>('http://localhost:8081/controller_war_exploded/');
  }

  getHorses(): Observable<Horse[]> {
     return  this.http.get<Horse[]>('http://localhost:8081/controller_war_exploded/horse');
  }

  getCoaches(){
    return this.http.get<Coach[]>('http://localhost:8081/controller_war_exploded/coach');
  }
}
