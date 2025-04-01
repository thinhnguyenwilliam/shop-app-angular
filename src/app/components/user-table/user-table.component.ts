import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'age', 'country'];
  dataSource = new MatTableDataSource([
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Smith', age: 32, country: 'UK' },
    { name: 'Lê Văn A', age: 25, country: 'Vietnam' },
    { name: 'Nguyễn Văn B', age: 30, country: 'Vietnam' },
    { name: 'Alice Brown', age: 27, country: 'Canada' },
    { name: 'David White', age: 40, country: 'Australia' },
    { name: 'Emma Green', age: 35, country: 'Germany' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
