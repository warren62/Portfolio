import { Card } from "src/app/layout/card/models/card.model";

export class SkillsCard extends Card {
  projectChips: { label: string, routerLink?: string }[] = [];
  experienceChips: { label: string, routerLink?: string }[] = [];
}
