import { fields } from "@keystatic/core";

export const requiredText = (label: string, description?: string) =>
  fields.text({
    label,
    description,
    validation: { isRequired: true },
  });

export const requiredMultiline = (label: string, description?: string) =>
  fields.text({
    label,
    description,
    multiline: true,
    validation: { isRequired: true },
  });

export const lines = (label: string) =>
  fields.array(fields.text({ label: "Line", multiline: true }), {
    label,
    itemLabel: (props) => props.value || "Line",
  });

export const shortList = (label: string) =>
  fields.array(fields.text({ label: "Item" }), {
    label,
    itemLabel: (props) => props.value || "Item",
  });

const faqFields = fields.object({
  question: requiredText("Question"),
  answer: requiredMultiline("Answer"),
});

export const faqs = (label: string) =>
  fields.array(faqFields, {
    label,
    itemLabel: (props) => props.fields.question.value || "Question",
  });

export const reviewFields = fields.object({
  id: requiredText("ID", "A private label so we can tell reviews apart. Example: google-susan-mccoy."),
  author: requiredText("Name"),
  town: fields.text({ label: "Town" }),
  county: fields.text({ label: "County" }),
  serviceProvided: fields.text({ label: "Service" }),
  rating: fields.integer({
    label: "Stars",
    validation: { isRequired: true, min: 1, max: 5 },
  }),
  date: fields.text({ label: "Date shown", description: "Example: 7 years ago" }),
  highlight: fields.text({ label: "Short highlight" }),
  quote: fields.text({
    label: "Quote",
    multiline: true,
    description: "Leave blank when the review was only a star rating.",
  }),
});

export const reviewList = (label: string) =>
  fields.array(reviewFields, {
    label,
    itemLabel: (props) => props.fields.author.value || "Review",
  });

export const titledDescription = (titleLabel: string, descriptionLabel: string) =>
  fields.object({
    title: requiredText(titleLabel),
    description: requiredMultiline(descriptionLabel),
  });

export const siteImage = (label: string) =>
  fields.image({
    label,
    directory: "public/images",
    publicPath: "/images/",
    validation: { isRequired: true },
  });

export const optionalSiteImage = (label: string) =>
  fields.image({
    label,
    directory: "public/images",
    publicPath: "/images/",
  });

export const googleTitle = (note?: string) =>
  requiredText(
    "Google title",
    note ?? "The blue link people see on Google. Leave this unless you want a different search result.",
  );

export const googleBlurb = (note?: string) =>
  requiredMultiline(
    "Google description",
    note ?? "The sentence under that link. Leave this unless you want a different search result.",
  );

export const smallLabel = () =>
  requiredText("Small label", "The short words above the big headline.");

export const headline = () => requiredText("Big headline");

export const intro = (note?: string) => requiredMultiline("Sentence under the headline", note);
