import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Horse} from "../../model/Horse";
import {MatDialog} from '@angular/material/dialog';
import {HorseDialogComponent} from "./horse-dialog/horse-dialog.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {

  horses: Horse[] | undefined;

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataHandler.getHorses().subscribe((horses) => this.horses = horses);
  }

  openDialog() {
    this.dialog.open(HorseDialogComponent);
  }

}
