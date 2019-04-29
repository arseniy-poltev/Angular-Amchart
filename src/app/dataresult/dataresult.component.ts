import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dataresult",
  templateUrl: "./dataresult.component.html",
  styleUrls: ["./dataresult.component.css"]
})
export class DataresultComponent implements OnInit {
  result: string;

  constructor() {
    this.result = "lorem";
  }

  ngOnInit() {}

  onClick() {
    this.result = "ddddd";
  }
}
