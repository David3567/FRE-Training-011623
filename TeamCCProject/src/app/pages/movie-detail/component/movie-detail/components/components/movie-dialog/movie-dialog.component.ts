import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/service/interface/video-interface';



@Component({
        selector: 'app-movie-dialog',
        templateUrl: './movie-dialog.component.html',
        styleUrls: ['./movie-dialog.component.scss'],
})


export class MovieDialogComponent implements OnInit {
        // @ViewChild('player') player: YoutubePlayerComponent;
        // movieVideo!: Video;
        videoID!: number;
        // prefix: string = "https://www.youtube.com/watch?v=";
        // id = 
        // movieVideos: Video;
        // hasposter_img = true;
        // hasbackdrop_img = true;
        // poster_img_high = '';
        // backdrop_img_high = '';

        // constructor(
        //         private readonly dialogRef: MatDialogRef<MovieDialogComponent>,
        //         @Inject(MAT_DIALOG_DATA) private data: any
        // ) { }

        constructor(
                public dialogRef: MatDialogRef<MovieDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any
        ) { }

        ngOnInit(): void {
                // this.videoID = 646389;
                this.videoID = this.data.key;
                // https://www.youtube.com/watch?v=JepMpjhkt-4
                // this.movieVideos = this.data.movieVideos;
                // this.hasbackdrop_img = this.data.hasbackdrop_img;
                // this.hasposter_img = this.data.hasposter_img;
                // this.poster_img_high = this.data.poster_img_high;
                // this.backdrop_img_high = this.data.backdrop_img_high;
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                document.body.appendChild(tag);
        }



}