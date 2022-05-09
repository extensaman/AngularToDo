import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../../service/data-handler.service";
import {Coach} from "../../../model/Coach";

@Component({
  selector: 'app-coach-dialog',
  templateUrl: './coach-dialog.component.html',
  styleUrls: ['./coach-dialog.component.css']
})
export class CoachDialogComponent implements OnInit {

  selectedCoach: Coach | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getSelectedCoach().subscribe(coach => this.selectedCoach = coach);
  }

}
