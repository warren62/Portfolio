import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SkillsCard } from '../models/skills-card.model';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsCardComponent implements OnInit {

  @Input() card: SkillsCard = new SkillsCard();

  constructor() { }

  ngOnInit(): void {
  }

}
