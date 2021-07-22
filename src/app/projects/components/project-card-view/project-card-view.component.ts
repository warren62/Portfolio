import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from '@app/projects/models/project-card.model';

@Component({
  selector: 'app-project-card-view',
  templateUrl: './project-card-view.component.html',
  styleUrls: ['./project-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardViewComponent implements OnInit {

  @Input() cards: ProjectCard[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
