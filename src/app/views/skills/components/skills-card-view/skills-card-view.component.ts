import { Component, Input, OnInit } from '@angular/core';
import { SkillsCard } from '../models/skills-card.model';

@Component({
  selector: 'app-skills-card-view',
  templateUrl: './skills-card-view.component.html',
  styleUrls: ['./skills-card-view.component.scss']
})
export class SkillsCardViewComponent implements OnInit {

  @Input() cards: SkillsCard[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
