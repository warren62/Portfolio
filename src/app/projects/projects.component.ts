import { Component, OnInit } from '@angular/core';
import { ProjectCard } from './models/project-card.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cards: ProjectCard[] = [
    {
      title: 'EZTMS',
      subTitle: 'ASP.Net Web Forms',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: 'EZTMS or TMS is the current legacy version of EZfacilitys site. It is a ASP.Net Webforms project that uses repository pattern for Data/Business logic and Unity for dependency injection. This project holds most of the data/buisiness logic for all EZ sister sites',
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: 'Visual Basic',
          routerLink: '/skills'
        },
        {
          label: '.NET',
          routerLink: '/skills'
        },
        {
          label: 'Octopus CI/CD',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET Web Forms',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET WebAPI',
          routerLink: '/skills'
        },
        {
          label: 'Bitbucket Pipelines',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'Javascript',
          routerLink: '/skills'
        },
        {
          label: 'HTML',
          routerLink: '/skills'
        },
        {
          label: 'CSS',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'EZ Self-Service',
      subTitle: 'ASP.Net MVC',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: 'EZ Self-service is a sister site to EZTMS, written as an ASP.Net MVC project',
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: '.NET',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET MVC',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET WebAPI',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'Javascript',
          routerLink: '/skills'
        },
        {
          label: 'HTML',
          routerLink: '/skills'
        },
        {
          label: 'CSS',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'EZTMS API',
      subTitle: 'RESTful API',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: 'EZTMS API is a RESTful API that uses OAuth2 Resource Owner Password Credentials Flow',
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: '.NET',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET WebAPI',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'Javascript',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'EZUI',
      subTitle: 'Angular/Typescript',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: `EZUI is the replacement for EZFacility's legacy site EZTMS. It uses Docker containers and Kuberneters/Kafka to handle clustering and event streaming for communication between EZUI and EZUI.API`,
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'Angular',
          routerLink: '/skills'
        },
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: 'AWS',
          routerLink: '/skills'
        },
        {
          label: 'Docker',
          routerLink: '/skills'
        },
        {
          label: 'Kafka',
          routerLink: '/skills'
        },
        {
          label: 'Kubernetes',
          routerLink: '/skills'
        },
        {
          label: 'Typescript',
          routerLink: '/skills'
        },
        {
          label: 'ASP.NET WebAPI',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'Javascript',
          routerLink: '/skills'
        },
        {
          label: 'HTML',
          routerLink: '/skills'
        },
        {
          label: 'Sass',
          routerLink: '/skills'
        },
        {
          label: 'CSS',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'EZUI API',
      subTitle: 'Angular/Typescript',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: `EZUI API allows access to EZfacility backend/logic. It communicates with EZUI via Docker/Kafka/Kubernetes`,
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: 'VB',
          routerLink: '/skills'
        },
        {
          label: 'AWS',
          routerLink: '/skills'
        },
        {
          label: 'Docker',
          routerLink: '/skills'
        },
        {
          label: 'Kafka',
          routerLink: '/skills'
        },
        {
          label: 'Kubernetes',
          routerLink: '/skills'
        },
        {
          label: 'Typescript',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'Gesture',
      subTitle: 'In Progress',
      url: ['assets/png/ez.png', 'assets/png/rsm.png', 'assets/jpg/combat-engineer.jpg'],
      description: `Angular service that uses tensorflow to process hand gestures`,
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'Angular',
          routerLink: '/skills'
        },
        {
          label: 'Typescript',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'TensorFlow machine learning',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'Portfolio',
      subTitle: 'This site!',
      url: ['assets/png/ez.png', 'assets/svg/bash-1.svg', 'assets/svg/anuglar-icon.svg'],
      description: `Angular with a redux pattern using ngrx, connects to PortfolioAPI to send emails and get APOD data`,
      shareUrl: '',
      type: 'image',
      technologyChips: [
        {
          label: 'Angular',
          routerLink: '/skills'
        },
        {
          label: 'Typescript',
          routerLink: '/skills'
        },
        {
          label: 'Bash Scripting',
          routerLink: '/skills'
        },
        {
          label: 'TensorFlow machine learning',
          routerLink: '/skills'
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
