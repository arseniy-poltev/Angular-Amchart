import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-chicago",
  templateUrl: "./chicago.component.html",
  styleUrls: ["./chicago.component.css"]
})
export class ChicagoComponent implements OnInit {
  public crimes = [];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getCrimes().subscribe(data => {
      this.crimes = data;
    });
  }
}
