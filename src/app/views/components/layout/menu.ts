type ChildItem = {
  href: string;
  label: string;
};

type Menu = MenuItem[];

export type MenuItem = {
  children?: ChildItem[];
  cta?: boolean;
  description?: string;
  href: string;
  iconKey?: string;
  label: string;
};

const MENU: Menu = [
  {
    description: "Jésica Cecchetto - Home",
    href: "/",
    iconKey: "NavbarHome",
    label: "Home",
  },
  {
    children: [
      { href: "/therapy", label: "Overview" },
      { href: "/therapy/individual", label: "Individual" },
      { href: "/therapy/group", label: "Group" },
    ],
    description: "My therapy sessions",
    href: "/therapy",
    label: "Therapy",
  },
  {
    description: "About me",
    href: "/about",
    iconKey: "NavbarAbout",
    label: "About",
  },
  {
    description: "Contact me",
    href: "/contact",
    iconKey: "NavbarContact",
    label: "Contact",
  },
  {
    cta: true,
    description: "Try my screening test to assess your current situation",
    href: "/self-assessment",
    iconKey: "NavbarScreeningTest",
    label: "Self assessment",
  },
];

export default MENU;
