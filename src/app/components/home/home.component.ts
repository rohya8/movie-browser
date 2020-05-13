import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*  constructor() { }
 
   ngOnInit() {
   }
 
   getYearFrom() {
     return new Date().getFullYear() + ' - ' + (parseInt(new Date().getFullYear().toString().slice(2)) + 1);
   }
  */
  movieList: any[];
  isFound: String = '';
  searchString: String = '';
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.isFound = 'Please wait while loading...';
    this.movieService.searchMovies({ params: { s: 'welcome' } }).subscribe(
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
  }
}
