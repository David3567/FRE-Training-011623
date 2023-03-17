import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Video } from 'src/app/services/interface/movie-interface';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})

export class YoutubePlayerComponent implements OnInit {
  videos: Video[] = [];
  constructor(
    public dialogRef: MatDialogRef<YoutubePlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('this.data')
    console.log(this.data)
    this.videos = this.data.videos;
    console.log("data.videos")
    console.log(this.videos)
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    }
    
    //close the video
    onNoClick() {
      this.dialogRef.close();
    }

    //switch the video
    switchVideo(direction: string) {
      if (direction === 'right' && this.videos.length) {
        const videoOut: Video = this.videos.shift() as Video;
        this.videos.push(videoOut);
      } else if (direction === 'left' && this.videos.length) {
        const videoOut: Video = this.videos.pop() as Video;
        this.videos.unshift(videoOut);
      }
    }
}

