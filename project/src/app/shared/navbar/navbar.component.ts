import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showSearchForm: boolean = false;
  isLogin!: boolean;
  username = '';
  searchKeyWord = '';

  constructor(
    private readonly authService: AuthService,
    private readonly tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    const { jwtToken, username } = this.authService.userValue;
    if (jwtToken && username) {
      this.isLogin = true;
      this.username = username;
    } else {
      this.isLogin = false;
    }
  }

  searchMovieByKeyWord() {
    this.tmdbService.searchMovie(this.searchKeyWord).subscribe(console.log);
    this.searchKeyWord = '';
  }

  signOut() {
    this.authService.logout();
    this.isLogin = false;
    this.username = '';
  }
}
