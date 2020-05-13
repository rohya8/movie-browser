import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: any[];
  isFound: String = '';
  searchString: String = '';
  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isFound = 'Please wait while loading...';
    this.activatedRoute.queryParams.subscribe(qPArams => {
      this.searchString = qPArams['q'];
      this.movieService.searchMovies({ params: { s: this.searchString } }).subscribe(
        resp => {

          this.movieList = resp.Search;
          if (this.movieList && this.movieList.length > 0) {
            this.movieList.sort((a, b) => {
              return parseInt(a.Year) < parseInt(b.Year) ? 1 : -1;
            });
            if (this.movieList.length > 9) {
              this.movieList.splice( 9);
            }
          } else {
            this.isFound = 'No results found for \"' + this.searchString + '\"';
          }
        }
      );
    });
  }
}
