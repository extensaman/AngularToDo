import { Component } from '@angular/core';
import {Horse} from "./model/Horse";
import {HttpClient} from "@angular/common/http";
import {baseUrl} from "./shared/baseUrl";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';
  horse: Horse | undefined;

  constructor(private http: HttpClient) {
    this.http.get<Horse>(baseUrl)
        .subscribe(result => this.horse = result);
  }
}
