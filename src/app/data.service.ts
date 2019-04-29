import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICrime } from './Crime';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private _url = "https://data.kcmo.org/resource/yu5f-iqbp.json?%24limit=10";
  // https://data.kcmo.org/resource/kbzx-7ehe.json?location_1_zip=FOO
  constructor(private http: HttpClient) {}

  getCrimes(): Observable<ICrime[]> {
    return this.http.get<ICrime[]>(this._url);
  }
}
