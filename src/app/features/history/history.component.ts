import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../shared/services/photo.service';
import {Carousel} from '../../shared/interfaces/carousel';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  carouselItems: Carousel[] = [];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getCarouselItems().then(items => {
      this.carouselItems = items;
      console.log(this.carouselItems);
    });
  }
}
