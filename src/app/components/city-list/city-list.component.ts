import { City } from './../../shared/models/city.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['id', 'city', 'start_date', 'end_date', 'price', 'color', 'status'];
  public dataSource = new MatTableDataSource<City>([]);
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  cityList: City[];
  isSortDisabled = false;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(private dataService: DataService) {
    this.dataSource = new MatTableDataSource([]);
    this.getCityList();
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
         case 'start_date': return new Date(item.start_date);
         case 'end_date': return new Date(item.end_date);
         default: return item[property];
      }
    };
  }
  public getCityList() {
    this.cityList = [];
    this.dataService.getCitiesList().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<City>(data);
      data.forEach(element => {
        let item = Object.assign(new City(), element);
        this.cityList.push(item);
      });

      this.dataSource.paginator = this.paginator;
    },
      error => {
        if (error) {
          console.log(error);
        }
      });
  }

  /**
   * onSort
   */
  public onSort(event) {
    console.log(event);
    this.dataSource.sort = this.sort;
  }

  public applyStartDateFilter(event) {
    console.log(this.range);
    this.dataSource.data = this.dataSource.data.filter(x => (x.start_date >= this.range.value.start && x.start_date <= this.range.value.end));
  }
  public applyEndDateFilter(event) {
    console.log(this.range);
    this.dataSource.data = this.dataSource.data.filter(x => (x.end_date >= this.range.value.start && x.end_date <= this.range.value.end));
  }
  public resetFilter() {
    this.getCityList();
  }
  onMenuOpen(event) {
    this.isSortDisabled = true;
  }
  onMenuClosed(event) {
    this.isSortDisabled = false;
  }
}
