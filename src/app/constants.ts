import type { Cards } from "@/views/components/layout/Cards/types";
import { PresentationCards } from "./views/components/layout/PresentationCards/types";

export const CARDS: Cards = [
  {
    iconKey: "Anxiety",
    title: "Anxiety",
  },
  {
    iconKey: "Depression",
    title: "Depression",
  },
  {
    iconKey: "Loneliness",
    title: "Loneliness",
  },
  {
    iconKey: "Grief",
    title: "Grief",
  },
  {
    iconKey: "Communication",
    title: "Social Difficulties",
  },
  {
    iconKey: "GenderAffirmativeModel",
    title: "Gender-Affirming Counselling",
  },
];

export const PRESENTATION_CARDS: PresentationCards = [
  {
    description:
      "A confidential space focused entirely on your personal experiences, emotions and goals.",
    eyebrow: "One-to-one",
    imageAlt: "Individual Therapy",
    imageUrl: "/images/therapy-individual.png",
    linkUrl: "/therapy/individual",
    title: "Individual Therapy",
  },
  {
    description:
      "Connect with others facing similar challenges while developing new perspectives in a professionally guided environment.",
    eyebrow: "Shared experience",
    imageAlt: "Group Therapy",
    imageUrl: "/images/therapy-group.png",
    linkUrl: "/therapy/group",
    title: "Group Therapy",
  },
  {
    description:
      "An affirming therapeutic space that recognizes gender diversity and supports personal growth, resilience, and emotional well-being.",
    eyebrow: "Gender-affirming",
    imageAlt: "Gender-Affirming Counselling",
    imageUrl: "/images/therapy-gender.png",
    linkUrl: "/therapy/gender-affirming",
    title: "Gender-Affirming Counselling",
  },
];
