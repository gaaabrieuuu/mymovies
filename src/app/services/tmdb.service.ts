import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  private readonly MOVIE_DISCOVER_URL = `${environment.THE_MOVIE_DB_URL}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_keywords=41645`;
  private readonly TVSHOW_DISCOVER_URL = `${environment.THE_MOVIE_DB_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_keywords=41645`;

  private readonly HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${environment.TOKEN_THE_MOVIE_DB}`,
  };

  constructor(private readonly http: HttpClient) {}

  searchMovies = (): Observable<Show[]> => {
    return this.http.get<Show[]>(this.MOVIE_DISCOVER_URL, { headers: this.HEADERS }).pipe(
      map((data: any) => {
        return data.results.map((movie: any) => {
          const sanMovie: Show = {
            backdrop_path: movie.backdrop_path,
            genres: movie.genre_ids,
            id: movie.id,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            title: movie.title,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
          };
          return sanMovie;
        });
      })
    );
  };

  searchTvShows = (): Observable<Show[]> => {
    return this.http.get<Show[]>(this.TVSHOW_DISCOVER_URL, { headers: this.HEADERS }).pipe(
      map((data: any) => {
        return data.results.map((show: any) => {
          const sanTvShow: Show = {
            backdrop_path: show.backdrop_path,
            genres: show.genre_ids,
            id: show.id,
            overview: show.overview,
            popularity: show.popularity,
            poster_path: show.poster_path,
            release_date: show.first_air_date,
            title: show.name,
            vote_average: show.vote_average,
            vote_count: show.vote_count,
          };
          return sanTvShow;
        });
      })
    );
  };
}
