import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/models/show';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Show[] = [];
  tvShows: Show[] = [];
  constructor(private readonly service: TMDBService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getTvShows();
  }

  getMovies = () => {
    this.service.searchMovies().subscribe({
      next: (data: any) => {
        console.log(data);
        this.movies.push(...data);
      },
      error: (e: any) => console.error(e),
    });
  };

  getTvShows = () => {
    this.service.searchTvShows().subscribe({
      next: (data: any) => {
        console.log(data);
        this.tvShows.push(...data)
      },
      error: (e: any) => console.error(e),
    });
  };
}
