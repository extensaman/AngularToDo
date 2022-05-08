import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {UserData} from "../../coach/coach.component";

@Component({
  selector: 'app-horse-dialog',
  templateUrl: './horse-dialog.component.html',
  styleUrls: ['./horse-dialog.component.css']
})
export class HorseDialogComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
