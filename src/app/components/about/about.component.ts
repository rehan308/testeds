import { Component, ViewChild } from '@angular/core';
const $ : any = '';
// declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  videoSource =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
  @ViewChild('videoPlayer') videoplayer: any;
  public startedPlay: boolean = false;
  public show: boolean = false;
  pauseVideo(videoplayer) {
    videoplayer.nativeElement.play();
    // this.startedPlay = true;
    // if(this.startedPlay == true)
    // {
    setTimeout(() => {
      videoplayer.nativeElement.pause();
      if (videoplayer.nativeElement.paused) {
        this.show = !this.show;
      }
    }, 2000);
    // }
  }

  closebutton(videoplayer) {
    this.show = !this.show;
    videoplayer.nativeElement.play();
  }

  ngOnInit() {
    console.log('text');
    // document.onreadystatechange = function() {
    //   let lastScrollPosition = 0;
    //   const navbar = document.querySelector('.navbar');
    //   window.addEventListener('scroll', function(e) {
    //     lastScrollPosition = window.scrollY;
        
    //     if (lastScrollPosition > 100)
    //       navbar.classList.add('scrolled');
    //     else
    //       navbar.classList.remove('scrolled');
    //   });
    // }
  }
}
