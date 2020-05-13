import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://www.omdbapi.com/?apikey=51bbe51c';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  searchMovies(searchTerm): Observable<any> {
    // return this.http.get(baseUrl, { params: { s: searchTerm } });
    return this.http.get(baseUrl, searchTerm);
  }

  getMovieDetails(imdbID): Observable<any> {
    return this.http.get(baseUrl, { params: { i: imdbID } });

  }
}
