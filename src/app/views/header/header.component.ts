import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {MenuScreenName} from "../../model/MenuScreenName";

@Component({
  selector: 'app-categories',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuScreenNames: MenuScreenName[] | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getMenuScreenNameArray()
      .subscribe((menuScreenNames) => this.menuScreenNames = menuScreenNames);
    console.log(this.menuScreenNames);
  }
}
