import ICONS from "./iconsMap";

type Card = {
  description: string;
  iconKey?: keyof typeof ICONS;
  numbered?: boolean;
  title?: string;
};

export type Cards = Card[];

export type CardsProps = {
  cards: Cards;
  numbered?: boolean;
};
