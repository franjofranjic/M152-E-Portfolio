import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../shared/services/photo.service';
import {Carousel} from '../../shared/interfaces/carousel';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  responsiveOptions: any[];
  carouselItems: Carousel[] = [];

  constructor(private photoService: PhotoService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.photoService.getCarouselItems().then(items => {
      this.carouselItems = items;
      console.log(this.carouselItems);
    });
  }
}
