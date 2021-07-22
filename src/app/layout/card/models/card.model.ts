export class Card {
  title: string | null = '';
  subTitle: string | null = '';
  description: string | null = '';
  url: string[] | null = [];
  thumbnailUrl?: string | null = '';
  shareUrl?: string | null;
  type: string | null = 'image'
}
