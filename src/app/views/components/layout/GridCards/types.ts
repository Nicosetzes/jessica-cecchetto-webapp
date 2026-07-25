import ICONS from "./iconsMap";

type GridCard = {
  description: string[];
  iconKey: keyof typeof ICONS;
  title: string;
};

export type GridCards = GridCard[];

export type GridCardsProps = {
  gridCards: GridCards;
};
