import { Component, Inject, OnInit } from '@angular/core';
import { Video } from 'src/app/services/interface/movie-interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})

export class MovieDialogComponent implements OnInit {
  videos: Video[] = [];
  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('this.data')
    console.log(this.data)
    console.log('this.data')
    this.videos = this.data.videos;
    console.log("displaying data.videos")
    console.log(this.videos)
    console.log('ih')
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    }

    onNoClick() {
      this.dialogRef.close();
    }

    switchVideo(direction: string) {
      console.log("switching video");
      if (direction === 'right' && this.videos.length) {
        const videoOut: Video = this.videos.shift() as Video;
        this.videos.push(videoOut);
      } else if (direction === 'left' && this.videos.length) {
        const videoOut: Video = this.videos.pop() as Video;
        this.videos.unshift(videoOut);
      }
    }
}

