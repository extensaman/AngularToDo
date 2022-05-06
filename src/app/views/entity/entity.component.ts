import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Entity} from "../../model/Entity";

@Component({
  selector: 'app-categories',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  entities: Entity[] | undefined;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.getCategories().subscribe((entities) => this.entities = entities);
    console.log(this.entities);
  }

  stub() {
    console.log("sdfasdasd");
  }


}
