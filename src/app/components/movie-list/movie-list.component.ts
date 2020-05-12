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
  isFound: boolean;
  searchString: String = '';
  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isFound = false;
    this.activatedRoute.queryParams.subscribe(qPArams => {
      this.searchString = qPArams['q'];
      this.movieService.searchMovies(this.searchString).subscribe(
        resp => {

          this.movieList = resp.Search;
          if (this.movieList && this.movieList.length > 0) {
            this.movieList.sort((a, b) => {
              return parseInt(a.Year) < parseInt(b.Year) ? 1 : -1;
            });
          } else {
            this.isFound = true;
          }
        }
      );
    });
  }
}
