import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html',
  styleUrls: ['./kansas.component.css']
})
export class KansasComponent implements OnInit {
  public crimes = [];
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  public select_year = 0;
  public year_selector: FormGroup;
  public year_list = [];

  private Startyear = 2010;
  private Endyear = 2019;

  public jsonUrl = {
    2010: "https://data.kcmo.org/resource/c3qq-bxi5.json",
    2011: "https://data.kcmo.org/resource/nt2f-uxvx.json",
    2012: "https://data.kcmo.org/resource/csec-aghy.json",
    2013: "https://data.kcmo.org/resource/m3xd-e7tp.json",
    2014: "https://data.kcmo.org/resource/yu5f-iqbp.json",
    2015: "https://data.kcmo.org/resource/kbzx-7ehe.json",
    2016: "https://data.kcmo.org/resource/wbz8-pdv7.json",
    2017: "https://data.kcmo.org/resource/wy8a-bydn.json",
    2018: "https://data.kcmo.org/resource/dmjw-d28i.json",
  };

  constructor(private dataService: DataService) {
    for (let i = this.Startyear; i < this.Endyear; i++) {
      this.year_list.push(i);
    }
  }

  ngOnInit() {
    this.year_selector = new FormGroup({
      select_year: new FormControl('')
    });

    this.initData(this.jsonUrl['2014']);
  }

  initData(url) {
    this.dataService.getCrimes(url).subscribe(
      data => {
        this.crimes = data;
        this.collectionSize = data.length;
        console.log(data);
      });
  }

  bindYear(e) {
    const currentYear = e.target.value;
    this.initData(this.jsonUrl[currentYear]);
  }
}
