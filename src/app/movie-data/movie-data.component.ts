import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.scss']
})
export class MovieDataComponent implements OnInit {

  @ViewChild("movie") movie!: ElementRef<HTMLElement>;

  @Input() movieId: number = 0
  @Input() movieName: string = ''
  @Input() ranking: number = 0
  @Input() tags: string = ''
  @Input() info: string = ''
  @Input() date?: Date
  @Input() img?: string = ''

  constructor() {
    
   }



  ngOnInit(): void {
    if (this.tags)
      this.tags = this.tags.split('|').join(', ')

    if (this.date)
      this.date = new Date(this.date)
  }

  updateStyleLocation(e: MouseEvent) {
    this.movie.nativeElement.style.setProperty("--x", e.clientX + 75 as unknown as string)
    this.movie.nativeElement.style.setProperty("--y", e.pageY as unknown as string)

  }

}
