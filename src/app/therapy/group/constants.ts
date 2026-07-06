import type { Cards } from "@/views/components/layout/Cards/types";
import type { Groups } from "@/views/components/layout/GroupSelector/types";

export const BENEFITS: Cards = [
  {
    description:
      "You realize you’re not alone - others face similar challenges, which can be very reassuring",
    title: "Shared experience",
  },
  {
    description: "Being part of a group reduces isolation.",
    title: "Sense of belonging",
  },
  {
    description:
      "Hearing different viewpoints can offer new insights and ways of understanding your situation.",
    title: "Multiple perspectives",
  },
  {
    description:
      "The group becomes a space to explore and improve communication and relationship skills.",
    title: "Interpersonal learning",
  },
  {
    description:
      "Members can give and receive constructive, empathetic feedback.",
    title: "Support and feedback",
  },
  {
    description: "A safe environment to share feelings and experiences.",
    title: "Emotional expression",
  },
  {
    description:
      "Members can give and receive constructive, empathetic feedback.",
    title: "Support and feedback",
  },
  {
    description:
      "Being physically present with others promotes social connection and helps reduce digital dependence.",
    title: "In-person connection",
  },
  {
    description: "Often more affordable than individual therapy.",
    title: "Cost-effective",
  },
  {
    description:
      "You can learn coping strategies by observing how others deal with similar issues.",
    title: "Modeling and learning from others",
  },
  {
    description:
      "Regular meetings and group support can help maintain commitment to change.",
    title: "Accountability and motivation",
  },
];

export const CARDS: Cards = [
  {
    description: "Balanced and compatible groups.",
  },
  {
    description: "Participants know what to expect before starting.",
  },
  {
    description: "A safer and more effective group experience.",
  },
];

export const GROUPS: Groups = [
  {
    goals: [
      {
        description:
          "Encourage small behavioral changes that increase energy, engagement, and interest in daily activities.",
        iconKey: "ImproveMood",
        title: "Improve mood and motivation",
      },
      {
        description:
          "Develop social skills, communication, and healthier relationships with others.",
        iconKey: "Connection",
        title: "Foster interpersonal connection",
      },
      {
        description:
          "Work with beliefs such as hopelessness, self-criticism, or feelings of worthlessness.",
        iconKey: "MindsetShift",
        title: "Identify and shift negative thinking patterns",
      },
      {
        description:
          "Support the re-engagement in meaningful activities and healthy routines.",
        iconKey: "BehaviouralActivation",
        title: "Promote behavioral activation",
      },
      {
        description:
          "Learn to recognize, express, and regulate emotions in a healthier way.",
        iconKey: "EmotionalAwareness",
        title: "Increase emotional awareness",
      },
      {
        description:
          "Build practical tools to manage daily emotional distress.",
        iconKey: "CopingStrategies",
        title: "Develop coping strategies",
      },
    ],
    id: "depression",
    subtitle:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Depression",
  },
  {
    goals: [
      {
        description:
          "Work on reducing avoidance and increasing flexibility in uncertain situations.",
        iconKey: "Uncertainty",
        title: "Improve tolerance of uncertainty",
      },
      {
        description:
          "Identify and reframe catastrophic or irrational thoughts.",
        iconKey: "Anxiety",
        title: "Challenge anxious thinking patterns",
      },
      {
        description:
          "Learn techniques such as grounding, breathing, and relaxation strategies.",
        iconKey: "SelfRegulation",
        title: "Enhance self-regulation skills",
      },
      {
        description:
          "Support facing avoided situations step by step to reduce fear over time.",
        iconKey: "GradualExposure",
        title: "Encourage gradual exposure and behavioral change",
      },
      {
        iconKey: "EmotionalAwareness",
        description:
          "Learn to recognize early signs of anxiety and understand personal triggers.",
        title: "Increase emotional awareness",
      },
      {
        iconKey: "CopingStrategies",
        description:
          "Practice practical tools to manage anxious thoughts, emotions, and physical symptoms.",
        title: "Develop coping strategies",
      },
    ],
    id: "anxiety",
    subtitle:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Anxiety",
  },
  {
    goals: [
      {
        description:
          "Help participants feel more comfortable sharing thoughts and emotions with others.",
        iconKey: "EmotionalExpression",
        title: "Strengthen emotional expression",
      },
      {
        description:
          "Practice active listening, expressing needs, and engaging in conversations more effectively.",
        iconKey: "Communication",
        title: "Develop communication skills",
      },
      {
        description:
          "Address thoughts such as fear of rejection, not being “good enough,” or expectations of exclusion.",
        iconKey: "HealthyRelationships",
        title: "Challenge negative beliefs about relationships",
      },
      {
        description:
          "Strengthen self-esteem and reduce anxiety in social situations.",
        iconKey: "SelfEsteem",
        title: "Improve social confidence",
      },
      {
        description:
          "Support stepping into social situations in a safe and structured way.",
        iconKey: "GradualExposure",
        title: "Encourage gradual social exposure",
      },
      {
        description:
          "Learn to better understand social cues, boundaries, and interpersonal dynamics.",
        iconKey: "SocialAwareness",
        title: "Increase social awareness",
      },
      {
        description:
          "Promote mutual understanding, validation, and encouragement among members.",
        iconKey: "SharedSupport",
        title: "Foster group support and shared experience",
      },
      {
        description:
          "Encourage the development of supportive and authentic relationships.",
        iconKey: "MeaningfulConnections",
        title: "Build meaningful social connections",
      },
    ],
    id: "loneliness",
    subtitle:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Loneliness",
  },
];
