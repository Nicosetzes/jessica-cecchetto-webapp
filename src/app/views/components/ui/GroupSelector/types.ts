import ICONS from "./iconsMap";

type Goal = {
  description: string;
  title: string;
  iconKey?: keyof typeof ICONS;
};

type Group = {
  id: string;
  title: string;
  subtitle: string;
  goals: Goal[];
};

export type Groups = Group[];

export type GroupSelectorProps = {
  color?: string;
  groups: Groups;
};
