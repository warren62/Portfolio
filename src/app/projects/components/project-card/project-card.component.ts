import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from '@app/projects/models/project-card.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent implements OnInit {

  @Input() card: ProjectCard = new ProjectCard();
  constructor() { }

  ngOnInit(): void {
  }

}
