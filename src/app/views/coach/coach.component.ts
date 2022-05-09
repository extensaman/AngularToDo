import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Coach} from "../../model/Coach";
import {DataHandlerService} from "../../service/data-handler.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import {CoachDialogComponent} from "./coach-dialog/coach-dialog.component";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit, AfterViewInit {

  coaches: Coach[] = [];

  displayedColumns: string[] = ['id', 'surname', 'name', 'patronymic', 'horseCount'];
  dataSource: MatTableDataSource<Coach>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private dataHandler: DataHandlerService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Coach>(this.coaches);
  }

  ngOnInit(): void {
    this.dataHandler.getCoaches().subscribe((coaches) => this.coaches = coaches);
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(coach: Coach) {
    this.dataHandler.setSelectedCoach(coach);
    this.dialog.open(CoachDialogComponent);
  }
}
