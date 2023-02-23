import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  returnUrl!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get(
      'url'
    ) as string;
    console.log(this.returnUrl);
  }

  toProduct() {
    const arr = this.returnUrl.split('=');
    arr.pop();

    this.router.navigateByUrl([...arr, 'Tom'].join('='));
  }
}
