import { Card } from "@app/layout/card/models/card.model";

export class ProjectCard extends Card {
  technologyChips: { label: string, routerLink?: string }[] = [];
}
