export class Card {
  title: string | null = '';
  subTitle: string | null = '';
  description: string | null = '';
  url: string | null = '';
  thumbnailUrl?: string | null = '';
  shareUrl: string | null = this.url;
  type: string | null = 'image'
}
