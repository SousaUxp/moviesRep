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

  constructor(private dataService:DataManagerService) {
    this.appendItems();
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data:any)=>{
      this.movieList = data
      this.movieAmount = data.length
      console.log(data)
    })
  }


  onScrollDown(ev: any) {

    this.sum += 20;
    this.appendItems();

  }

  onScrollUp(ev: any) {
    this.sum += 20;
    this.prependItems();

  }


  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if (this.listArray.length >= this.movieAmount)
        return
      if (_method === 'push') {
        this.listArray.push([i].join(""));
      } else if (_method === 'unshift') {
        this.listArray.unshift([i].join(""));
      }
    }
  }

}
