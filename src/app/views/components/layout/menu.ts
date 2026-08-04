type ChildItem = {
  href: string;
  label: string;
};

type Menu = MenuItem[];

export type MenuItem = {
  children?: ChildItem[];
  cta?: boolean;
  description?: string;
  href?: string;
  iconKey?: string;
  label: string;
};

const MENU: Menu = [
  {
    description: "Jesica Cecchetto (she/her) - Home",
    href: "/",
    iconKey: "NavbarHome",
    label: "Home",
  },
  {
    children: [
      { href: "/therapy/individual", label: "Individual" },
      { href: "/therapy/group", label: "Group" },
      {
        href: "/therapy/gender-affirming",
        label: "Gender-Affirming",
      },
    ],
    description: "Explore the therapy services I offer",
    iconKey: "NavbarTherapy",
    label: "Therapy",
  },
  {
    description: "Get to know about me and my work",
    href: "/about",
    iconKey: "NavbarAbout",
    label: "About",
  },
  {
    description: "Get in touch with me",
    href: "/contact",
    iconKey: "NavbarContact",
    label: "Get in touch",
  },
  {
    cta: true,
    description:
      "Try my self-assessment test to evaluate your current situation",
    href: "/self-assessment",
    iconKey: "NavbarSelfAssessment",
    label: "Self assessment",
  },
];

export default MENU;
