import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Carousel} from '../interfaces/carousel';

interface Image {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages(): Promise<Image[]> {
    return this.http.get<any>('assets/Data.json')
      .toPromise()
      .then(res => res.data as Image[])
      .then(data => data);
  }

  getCarouselItems(): Promise<Carousel[]> {
    return this.http.get<any>('assets/Carousel.json')
      .toPromise()
      .then(res => res.data as Carousel[])
      .then(data => data);
  }
}
