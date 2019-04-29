import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})
export class NewyorkComponent implements OnInit {
  public crimes = [];
  constructor(private _dataService: DataService) {
   
  }

  ngOnInit() {
    this._dataService.getCrimes().subscribe(data=> {this.crimes = data});

  }
  }

