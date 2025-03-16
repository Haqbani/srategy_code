interface Story {
  id: number;
  number: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  color: string;
}

export const stories: Story[] = [
  {
    id: 1,
    number: "001",
    date: "May 2024",
    title: "The $1.2 Billion No-Boss Experiment",
    description: "When your organization needs transformation, you have two choices: Take control of change, or let change control you. Here's the unvarnished truth about what happened when Zappos chose radical transformation.",
    imageUrl: "/images/zappos-holacracy.jp.png",
    link: "/articles/zappos-experiment",
    color: "teal"
  },
  {
    id: 2,
    number: "002",
    date: "May 2024",
    title: "You're Thinking About Leadership Frameworks All Wrong",
    description: "If you can't write your leadership strategy on the back of an envelope, it's probably wrong. That's what Microsoft CEO Satya Nadella told his executive team in 2023 before tossing out their 150-page leadership manual.",
    imageUrl: "/images/Thunder Trooperz Minimalist Design.png",
    link: "/articles/leadership-frameworks",
    color: "purple"
  }
];
