import { Component, OnInit } from "@angular/core";
import { KansasComponent } from "../kansas/kansas.component";
import { ChicagoComponent } from "../chicago/chicago.component";
import { NewyorkComponent } from "../newyork/newyork.component";
import { SanfranciscoComponent } from "../sanfrancisco/sanfrancisco.component";
import { from } from 'rxjs';


@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  result: string;
  constructor() {
    this.kansas();

  }

  ngOnInit() {}

  dummyComponent;

  kansas() {
    this.dummyComponent = KansasComponent;
  }
  chicago() {
    this.dummyComponent = ChicagoComponent;
  }

  newYork() {
    // this.result = "NewYork";
    this.dummyComponent = NewyorkComponent;
  }

  sanFrancisco() {
    // this.result = "<h1>hello</h1>";
    this.dummyComponent = SanfranciscoComponent;
  }
}
