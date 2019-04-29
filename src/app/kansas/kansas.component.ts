import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-kansas",
  templateUrl: "./kansas.component.html",
  styleUrls: ["./kansas.component.css"]
})
export class KansasComponent implements OnInit {
  public crimes = [];
  constructor(private _dataService: DataService) {
   
  }

  ngOnInit() {
    this._dataService.getCrimes().subscribe(data=> {this.crimes = data});

  }
}
