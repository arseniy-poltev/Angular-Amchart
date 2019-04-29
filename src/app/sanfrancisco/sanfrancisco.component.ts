import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-sanfrancisco",
  templateUrl: "./sanfrancisco.component.html",
  styleUrls: ["./sanfrancisco.component.css"]
})
export class SanfranciscoComponent implements OnInit {
  public crimes = [];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getCrimes().subscribe(data => {
      this.crimes = data;
    });
  }
}
