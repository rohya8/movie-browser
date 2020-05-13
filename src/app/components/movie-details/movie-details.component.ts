import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieObj: any;
  constructor(private movieService: MoviesService, private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(qParam => {
      if (qParam['imdbId']) {
        this.getDetails(qParam['imdbId']);
      }
    });
  }

  getDetails(imdbID) {
    this.movieService.getMovieDetails(imdbID).subscribe(resp => {
      this.movieObj = resp;
    });
  }

  goBack(){
    window.history.back();
  }
}
