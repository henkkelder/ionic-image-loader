import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-concurrency',
    templateUrl: './concurrency.page.html',
    styleUrls: ['./concurrency.page.scss'],
    standalone: false
})
export class ConcurrencyPage implements OnInit {
  images: string[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      const url = 'https://via.placeholder.com/1920/1920/abstract/?v=' + Date.now() + i;
      this.images.push(url);
    }
  }

  ngOnInit() {
  }

}
