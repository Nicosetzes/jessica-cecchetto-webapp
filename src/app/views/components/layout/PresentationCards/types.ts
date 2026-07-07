type PresentationCard = {
  description: string;
  eyebrow: string;
  imageAlt: string;
  imageUrl: string;
  linkUrl: string;
  title: string;
};

export type PresentationCards = PresentationCard[];

export type PresentationCardsProps = {
  presentationCards: PresentationCards;
};
