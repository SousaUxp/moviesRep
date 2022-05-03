import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiLink } from 'src/assets/Api';
import { movie } from 'src/assets/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  myData:Observable<movie[]> = this.getData()

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get<movie[]>(ApiLink + '/Movies')
  }

  getRespondingImage(name: string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=cc90379751a7cf1a931812a87b66c344&query=${name}`)
  }

  get data() {
    return this.myData
  }

}
