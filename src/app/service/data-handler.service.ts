import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {Horse} from "../model/Horse";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "../shared/baseUrl";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8081/controller_war/');
  }

  getHorses(): Observable<Horse> {
    return this.http.get<Horse>('http://localhost:8080/controller-1.0/horse/');
  }
}
