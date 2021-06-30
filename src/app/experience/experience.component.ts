import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExperienceCard } from './models/experience-card.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {

  cards: ExperienceCard[] = [
    {
      title: 'EZFacility',
      subTitle: '.NET/Angular Developer',
      url: 'assets/png/ez.png',
      description: '',
      shareUrl: '',
      type: '',
      start: new Date(),
      end: new Date(),
      skillsChips: [
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
          label: 'ASP.NET Web Forms',
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
          label: 'Typescript',
          routerLink: '/skills'
        },
        {
          label: 'Angular',
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
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/skills'
        },
        {
          label: 'EZTMS API',
          routerLink: '/skills'
        },
        {
          label: 'EZUI',
          routerLink: '/skills'
        },
        {
          label: 'EZUI API',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'RSM Sensitron Semiconductor',
      subTitle: 'Automation .NET developer',
      url: 'assets/png/rsm.png',
      description: `<ul><li>Create ERP/MRP systems to help production ensure orders are delivered on time</li><li>Integrate floor machinery with internal software via API’s</li><li>Revamp/debug old production management systems</li><li>Install and provide in house code customizations for ERP system (Made2Manage)</li></ul>`,
      shareUrl: '',
      type: '',
      start: new Date(),
      end: new Date(),
      skillsChips: [
        {
          label: '.Net',
          routerLink: '/skills'
        },
        {
          label: 'C#',
          routerLink: '/skills'
        },
        {
          label: 'WPF/MVVM',
          routerLink: '/skills'
        },
        {
          label: 'Visual Basic',
          routerLink: '/skills'
        },
        {
          label: 'SQL',
          routerLink: '/skills'
        },
        {
          label: 'Access',
          routerLink: '/skills'
        },
        {
          label: 'M2M ERP System',
          routerLink: '/skills'
        },
      ],
      projectChips: [
        {
          label: 'M2M',
          routerLink: '/skills'
        },
        {
          label: 'BOM Manager',
          routerLink: '/skills'
        },
        {
          label: 'WIP Manager',
          routerLink: '/skills'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/skills'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/skills'
        }
      ]
    },
    {
      title: 'Voxx International',
      subTitle: 'Data Analyst',
      url: 'assets/png/voxx.png',
      description: '<ul><li>Salesforce Administrator/Developer</li><li>Business Objects Administrator</li><li>Generate, modify, automate, and troubleshoot various business reports</li><li>Conduct server maintenance.</li></ul>',
      shareUrl: '',
      type: '',
      start: new Date(),
      end: new Date(),
      skillsChips: [
        {
          label: 'Salesforce',
          routerLink: '/skills'
        },
        {
          label: 'Java',
          routerLink: '/skills'
        },
        {
          label: 'Visual Basic',
          routerLink: '/skills'
        },
        {
          label: 'VBA',
          routerLink: '/skills'
        },
        {
          label: 'M2M',
          routerLink: '/skills'
        },
        {
          label: 'AS400',
          routerLink: '/skills'
        },
        {
          label: 'Business Objects',
          routerLink: '/skills'
        }
      ],
      projectChips: []
    },
    {
      title: 'Specialist, US Army – Combat Engineer',
      subTitle: 'Team leader for 2nd Platoon 62nd Sapper Company',
      url: 'assets/jpg/combat-engineer.jpg',
      description: '',
      shareUrl: '',
      type: '',
      start: new Date(),
      end: new Date(),
      skillsChips: [
      ],
      projectChips: [

      ]
    }
  ];

  skillsChips: { label: string, routerLink?: string }[] = [
    {
      label: 'Test',
      routerLink: '/about'
    },
    {
      label: 'Test 1',
      routerLink: '/home'
    },
    {
      label: 'Test',
      routerLink: '/contact'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
