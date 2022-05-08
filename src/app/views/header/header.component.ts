import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Entity} from "../../model/Entity";

@Component({
  selector: 'app-categories',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  entities: Entity[] | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getEntities().subscribe((entities) => this.entities = entities);
    console.log(this.entities);
  }
}
