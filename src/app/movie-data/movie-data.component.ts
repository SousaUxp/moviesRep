import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.scss']
})
export class MovieDataComponent implements OnInit {

  @ViewChild("movie") movie!: ElementRef<HTMLElement>;

  constructor() { }



  ngOnInit(): void {
    
  }

  updateStyleLocation(e:MouseEvent) {
    this.movie.nativeElement.style.setProperty("--x", e.clientX + 75 as unknown as string)
    this.movie.nativeElement.style.setProperty("--y", e.clientY + 50 as unknown as string)

  }

}
