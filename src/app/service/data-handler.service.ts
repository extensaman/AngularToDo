import { Injectable } from '@angular/core';
import {Entity} from "../model/Entity";
import {Horse} from "../model/Horse";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../shared/baseUrl";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Entity[]>{
    return this.http.get<Entity[]>('http://localhost:8081/сontroller_war_exploded/');
  }

  getHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>('http://localhost:8081/сontroller_war_exploded/horse');
  }
}
