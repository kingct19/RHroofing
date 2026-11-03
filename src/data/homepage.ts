import questions from "../content/home/questions.json";

export interface HomepageFaq {
  question: string;
  answer: string;
}

export const HOMEPAGE_FAQS = questions.faqs satisfies HomepageFaq[];
