import type { Metadata } from "next";
import SelfAssessment from "./SelfAssessment";

export const metadata: Metadata = {
  alternates: {
    canonical: "/self-assessment",
  },
  description:
    "Take a short self-assessment to reflect on your emotional wellbeing and better understand whether therapy may be helpful for you.",
  openGraph: {
    description:
      "A short self-assessment to reflect on your emotional wellbeing and consider whether therapy may be helpful for you.",
    title: "Self-Assessment | Jesica Cecchetto",
    type: "website",
    url: "/self-assessment",
  },
  title: "Self-Assessment",
};

export default function Page() {
  return <SelfAssessment />;
}
