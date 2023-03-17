import { Component, Inject, OnInit } from '@angular/core';
import { Video } from 'src/app/services/interfaces/video.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  movieVideos: Video[] = [];
  hasPoster_img = true;
  hasBackdrop_img = true;
  poster_img_high = '';
  backdrop_img_high = '';

  constructor(
    private dialogRef: MatDialogRef<YoutubeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.movieVideos = this.data.movieVideos;
    this.hasPoster_img = this.data.hasPoster_img;
    this.hasBackdrop_img = this.data.hasBackdrop_img;
    this.poster_img_high = this.data.poster_img_high;
    this.backdrop_img_high = this.data.backdrop_img_high;
  }

  switchVideo(direction: string) {
    if (direction === 'left' && this.movieVideos.length) {
      const removedVideo: Video = this.movieVideos.shift();
      this.movieVideos.push(removedVideo);
    } else if (direction === 'right' && this.movieVideos.length) {
      const removedVideo: Video = this.movieVideos.pop();
      this.movieVideos.unshift(removedVideo);
    }
  }
}
