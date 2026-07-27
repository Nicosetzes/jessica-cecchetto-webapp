import ICONS from "./iconsMap";

type Card = {
  description?: string;
  iconKey?: keyof typeof ICONS;
  numbered?: boolean;
  svgSize?: number;
  title?: string;
};

export type Cards = Card[];

export type CardsProps = {
  cards: Cards;
  color?: string;
  numbered?: boolean;
  svgBackground?: string;
  svgColor?: string;
  svgSize?: number;
};
