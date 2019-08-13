import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  public crimes = [];
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;

  public jsonUrl = {
    2013: "https://data.cityofchicago.org/resource/a95h-gwzm.json",
    2014: "https://data.cityofchicago.org/resource/qnmj-8ku6.json",
    2015: "https://data.cityofchicago.org/resource/vwwp-7yr9.json",
    2016: "https://data.cityofchicago.org/resource/kf95-mnd6.json",
    2017: "https://data.cityofchicago.org/resource/d62x-nvdr.json",
    2018: "https://data.cityofchicago.org/resource/3i3m-jwuy.json",
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCrimes().subscribe(data => {
      this.crimes = data;
      this.collectionSize = data.length;
    });
  }
}
