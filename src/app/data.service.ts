import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICrime } from './Crime';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private _url = "https://data.kcmo.org/resource/yu5f-iqbp.json";
  constructor(private http: HttpClient) {}

  getCrimes(url: any): Observable<ICrime[]> {
    console.log("url: " + url);
    return this.http.get<ICrime[]>(url);
  }
}
