import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExperienceCard } from '../../models/experience-card.model';

@Component({
  selector: 'app-experience-card-view',
  templateUrl: './experience-card-view.component.html',
  styleUrls: ['./experience-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardViewComponent implements OnInit {

  @Input() cards: ExperienceCard[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
