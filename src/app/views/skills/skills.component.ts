import { Component, OnInit } from '@angular/core';
import { SkillsCard } from './components/models/skills-card.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  cards: SkillsCard[] = [
    {
      title: '.NET',
      subTitle: '3+ years',
      url: 'assets/svg/dot-net-core-7.svg',
      description:
      `<ul>
          <li>3+ years experience as a .NET developer</li>
          <li>WPF/MVVM, WinForms, Asp, MVC, VB/C#, .NET WebAPI </li>
          <li>Revamp/debug old production management systems</li>
          <li>Install and provide in house code customizations for ERP system (Made2Manage)</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZTMS API',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZUI API',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'Java',
      subTitle: '4+ years',
      url: 'assets/svg/java-4.svg',
      description:
      `<ul>
          <li>4+ years experience working with Java</li>
          <li>Java was the language I used primarily in school</li>
          <li>Andorid Development</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'UML Editor',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'Javascript',
      subTitle: '3+ years',
      url: 'assets/svg/javascript-2.svg',
      description:
      `<ul>
          <li>3+ years experience working with Javascript</li>
          <li>Used in various random applications throughout the EZTMS project in conjunction with MVC/WebForms</li>
          <li>Typescript for angular</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
      ]
    },
    {
      title: 'Typescript',
      subTitle: '3+ years',
      url: 'assets/svg/typescript.svg',
      description:
      `<ul>
          <li>3+ years experience working with Typescript/Angular</li>
          <li>Used in creation of all components for EZUI</li>
          <li>Typescript for angular</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
      ]
    },
    {
      title: 'JQuery',
      subTitle: '3+ years',
      url: 'assets/svg/jquery-1.svg',
      description:
      `<ul>
          <li>3+ years experience working with Jquery/Javascript</li>
          <li>Used in various places in EZTMS project</li>
          <li>Typescript for angular</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
      ]
    },
    {
    title: 'HMTL/CSS',
    subTitle: '3+ years',
    url: 'assets/svg/html5-2.svg',
    description:
    `<ul>
        <li>3+ years experience working with HTML/CSS</li>
        <li>Anuglar/WebForms/MVC</li>
    </ul>`,
    shareUrl: '',
    type: 'image',
    experienceChips: [
      {
        label: 'EZFacility',
        routerLink: '/experience'
      },
      {
        label: 'Voxx International',
        routerLink: '/experience'
      }
    ],
    projectChips: [
      {
        label: 'EZTMS',
        routerLink: '/projects'
      },
      {
        label: 'EZTMS API',
        routerLink: '/projects'
      },
      {
        label: 'EZUI',
        routerLink: '/projects'
      },
      {
        label: 'EZUI API',
        routerLink: '/projects'
      },
      {
        label: 'EZ Self-Service',
        routerLink: '/projects'
      }
    ]
  },
    {
    title: 'Flutter/Dart',
    subTitle: '< 1 years',
    url: 'assets/svg/flutter.svg',
    description:
    `<ul>
        <li>Started creating my own Flutter project recently</li>
        <li>I have very limited experience here but am learning</li>
    </ul>`,
    shareUrl: '',
    type: 'image',
    experienceChips: [

    ],
    projectChips: [
      {
        label: 'TBD',
        routerLink: '/projects'
      }
    ]
  },
    {
      title: 'SQL Server',
      subTitle: '3+ years',
      url: 'assets/svg/t-sql.svg',
      description:
      `<ul>
          <li>3+ years experience working with SQL</li>
          <li>Was the main SQL dev for RSM and wrote SPROCS/tables/views/scripts for code at EZfacility</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZTMS API',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZUI API',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'ASP.NET',
      subTitle: '3+ years',
      url: 'assets/svg/microsoft-net.svg',
      description:
      `<ul>
          <li>3+ years experience as an ASP.NET developer</li>
          <li>Worked on WebForms and MVC projects</li>
          <li>Primarily for EZfacility, the main site was done in WebForms(aspx) and out self-service site was done using MVC</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZTMS API',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZUI API',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'SSRS',
      subTitle: '2+ years',
      url: 'assets/svg/t-sql.svg',
      description:
      `<ul>
          <li>2+ years experience working with SSRS</li>
          <li>Was the main SQL dev for RSM</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZTMS',
          routerLink: '/projects'
        },
        {
          label: 'EZTMS API',
          routerLink: '/projects'
        },
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZUI API',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'WPF/MVVM',
      subTitle: '2+ years',
      url: 'assets/svg/microsoft-windows-22.svg',
      description:
      `<ul>
          <li>2+ years experience building WPF desktop applications primarily for RSM</li>
          <li>Created several desktop applications to handle various manufacturing floor applications</li>
          <li>Automation of tasks on the manufacturing floor</li>
      </ul>`,
      shareUrl: '',
      type: 'image',
      experienceChips: [
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
      ]
    },
    {
      title: 'Angular',
      subTitle: '2+ years',
      url: 'assets/svg/angular-icon.svg',
      description:
        `<ul>
            <li>2+ years working on Angular SPA's primarily for EZfacility</li>
            <li>Rxjs, Redux, Ngrx, Observables, Schematics etc.</li>
        </ul>`,
      shareUrl: '',
      type: '',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'EZ Schematics',
          routerLink: '/projects'
        },
        {
          label: 'EZ Self-Service',
          routerLink: '/projects'
        },
        {
          label: 'Portfolio',
          routerLink: '/projects'
        },
        {
          label: 'APOD View',
          routerLink: '/projects'
        }
      ]
    },

    {
      title: 'Ngrx',
      subTitle: '2+ years',
      url: 'assets/svg/ngrx.svg',
      description:
        `<ul>
            <li>2+ years working on Angular SPA's using Ngrx to manage redux state primarily for EZfacility</li>
            <li>Entity, Effects, Data, Store, Component Store</li>
            <li>This project uses Ngrx primarily as a demonstration</li>
        </ul>`,
      shareUrl: '',
      type: '',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'Portfolio',
          routerLink: '/projects'
        },
        {
          label: 'APOD View',
          routerLink: '/projects'
        }
      ]
    },


    {
      title: 'AWS',
      subTitle: '1+ Year',
      url: 'assets/svg/aws-2.svg',
      description:
        `<ul>
            <li>1+ years working for EZFacility</li>
            <li>Lambda, Secrets, ECR, ECS, Fargate</li>
            <li>This is an area where I could improve.</li>
        </ul>`,
      shareUrl: '',
      type: '',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        }
      ],
      projectChips: []
    },
    {
      title: 'Bash',
      subTitle: '3+ years',
      url: 'assets/svg/bash-1.svg',
      description:
      `<ul>
          <li>3+ years wrirting Bash scripts for various projects</li>
          <li>Created most of the custom build scripts and .bashrc files used for EZUI</li>
          <li>Created scripts to handle custom cultures</li>
      </ul>`,
      shareUrl: '',
      type: '',
      experienceChips: [
        {
          label: 'EZFacility',
          routerLink: '/experience'
        },
        {
          label: 'RSM Sensitron Semiconductor',
          routerLink: '/experience'
        },
        {
          label: 'Voxx International',
          routerLink: '/experience'
        }
      ],
      projectChips: [
        {
          label: 'EZUI',
          routerLink: '/projects'
        },
        {
          label: 'BOM Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Manager',
          routerLink: '/projects'
        },
        {
          label: 'WIP Schedule',
          routerLink: '/projects'
        },
        {
          label: 'Solder Dip Manager',
          routerLink: '/projects'
        }
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
