import { Component, OnInit } from '@angular/core';
import { movie } from 'src/assets/interfaces';
import { DataManagerService } from '../data-manager.service';


@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  listArray: string[] = [];
  movieList: movie[] = []
  movieAmount = 100
  sum = 20;

  constructor(private dataService: DataManagerService) {
    this.appendItems();
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.movieList = data
      this.movieAmount = data.length

      this.movieList.forEach(element => {
        this.getImages(element.MovieName, element)
      });
    })



  }

  getImages(name:string, movie:movie) {
    let movieName = name.replace(/\s+/g, '+')
    this.dataService.getRespondingImage(movieName).subscribe((teste:any)=>{

      movie.movieLink = teste.results[0] ? 'https://image.tmdb.org/t/p/w500/' + teste.results[0].poster_path : './assets/avengers.jpg'
 

        
    })
  }


  onScrollDown(ev: any) {

    this.sum += 20;
    this.appendItems();

  }




  appendItems() {
    this.addItems("push");
  }



  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if (this.listArray.length >= this.movieAmount)
        return
      if (_method === 'push') {
        this.listArray.push([i].join(""));
      }
    }
  }
  get movieCount() {
    if (this.movieList[0])
      return this.listArray
    return []
  }

}
