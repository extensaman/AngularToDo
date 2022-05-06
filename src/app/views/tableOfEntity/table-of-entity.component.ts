import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Horse} from "../../model/Horse";

@Component({
  selector: 'app-tasks',
  templateUrl: './table-of-entity.component.html',
  styleUrls: ['./table-of-entity.component.css']
})
export class TableOfEntityComponent implements OnInit {

  horses: Horse[] | undefined;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHandler.getHorses().subscribe((horses) => this.horses = horses);
  }

}
