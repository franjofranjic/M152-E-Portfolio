import {Component} from '@angular/core';
import {PhotoService} from '../../shared/services/photo.service';
import {Image} from '../../shared/interfaces/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: Image[] = [];

  constructor(private photoService: PhotoService) {
    this.photoService.getImages().then(images => {
      this.images = images;
    });
  }
}
