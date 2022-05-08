import { Component, OnInit } from '@angular/core';
import {UserData} from "../coach.component";
import {DataHandlerService} from "../../../service/data-handler.service";

@Component({
  selector: 'app-coach-dialog',
  templateUrl: './coach-dialog.component.html',
  styleUrls: ['./coach-dialog.component.css']
})
export class CoachDialogComponent implements OnInit {

  selectedUser: UserData | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getSelectedUser().subscribe(user => this.selectedUser = user);
  }

}
