import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../../shared/services/photo.service';

interface Image {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Image[] = [];

  constructor(private photoService: PhotoService) {
    this.photoService.getImages().then(images => {
      this.images = images;
      console.log(this.images);
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit(): void {
  }
}
