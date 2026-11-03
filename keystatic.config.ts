import { config, fields, singleton } from "@keystatic/core";
import { editorScreens } from "./keystatic.screens";
import {
  faqs,
  googleBlurb,
  googleTitle,
  lines,
  optionalSiteImage,
  requiredMultiline,
  requiredText,
  reviewList,
  shortList,
  siteImage,
  titledDescription,
} from "./keystatic.fields";

// Local development writes src/content. Production commits through GitHub so a
// save on the live site redeploys. Connect it once by switching this to github
// and opening /keystatic; Keystatic writes the app env vars into .env.
const storage =
  process.env.NODE_ENV === "production"
    ? ({ kind: "github", repo: "kingct19/RHroofing" } as const)
    : ({ kind: "local" } as const);

export default config({
  storage,
  ui: {
    brand: { name: "Raymond Hardin Roofing" },
    navigation: {
      "Start here": [
        "company",
        "homeHero",
        "homeIntro",
        "homeSystems",
        "homeProcess",
        "homeTowns",
        "homeFacts",
        "homeCrew",
        "homeQuestions",
        "gallery",
        "reviews",
      ],
      Pages: [
        "aboutPage",
        "contactPage",
        "galleryPage",
        "servicesPage",
        "repairsPage",
        "townsPage",
        "services",
        "repairs",
        "serviceAreas",
      ],
      "Menu and forms": [
        "navigation",
        "footer",
        "estimateForm",
        "reviewQr",
        "serviceWords",
        "repairWords",
        "townWords",
        "missingPage",
      ],
    },
  },
  singletons: {
    company: singleton({
      label: "Phone, logo, and hours",
      path: "src/content/company",
      format: { data: "json" },
      entryLayout: "form",
      schema: {
        name: requiredText("Business name"),
        logo: siteImage("Logo"),
        logoAlt: requiredText("Logo description"),
        legalName: requiredText("Legal name"),
        tagline: requiredMultiline("Tagline"),
        foundedYear: fields.integer({
          label: "Year established",
          validation: { isRequired: true, min: 1900, max: 2100 },
        }),
        experienceYears: fields.integer({
          label: "Years of experience",
          description: "Used where the site says 40+ years.",
          validation: { isRequired: true, min: 0 },
        }),
        startedAge: fields.integer({
          label: "Age Raymond started roofing",
          validation: { isRequired: true, min: 0 },
        }),
        phoneDisplay: requiredText("Work phone", "Example: 903-797-2756"),
        phoneLabel: requiredText("Work phone label"),
        phoneSecondaryDisplay: requiredText("Cell phone"),
        phoneSecondaryLabel: requiredText("Cell phone label"),
        email: requiredText("Email"),
        domain: requiredText("Website", "Include https://"),
        headquarters: fields.object(
          {
            city: requiredText("City"),
            county: requiredText("County"),
            state: requiredText("State abbreviation"),
            stateFull: requiredText("State"),
            zip: requiredText("ZIP"),
            region: requiredText("Region"),
            latitude: fields.number({
              label: "Latitude",
              validation: { isRequired: true },
            }),
            longitude: fields.number({
              label: "Longitude",
              validation: { isRequired: true },
            }),
          },
          { label: "Headquarters" },
        ),
        hours: fields.object(
          {
            weekdays: requiredText("Hours"),
            emergency: requiredText("Emergency note"),
            schemaOpeningHours: shortList("Hours for Google"),
          },
          {
            label: "Hours",
            description: "The last line is for Google. It looks like Mo-Sa 07:00-18:00. Leave it unless the hours change.",
          },
        ),
        corePromise: requiredMultiline("About summary"),
        storySummary: requiredMultiline("Raymond's story"),
        carePromise: requiredMultiline("Cleanup promise"),
        credentialsSummary: requiredMultiline("Credentials"),
        countiesServed: shortList("Counties served"),
        highlights: fields.array(
          fields.object({
            label: requiredText("Label"),
            value: requiredText("Short value"),
            detail: requiredText("Detail"),
          }),
          {
            label: "Homepage highlights",
            itemLabel: (props) => props.fields.label.value || "Highlight",
          },
        ),
      },
    }),
    reviews: singleton({
      label: "Reviews",
      path: "src/content/reviews",
      format: { data: "json" },
      entryLayout: "form",
      previewUrl: "/",
      schema: {
        title: requiredText("Headline above the reviews"),
        moreLabel: requiredText("More reviews button"),
        googleReviewsUrl: requiredText("Link to the Google reviews"),
        googleReviewUrl: requiredText("Link for writing a review"),
        googleReviewQrUrl: requiredText(
          "Link inside the QR code",
          "Leave this alone unless Google gives you a new review link.",
        ),
        reviews: reviewList("Google reviews"),
        eastTexasReviews: reviewList("More customer reviews"),
      },
    }),
    gallery: singleton({
      label: "Gallery photos",
      path: "src/content/gallery",
      format: { data: "json" },
      entryLayout: "form",
      previewUrl: "/gallery",
      schema: {
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Photo",
              directory: "public/images",
              publicPath: "/images/",
              validation: { isRequired: true },
            }),
            title: requiredText("Title"),
            category: fields.select({
              label: "Category",
              options: [
                { label: "Shingle", value: "shingle" },
                { label: "Metal", value: "metal" },
                { label: "Torch-down", value: "flat" },
                { label: "Crew", value: "crew" },
              ],
              defaultValue: "shingle",
            }),
          }),
          {
            label: "Photos",
            itemLabel: (props) => props.fields.title.value || "Photo",
          },
        ),
      },
    }),
    services: singleton({
      label: "Service write-ups",
      path: "src/content/services",
      format: { data: "json" },
      entryLayout: "form",
      schema: {
        services: fields.array(
          fields.object({
            slug: requiredText(
              "Web address",
              "The end of the page address, like shingle-roofing. Don't change this after the page is live.",
            ),
            title: requiredText("Title"),
            shortTitle: requiredText("Short title"),
            tagline: requiredMultiline("Tagline"),
            listSummary: requiredMultiline("List summary"),
            category: fields.select({
              label: "Category",
              options: [
                { label: "Residential", value: "residential" },
                { label: "Commercial", value: "commercial" },
                { label: "Residential and commercial", value: "both" },
              ],
              defaultValue: "both",
            }),
            imageUrl: siteImage("Main photo"),
            secondaryImageUrl: siteImage("Second photo"),
            metaTitle: googleTitle(),
            metaDescription: googleBlurb(),
            heroSummary: requiredMultiline("Intro"),
            overviewParagraphs: lines("Overview paragraphs"),
            idealFor: shortList("Ideal for"),
            eastTexasBenefits: fields.array(titledDescription("Benefit", "Description"), {
              label: "Benefits",
              itemLabel: (props) => props.fields.title.value || "Benefit",
            }),
            processSteps: fields.array(
              fields.object({
                step: requiredText("Step number"),
                title: requiredText("Title"),
                description: requiredMultiline("Description"),
              }),
              {
                label: "Process",
                itemLabel: (props) => props.fields.title.value || "Step",
              },
            ),
            specs: fields.array(
              fields.object({
                label: requiredText("Label"),
                value: requiredText("Value"),
              }),
              {
                label: "Specs",
                itemLabel: (props) => props.fields.label.value || "Spec",
              },
            ),
            faqs: faqs("Questions"),
          }),
          {
            label: "Services",
            itemLabel: (props) => props.fields.shortTitle.value || "Service",
          },
        ),
      },
    }),
    repairs: singleton({
      label: "Repair write-ups",
      path: "src/content/repairs",
      format: { data: "json" },
      entryLayout: "form",
      schema: {
        repairs: fields.array(
          fields.object({
            slug: requiredText(
              "Web address",
              "The end of the page address, like leaky-roof-repair. Don't change this after the page is live.",
            ),
            title: requiredText("Title"),
            summary: requiredMultiline("Summary"),
            imageUrl: siteImage("Photo"),
            metaTitle: googleTitle(),
            metaDescription: googleBlurb(),
            intro: requiredMultiline("Intro"),
            sections: fields.array(
              fields.object({
                heading: requiredText("Heading"),
                paragraphs: lines("Paragraphs"),
              }),
              {
                label: "Sections",
                itemLabel: (props) => props.fields.heading.value || "Section",
              },
            ),
            pointsHeading: requiredText("Bullet heading"),
            points: shortList("Bullets"),
            faqs: faqs("Questions"),
          }),
          {
            label: "Repair pages",
            itemLabel: (props) => props.fields.title.value || "Repair",
          },
        ),
      },
    }),
    serviceAreas: singleton({
      label: "Town write-ups",
      path: "src/content/service-areas",
      format: { data: "json" },
      entryLayout: "form",
      schema: {
        cities: fields.array(
          fields.object({
            slug: requiredText(
              "Web address",
              "The end of the page address, like gilmer-tx. Don't change this after the page is live.",
            ),
            city: requiredText("City"),
            county: requiredText("County"),
            zipCodes: shortList("ZIP codes"),
            distanceFromGilmer: requiredText("Distance from Gilmer"),
            driveTimeFromGilmer: requiredText("Drive time"),
            highwayCorridor: requiredText("Highway corridor"),
            isHeadquarters: fields.checkbox({
              label: "Headquarters city",
              defaultValue: false,
            }),
            tagline: requiredText("Tagline"),
            cardLine: requiredMultiline("Card summary"),
            photo: optionalSiteImage("Town photo"),
            photoAlt: fields.text({ label: "Photo description" }),
            photoCredit: fields.text({ label: "Photo credit", description: "Leave blank for a photo you own." }),
            photoLicense: fields.text({ label: "Photo license" }),
            photoCreditUrl: fields.text({ label: "Photo credit link" }),
            metaTitle: googleTitle(),
            metaDescription: googleBlurb(),
            introParagraph: requiredMultiline("Intro"),
            localContextParagraph: requiredMultiline("Local context"),
            neighborhoodsAndLandmarks: shortList("Neighborhoods and landmarks"),
            localRoofChallenges: fields.array(titledDescription("Challenge", "Description"), {
              label: "Local roof challenges",
              itemLabel: (props) => props.fields.title.value || "Challenge",
            }),
            popularServicesNote: requiredMultiline("Popular services"),
            faqs: faqs("Questions"),
          }),
          {
            label: "Cities",
            itemLabel: (props) => props.fields.city.value || "City",
          },
        ),
      },
    }),
    ...editorScreens,
  },
});
