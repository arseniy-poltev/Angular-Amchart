import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  formGroup: FormGroup;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  get f() {
    return this.formGroup.controls;
  }

  constructor() {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      city_1: new FormControl('', [
        Validators.required,
      ]),
      city_2: new FormControl('', [
        Validators.required,
      ])
    });
  }

  handleCompage() {
    if (this.formGroup.invalid) {
      return;
    }
    const city_1 = this.f.city_1.value;
    const city_2 = this.f.city_2.value;

    if (city_1 === city_2) {
      return;
    }

    console.log(city_1);
    console.log(city_2);

  }
}
