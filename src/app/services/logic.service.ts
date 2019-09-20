import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  private dataUrl : string = '../../assets/database.json'
  constructor(private http: HttpClient) { }

    getData() {
      console.log(this.http.get(this.dataUrl))
    }

}
