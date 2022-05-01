import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiLink } from 'src/assets/Api';
import { movie } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<movie[]>(ApiLink+'/Movies')
  }

 
}
