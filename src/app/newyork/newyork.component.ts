import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})
export class NewyorkComponent implements OnInit {
  public crimes = [];
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getCrimes().subscribe(data => {
      this.crimes = data;
      this.collectionSize = data.length;
    });
  }
}

