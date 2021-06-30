import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SkillsCard } from '../models/skills-card.model';

@Component({
  selector: 'app-skills-card-dashboard',
  templateUrl: './skills-card-dashboard.component.html',
  styleUrls: ['./skills-card-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsCardDashboardComponent implements OnInit {

  @Input() cards: SkillsCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
