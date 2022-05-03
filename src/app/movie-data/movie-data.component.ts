import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.scss']
})
export class MovieDataComponent implements OnInit {
  direction = { x: 'rigth', y: 'bottom' }

  @ViewChild("movie") movie!: ElementRef<HTMLElement>;

  @Input() movieId: number = 0
  @Input() movieName: string = ''
  @Input() ranking?: number
  @Input() tags: string = ''
  @Input() info: string = ''
  @Input() date?: Date
  @Input() img?: string = ''
  @Input() revenue?: number 

  constructor() {

  }



  ngOnInit(): void {
    if (this.tags)
      this.tags = this.tags.split('|').join(', ')

    if (this.date)
      this.date = new Date(this.date)
  }

  updateStyleLocation(e: MouseEvent) {
    let el = this.movie.nativeElement
    let currentWidth = 700

    var rect = this.movie.nativeElement.getBoundingClientRect();

    let bottom = rect.bottom > (window.innerHeight || document.documentElement.clientHeight);
    let rigth = rect.right > (window.innerWidth || document.documentElement.clientWidth);
    let left = rect.left < 0;
    let top = rect.top < 0


    let curr = this.directionCheck(rigth, left, bottom, top, currentWidth, e)

    el.style.setProperty("--x", curr.positionX as unknown as string)
    el.style.setProperty("--y", curr.positionY as unknown as unknown as string)




  }

  directionCheck(rigth: boolean, left: boolean, bottom: boolean, top: boolean, currentWidth: number, e: MouseEvent) {
    let curr = { positionX: e.clientX, positionY: e.pageY }


    if (rigth)
      this.direction.x = 'left'
    else if (left)
      this.direction.x = 'rigth'

    if (bottom)
      this.direction.y = 'top'
    else if (top)
      this.direction.y = 'bottom'


    if (this.direction.x == 'left')
      curr.positionX = e.clientX - currentWidth
    else if (this.direction.x == 'rigth')
      curr.positionX = e.clientX + 75

    if (this.direction.y == 'top')
      curr.positionY = e.pageY - 200
    else if (this.direction.y == 'bottom')
      curr.positionY = e.pageY


    return curr


  }

}
