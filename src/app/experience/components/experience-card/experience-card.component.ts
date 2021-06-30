import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ExperienceCard } from '../../models/experience-card.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCardComponent implements OnInit {

  @Input() card: ExperienceCard = new ExperienceCard();

  constructor() { }

  ngOnInit(): void {
  }

}
