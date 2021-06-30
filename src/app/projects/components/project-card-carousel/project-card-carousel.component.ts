import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card-carousel',
  templateUrl: './project-card-carousel.component.html',
  styleUrls: ['./project-card-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardCarouselComponent implements OnInit {
  cards = [

    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/600x500/000/fff',
      description: 'tests 1',
      shareUrl: '',
      type: 'image'
    },
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/300x300/000/fff',
      description: '',
      shareUrl: '',
      type: 'image'
    },
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/600x150/000/fff',
      description: '',
      shareUrl: '',
      type: 'image'
    },
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/300x400/000/fff',
      description: '',
      shareUrl: '',
      type: 'image'
    },
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/300x300/000/fff',
      description: '',
      shareUrl: '',
      type: 'image'
    },
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'https://dummyimage.com/600x150/000/fff',
      description: '',
      shareUrl: '',
      type: 'image'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
