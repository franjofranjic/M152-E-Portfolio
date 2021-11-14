import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  safeURL: SafeUrl;
  videoURL = 'https://youtu.be/8hHpbFFgTmY';

  constructor(private sanitizer: DomSanitizer) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
  }
}
