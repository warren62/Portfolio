import { Card } from "src/app/layout/card/models/card.model";

export class ExperienceCard extends Card {
  start: Date | null = null;
  end: Date | null = null;
  skillsChips: { label: string, routerLink?: string }[] = [];
  projectChips: { label: string, routerLink?: string }[] = [];
}
