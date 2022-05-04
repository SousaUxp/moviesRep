import { Component, OnInit } from '@angular/core';
import { movie } from 'src/assets/interfaces';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {
  movieList: movie[] = []
  dates: string[] = []
  currentTopMovies: any[] = []
  currentYear: any = null

  constructor(private dataService: DataManagerService) {
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.movieList = data
      this.movieList.forEach((movie: movie) => {
        movie.Release_Date = new Date(movie.Release_Date)
        let year = movie.Release_Date.getFullYear() as unknown as string

        if (!this.dates.includes(year)) {
          this.dates.push(year)
        }
      });

      this.dates.sort()

      this.movieList.sort((a, b) => (a.Revenue < b.Revenue) ? 1 : -1)

    this.defineCurrentMovies()


    })

    this.dataService.getTopData

  }

  defineCurrentMovies() {
    this.currentTopMovies = []
    if (!this.currentYear) {
      this.currentTopMovies = this.movieList.slice(0, 10)
      this.currentTopMovies.forEach(el => {
        this.getImages(el.MovieName, el)
      });
      
    } else {
      this.dataService.getTopData(this.currentYear).subscribe((data)=>{
        this.currentTopMovies = data

        this.currentTopMovies.forEach(el => {
          this.getImages(el.MovieName, el)
        });
        
      })

    }

  }


  getImages(name:string, movie:movie) {
    let movieName = name.replace(/\s+/g, '+')
    this.dataService.getRespondingImage(movieName).subscribe((teste:any)=>{

      movie.movieLink = teste.results[0] ? 'https://image.tmdb.org/t/p/w500/' + teste.results[0].poster_path : './assets/avengers.jpg'
 

        
    })
  }

}
