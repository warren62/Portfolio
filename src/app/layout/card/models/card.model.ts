export class Card {
  title: string | null = '';
  subTitle: string | null = '';
  description: string | null = '';
  imgUrl: string | null = '';
  shareUrl: string | null = this.imgUrl;
}
