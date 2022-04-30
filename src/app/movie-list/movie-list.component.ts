import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  listArray: string[] = [];
  movieAmount = 52
  sum = 20;
  direction = "";

  constructor() {
    this.appendItems();
  }

  ngOnInit(): void {
  }


  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 20;
    this.appendItems();

    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 20;
    this.prependItems();

    this.direction = "scroll up";
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
