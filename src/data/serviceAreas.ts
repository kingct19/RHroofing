export interface ServiceAreaCity {
  slug: string;
  city: string;
  county: string;
  zipCodes: string[];
  distanceFromGilmer: string;
  driveTimeFromGilmer: string;
  highwayCorridor: string;
  isHeadquarters?: boolean;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  introParagraph: string;
  localContextParagraph: string;
  neighborhoodsAndLandmarks: string[];
  localRoofChallenges: {
    title: string;
    description: string;
  }[];
  popularServicesNote: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICE_AREA_CITIES: ServiceAreaCity[] = [
  {
    slug: "gilmer-tx",
    city: "Gilmer",
    county: "Upshur County",
    zipCodes: ["75644", "75645"],
    distanceFromGilmer: "Home Base (0 miles)",
    driveTimeFromGilmer: "Local HQ",
    highwayCorridor: "US-271 & TX-154 Crossroads",
    isHeadquarters: true,
    tagline: "Gilmer's Hometown Family Roofing Contractor Since 1995",
    metaTitle: "Roofing Contractor in Gilmer, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Based in Gilmer, TX since 1995, Raymond Hardin Roofing provides trusted residential and commercial shingle, metal, and torch-down rubber roofing, tear-offs, and re-decks. Call 903-797-2756.",
    introParagraph:
      "Gilmer isn't just a service area on a map—it's our home. Since 1995, Raymond Hardin Roofing has been proud to serve our neighbors across Gilmer and all of Upshur County with honest, dependable residential and commercial roofing.",
    localContextParagraph:
      "From historic homes around the Upshur County Courthouse square and the Yamboree grounds to Lake Gilmer properties, ranch homes along TX-154 and US-271, and commercial buildings throughout town, our crew knows Gilmer's housing stock inside and out. Whether your roof took hail damage in a spring storm, suffers from heavy pine needle buildup, or needs a full tear-off and re-deck, you can count on a local family roofer who stands behind every nail.",
    neighborhoodsAndLandmarks: [
      "Downtown Gilmer & Courthouse Square",
      "Lake Gilmer & Kelsey Communities",
      "US-271 North & South Corridors",
      "TX-154 East & West / Latch & Rhonesboro",
      "Union Hill, Cox, and Glenwood Areas",
      "Gilmer Industrial & Commercial District",
    ],
    localRoofChallenges: [
      {
        title: "Pine Canopy Moisture & Debris",
        description:
          "Surrounded by dense East Texas loblolly pines and oaks, Gilmer roofs face constant needle accumulation in valleys that rots inferior underlayment unless properly flashed.",
      },
      {
        title: "Upshur County Spring Hail & Straight-Line Winds",
        description:
          "Severe spring storm tracks regularly push high winds and hail across Lake Gilmer and US-271, demanding high-wind 6-nail architectural shingles or heavy-gauge metal.",
      },
      {
        title: "Older Spaced-Board Decking on Historic Homes",
        description:
          "Many classic Gilmer homes built decades ago have spaced 1x4 decking or multiple shingle layers that require full tear-offs and solid OSB/plywood re-decking.",
      },
    ],
    popularServicesNote:
      "In Gilmer, our most requested services include complete architectural shingle tear-offs, custom standing seam and R-panel metal roofs for country homes and shops, and torch-down rubber membranes for downtown commercial flat roofs and residential patio additions.",
    faqs: [
      {
        question: "Where is Raymond Hardin Roofing located?",
        answer:
          "We are headquartered right here in Gilmer, TX and have been family-owned and operated in Upshur County since 1995. When you call 903-797-2756, you're speaking with your local Gilmer neighbors.",
      },
      {
        question: "How quickly can you inspect a leaking roof in Gilmer?",
        answer:
          "Because Gilmer is our home base, we can often inspect active leaks or storm damage the same day or next day.",
      },
      {
        question: "Do you handle both residential and commercial roofs in Gilmer?",
        answer:
          "Yes! We install and repair residential shingle and metal roofs across all Gilmer neighborhoods, as well as torch-down rubber and metal roofs for Gilmer commercial buildings and churches.",
      },
    ],
  },
  {
    slug: "longview-tx",
    city: "Longview",
    county: "Gregg County",
    zipCodes: ["75601", "75602", "75603", "75604", "75605"],
    distanceFromGilmer: "19 miles south",
    driveTimeFromGilmer: "22 mins down US-271 / TX-300",
    highwayCorridor: "US-259, TX-300 & I-20 Corridor",
    tagline: "Trusted Residential & Commercial Roofers Serving Longview, TX Since 1995",
    metaTitle: "Roofing Contractor in Longview, TX | Shingle, Metal & Flat Roof Repair | Raymond Hardin Roofing",
    metaDescription:
      "Need a dependable roofer in Longview, TX? Raymond Hardin Roofing provides shingle roofs, metal roofing, torch-down flat roofs, tear-offs, and re-decks across Gregg County. Call 903-797-2756.",
    introParagraph:
      "Just 20 minutes north up TX-300 in Gilmer, Raymond Hardin Roofing has served homeowners and commercial property owners across Longview, TX since 1995. We deliver experienced craftsmanship without the inflated overhead of out-of-town franchise roofers.",
    localContextParagraph:
      "From established tree-lined neighborhoods in Spring Hill, Pine Tree, and Judson to commercial properties along Loop 281, Marshall Avenue (US-80), and South Longview, we install shingle, metal, and torch-down rubber roofing systems built for Gregg County weather. Whether you need a complete residential tear-off and re-deck or a flat commercial roof replacement, our family-owned team gets the job done right.",
    neighborhoodsAndLandmarks: [
      "Spring Hill & North Longview (TX-300)",
      "Pine Tree & Northwest Longview",
      "Judson, McCann Road & Hollybrook",
      "Downtown Longview & Marshall Ave (US-80)",
      "Loop 281 Commercial Corridor",
      "Lake Cherokee & Chalk Hill Areas",
    ],
    localRoofChallenges: [
      {
        title: "Mature Pine & Oak Overhangs in Spring Hill & Pine Tree",
        description:
          "Heavy tree cover in established Longview neighborhoods drops limbs and traps valley moisture, making impact-resistant shingles, clean metal valleys, and solid decking essential.",
      },
      {
        title: "Commercial Flat Roof Drainage on Loop 281 & US-80",
        description:
          "Retail and industrial buildings across Longview rely on watertight flat membranes; our torch-down modified bitumen rubber stops chronic ponding-water leaks.",
      },
      {
        title: "High-Heat Attic Loads in Gregg County Summers",
        description:
          "Proper ridge ventilation and reflective metal or architectural shingle systems protect Longview roofs from premature baking and blistering.",
      },
    ],
    popularServicesNote:
      "Longview property owners frequently call us for architectural shingle replacements in Spring Hill and Pine Tree, low-slope torch-down rubber roofs on patio extensions and commercial buildings, and full re-decks on mid-century homes.",
    faqs: [
      {
        question: "Do you provide free roof estimates in Longview, TX?",
        answer:
          "Yes! Our crews are in Longview almost daily via TX-300 and US-259. Call 903-797-2756 for a free, no-pressure roof inspection anywhere in Longview or Gregg County.",
      },
      {
        question: "Can you fix a leaking flat porch transition on a Longview home?",
        answer:
          "Absolutely. Many Longview homes have low-slope back patio covers or additions that leak because shingles were used on a flat pitch. We install heat-welded torch-down rubber to permanently seal those transitions.",
      },
    ],
  },
  {
    slug: "tyler-tx",
    city: "Tyler",
    county: "Smith County",
    zipCodes: ["75701", "75702", "75703", "75704", "75706", "75707", "75708", "75709"],
    distanceFromGilmer: "38 miles southwest",
    driveTimeFromGilmer: "42 mins via US-271 & I-20",
    highwayCorridor: "US-271, Loop 323 & US-69 Corridor",
    tagline: "Experienced East Texas Craftsmanship for Tyler Homes & Commercial Buildings",
    metaTitle: "Roofing Contractor in Tyler, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Serving Tyler and Smith County since 1995. Raymond Hardin Roofing specializes in shingle roofs, standing seam metal roofs, torch-down rubber flat roofs, and re-decks. Call 903-797-2756.",
    introParagraph:
      "Homeowners and business owners in Tyler, TX value quality workmanship and fair, honest pricing. Established in 1995 in nearby Gilmer, Raymond Hardin Roofing serves all of Tyler and Smith County with residential and commercial roofing built to last.",
    localContextParagraph:
      "Whether your home is in the historic Azalea District, the wooded hills of South Tyler, near UT Tyler and Lake Tyler, or along the North Tyler US-271 corridor, our team provides thorough tear-offs, structural re-decks, architectural shingle replacements, custom metal roofs, and torch-down rubber flat roofing.",
    neighborhoodsAndLandmarks: [
      "Azalea District & Brick Streets Historic Homes",
      "South Tyler, Hollytree & Broadway Corridor",
      "North Tyler & US-271 / Chapel Hill",
      "Woods, UT Tyler & East Southeast Loop 323",
      "Lake Tyler, Whitehouse & Bullard Approaches",
      "Lindale & I-20 Northern Smith County",
    ],
    localRoofChallenges: [
      {
        title: "Complex Roof Pitch & Valley Geometry",
        description:
          "Many Tyler homes feature steep multi-gable rooflines and dead valleys where water concentrates—requiring expert metal valley flashing and ice-and-water membrane protection.",
      },
      {
        title: "Severe Smith County Hail & Wind Events",
        description:
          "Spring supercells moving across I-20 and Loop 323 frequently bring damaging hail and 70+ MPH winds; we install Class 4 impact shingles and rugged metal roofing.",
      },
      {
        title: "Historic & Mid-Century Deck Restorations",
        description:
          "Older Tyler homes often conceal spaced 1x4 plank decking underneath multiple shingle layers—we perform clean tear-offs and full plywood/OSB re-decks.",
      },
    ],
    popularServicesNote:
      "In Tyler, we specialize in high-profile architectural shingle replacements, standing seam metal accents and full roofs, structural re-decking for older homes, and commercial torch-down rubber flat roofing.",
    faqs: [
      {
        question: "Does Raymond Hardin Roofing travel to Tyler for residential and commercial jobs?",
        answer:
          "Yes! Tyler is a core part of our East Texas service area, located a straight shot down US-271. We have served Smith County homeowners and businesses since 1995.",
      },
      {
        question: "Why choose Raymond Hardin Roofing over large Tyler sales companies?",
        answer:
          "With us, you don't pay for high-pressure commission salesmen or bloated corporate overhead. You get 30+ years of direct, family-owned East Texas roofing experience and superior workmanship at a fair price.",
      },
    ],
  },
  {
    slug: "gladewater-tx",
    city: "Gladewater",
    county: "Gregg & Upshur Counties",
    zipCodes: ["75647"],
    distanceFromGilmer: "13 miles south",
    driveTimeFromGilmer: "15 mins down US-271",
    highwayCorridor: "US-271 & US-80 Crossroads",
    tagline: "Fast, Dependable Local Roofing for Gladewater Homes & Downtown Businesses",
    metaTitle: "Roofing Contractor in Gladewater, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Just 15 minutes north on US-271, Raymond Hardin Roofing has served Gladewater, TX since 1995. Shingle roofs, metal roofs, torch-down flat roofs, tear-offs & repairs. Call 903-797-2756.",
    introParagraph:
      "Located just 13 miles straight up US-271 in Gilmer, Raymond Hardin Roofing is Gladewater's local neighbor for residential and commercial roofing. Since 1995, we have helped Gladewater families and downtown antique district merchants keep their properties dry and secure.",
    localContextParagraph:
      "From historic storefronts along Pacific and Main Street in Downtown Gladewater to lakeside homes near Lake Gladewater, Union Grove, and Clarksville City, we understand the unique roofing needs of our area—whether that's torch-down rubber for a downtown commercial flat roof or a full tear-off and metal roof on a wooded acreage.",
    neighborhoodsAndLandmarks: [
      "Downtown Gladewater Antique District",
      "Lake Gladewater & North US-271",
      "Union Grove & East Mountain",
      "US-80 East & West Corridor",
      "Clarksville City & Warren City",
    ],
    localRoofChallenges: [
      {
        title: "Historic Downtown Commercial Flat Roofs",
        description:
          "Gladewater's historic commercial buildings require reliable, heat-welded torch-down modified bitumen rubber to stop leaks around brick parapet walls.",
      },
      {
        title: "Heavy Sabine River Bottom Humidity & Pine Debris",
        description:
          "High moisture and dense tree cover around Gladewater accelerate algae growth and wood rot on poorly ventilated roofs.",
      },
    ],
    popularServicesNote:
      "In Gladewater, we frequently perform full shingle tear-offs and re-decks on older homes, metal roof installations on rural properties, and torch-down rubber roofs for downtown storefronts.",
    faqs: [
      {
        question: "How close are you to Gladewater, TX?",
        answer:
          "We are only 15 minutes up US-271 in Gilmer! We work in Gladewater, Union Grove, and East Mountain year-round.",
      },
      {
        question: "Can you repair or replace flat roofs on historic downtown Gladewater buildings?",
        answer:
          "Yes. Torch-down rubber flat roofing is one of our core specialties, and it is ideal for downtown commercial buildings in Gladewater.",
      },
    ],
  },
  {
    slug: "white-oak-tx",
    city: "White Oak",
    county: "Gregg County",
    zipCodes: ["75693"],
    distanceFromGilmer: "16 miles south",
    driveTimeFromGilmer: "18 mins via US-271 & FM 1845 / TX-42",
    highwayCorridor: "US-80 & TX-42 Corridor",
    tagline: "Quality Residential & Commercial Roofing for the White Oak Community",
    metaTitle: "Roofing Contractor in White Oak, TX | Shingle, Metal & Roof Repair | Raymond Hardin Roofing",
    metaDescription:
      "Trusted family-owned roofer serving White Oak, TX since 1995. Architectural shingles, metal roofs, torch-down flat roofs, re-decks, and storm repairs. Call 903-797-2756.",
    introParagraph:
      "White Oak homeowners take pride in well-maintained homes and strong community values. Since 1995, Raymond Hardin Roofing has provided White Oak residents and businesses with honest roof inspections, durable replacements, and responsive repairs.",
    localContextParagraph:
      "Just minutes north in Gilmer, our crew serves every neighborhood along White Oak Road, TX-42, and US-80. Whether you need high-wind architectural shingles after a Gregg County storm, a sleek metal roof upgrade, or a torch-down rubber roof for a flat patio cover, we deliver craftsmanship you can trust.",
    neighborhoodsAndLandmarks: [
      "White Oak Road & Roughneck ISD Area",
      "TX-42 North & South Corridor",
      "US-80 Commercial & Industrial Strip",
      "George Richey Road & Shiloh Road",
    ],
    localRoofChallenges: [
      {
        title: "Wind & Hail Storm Corridors",
        description:
          "Storms tracking east along I-20 and US-80 frequently hit White Oak with damaging wind gusts and hail, requiring proper 6-nail storm installation.",
      },
      {
        title: "Low-Slope Patio & Carport Transitions",
        description:
          "Many White Oak homes feature rear patio extensions or carports that need torch-down rubber or metal roofing to prevent valley and transition leaks.",
      },
    ],
    popularServicesNote:
      "White Oak homeowners rely on us for architectural shingle roof replacements, metal roofs, re-decking, and fast leak repairs.",
    faqs: [
      {
        question: "Do you offer free roof inspections in White Oak, TX?",
        answer:
          "Yes, we provide free, honest roof inspections and estimates throughout White Oak and Gregg County. Call us at 903-797-2756.",
      },
    ],
  },
  {
    slug: "pittsburg-tx",
    city: "Pittsburg",
    county: "Camp County",
    zipCodes: ["75686"],
    distanceFromGilmer: "19 miles north",
    driveTimeFromGilmer: "20 mins up US-271",
    highwayCorridor: "US-271 & TX-11 Crossroads",
    tagline: "Camp County & Pittsburg's Trusted Local Roofer Since 1995",
    metaTitle: "Roofing Contractor in Pittsburg, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Serving Pittsburg, TX and Lake Bob Sandlin since 1995. Just 20 minutes down US-271, Raymond Hardin Roofing installs shingle, metal, and torch-down rubber roofs. Call 903-797-2756.",
    introParagraph:
      "Located just 19 miles down US-271 in Gilmer, Raymond Hardin Roofing has served Pittsburg and all of Camp County since 1995. Our family-owned crew is proud to be the go-to roofer for Pittsburg homeowners, farms, lake houses, and businesses.",
    localContextParagraph:
      "From historic homes and commercial buildings near Downtown Pittsburg to waterfront retreats on Lake Bob Sandlin and rural properties along TX-11 and US-271, we build roofs that stand up to Camp County storms and summer heat.",
    neighborhoodsAndLandmarks: [
      "Downtown Pittsburg & Quitman Street",
      "Lake Bob Sandlin Waterfront & Subdivisions",
      "US-271 Corridor (Midway & Bettie)",
      "TX-11 East & West / Leesburg Area",
    ],
    localRoofChallenges: [
      {
        title: "Lakefront Wind Gusts on Lake Bob Sandlin",
        description:
          "Open-water fetch across Lake Bob Sandlin creates powerful wind gusts during storms, making high-wind architectural shingles and standing seam metal ideal.",
      },
      {
        title: "Agricultural, Shop & Commercial Roofs",
        description:
          "Camp County properties often include barns, workshops, and commercial buildings that benefit from our custom R-panel metal and torch-down rubber systems.",
      },
    ],
    popularServicesNote:
      "In Pittsburg and around Lake Bob Sandlin, our most popular services are standing seam and ribbed metal roofs, impact-resistant architectural shingles, and commercial flat roof installations.",
    faqs: [
      {
        question: "How far is Raymond Hardin Roofing from Pittsburg, TX?",
        answer:
          "We are just 20 minutes south down US-271 in Gilmer! We work in Pittsburg, Bettie, Leesburg, and around Lake Bob Sandlin every week.",
      },
    ],
  },
  {
    slug: "mount-pleasant-tx",
    city: "Mount Pleasant",
    county: "Titus County",
    zipCodes: ["75455", "75456"],
    distanceFromGilmer: "31 miles north",
    driveTimeFromGilmer: "34 mins up US-271",
    highwayCorridor: "US-271, I-30 & US-67 Hub",
    tagline: "Residential & Commercial Roofing Excellence for Mount Pleasant & Titus County",
    metaTitle: "Roofing Contractor in Mount Pleasant, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Experienced residential and commercial roofing in Mount Pleasant, TX. Shingle roofs, metal roofs, torch-down rubber flat roofs, tear-offs, and re-decks since 1995. Call 903-797-2756.",
    introParagraph:
      "A straight drive up US-271 from our Gilmer headquarters, Mount Pleasant and Titus County homeowners and business owners have trusted Raymond Hardin Roofing for over 30 years.",
    localContextParagraph:
      "Whether you own a family home near Dellwood Park, a lake house on Lake Tankersley or Lake Bob Sandlin, or a commercial facility near the I-30 and US-271 business corridors, we deliver dependable shingle, metal, and torch-down rubber roofing at an honest East Texas price.",
    neighborhoodsAndLandmarks: [
      "Downtown Mount Pleasant & Jefferson Ave",
      "I-30 & US-271 Business Corridor",
      "Lake Tankersley & Lake Monticello Areas",
      "Winfield, Cookville & Chapel Hill (Titus County)",
    ],
    localRoofChallenges: [
      {
        title: "North East Texas Hail & Tornado Alley Winds",
        description:
          "Titus County sits along an active spring storm track along I-30, making full tear-offs, solid wood decking, and storm-rated roofing critical.",
      },
      {
        title: "Commercial & Industrial Flat Roofs",
        description:
          "Mount Pleasant's thriving retail and industrial sector relies on watertight torch-down rubber and metal roof systems to prevent costly leaks.",
      },
    ],
    popularServicesNote:
      "In Mount Pleasant, we regularly install residential shingle and metal roofs, perform structural re-decks, and service commercial flat and metal buildings.",
    faqs: [
      {
        question: "Do you serve all of Mount Pleasant and Titus County?",
        answer:
          "Yes! Mount Pleasant is a straight drive up US-271 from our shop in Gilmer, and we serve residential and commercial customers across all of Titus County.",
      },
    ],
  },
  {
    slug: "mineola-tx",
    city: "Mineola",
    county: "Wood County",
    zipCodes: ["75773"],
    distanceFromGilmer: "34 miles west",
    driveTimeFromGilmer: "38 mins via US-80 / TX-154",
    highwayCorridor: "US-80, US-69 & TX-37 Crossroads",
    tagline: "Wood County & Mineola's Trusted Family Roofer Since 1995",
    metaTitle: "Roofing Contractor in Mineola, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Serving Mineola and Wood County since 1995. Raymond Hardin Roofing installs shingle roofs, metal roofs, torch-down rubber flat roofs, tear-offs & re-decks. Call 903-797-2756.",
    introParagraph:
      "From historic homes and brick storefronts near the Mineola depot to wooded country properties near the Sabine River Nature Preserve and Lake Holbrook, Raymond Hardin Roofing provides Mineola and Wood County with time-tested roofing craftsmanship.",
    localContextParagraph:
      "Established in 1995 in neighboring Upshur County, we understand the construction of both historic Mineola residences and modern rural homes—specializing in complete tear-offs, structural re-decking, shingle and metal roofing, and torch-down rubber flat roofs.",
    neighborhoodsAndLandmarks: [
      "Historic Downtown Mineola & Commerce Street",
      "Lake Holbrook & Country Club Area",
      "US-80 & US-69 Corridors",
      "Lindale, Hawkins & Golden Approaches",
    ],
    localRoofChallenges: [
      {
        title: "Historic Home Re-Decking",
        description:
          "Mineola's older Victorian and craftsman homes frequently have original spacedplank decking that requires careful tear-off and solid wood re-decking.",
      },
      {
        title: "Downtown Flat Commercial Storefronts",
        description:
          "Our heat-welded torch-down rubber roofing protects historic brick commercial buildings in downtown Mineola from flat-roof water intrusion.",
      },
    ],
    popularServicesNote:
      "In Mineola, we are frequently called for historic home tear-offs and re-decks, standing seam and R-panel metal roofs, and downtown commercial flat roofs.",
    faqs: [
      {
        question: "Do you work in Mineola, Hawkins, and Holly Lake Ranch?",
        answer:
          "Yes! We serve all of Wood County including Mineola, Hawkins, Holly Lake Ranch, and Quitman.",
      },
    ],
  },
  {
    slug: "quitman-tx",
    city: "Quitman",
    county: "Wood County",
    zipCodes: ["75783"],
    distanceFromGilmer: "32 miles west",
    driveTimeFromGilmer: "35 mins west down TX-154",
    highwayCorridor: "TX-154 & TX-37 Crossroads (Lake Fork)",
    tagline: "Dependable Roofing for Quitman, Lake Fork & Wood County",
    metaTitle: "Roofing Contractor in Quitman & Lake Fork, TX | Raymond Hardin Roofing",
    metaDescription:
      "Straight west on TX-154 from Gilmer, Raymond Hardin Roofing serves Quitman and Lake Fork, TX with shingle roofs, metal roofs, torch-down rubber, and re-decks. Call 903-797-2756.",
    introParagraph:
      "Located directly west of our Gilmer headquarters along Highway 154, Quitman and the Lake Fork community are right in our backyard. Since 1995, Raymond Hardin Roofing has protected Wood County homes, lake cabins, and businesses.",
    localContextParagraph:
      "Whether your property is near the Wood County Courthouse in Quitman, tucked under the pines at Holly Lake Ranch, or overlooking Lake Fork along TX-154, we install storm-tough shingle, metal, and torch-down rubber roofs.",
    neighborhoodsAndLandmarks: [
      "Downtown Quitman & TX-154 Corridor",
      "Lake Fork Waterfront & Fishing Lodges",
      "Holly Lake Ranch & Hawkins Area",
      "Yantis & Alba Approaches",
    ],
    localRoofChallenges: [
      {
        title: "Heavy Pine Needle Fall Around Holly Lake & Quitman",
        description:
          "Dense pine forests in Wood County drop massive amounts of needles; metal roofing and properly flashed architectural shingles prevent valley dams and rot.",
      },
      {
        title: "Lake Fork Open-Water Wind Exposure",
        description:
          "Properties along Lake Fork face high straight-line winds across the water, requiring 6-nail high-wind shingle fastening or mechanically locked metal panels.",
      },
    ],
    popularServicesNote:
      "Quitman and Lake Fork property owners love our custom metal roofs for lake homes and shops, as well as full shingle tear-offs and re-decks.",
    faqs: [
      {
        question: "Do you install metal and shingle roofs around Lake Fork and Holly Lake Ranch?",
        answer:
          "Yes! TX-154 connects our Gilmer shop directly to Quitman, Holly Lake Ranch, and Lake Fork. Call 903-797-2756 for a free estimate.",
      },
    ],
  },
  {
    slug: "big-sandy-tx",
    city: "Big Sandy",
    county: "Upshur County",
    zipCodes: ["75755"],
    distanceFromGilmer: "15 miles southwest",
    driveTimeFromGilmer: "18 mins via TX-155",
    highwayCorridor: "US-80 & TX-155 Crossroads",
    tagline: "Upshur County Neighbor Serving Big Sandy Homes & Businesses Since 1995",
    metaTitle: "Roofing Contractor in Big Sandy, TX | Shingle, Metal & Flat Roofs | Raymond Hardin Roofing",
    metaDescription:
      "Upshur County's hometown roofer since 1995. Serving Big Sandy, Hawkins, and Pritchett with shingle, metal, and torch-down rubber roofing, tear-offs & repairs. Call 903-797-2756.",
    introParagraph:
      "As fellow Upshur County neighbors just 15 minutes up TX-155 in Gilmer, Raymond Hardin Roofing has served Big Sandy families, farms, and businesses since 1995.",
    localContextParagraph:
      "From homes near Big Sandy ISD and US-80 to rural properties in Pritchett, Rhonesboro, and Hawkins, we provide honest roof repairs, complete tear-offs, wood re-decking, and new shingle, metal, or torch-down rubber installations.",
    neighborhoodsAndLandmarks: [
      "Big Sandy Town Center & US-80",
      "TX-155 Corridor & Pritchett Community",
      "Hawkins & Holly Lake Approaches",
      "Wilkins Creek & Sabine River Bottoms",
    ],
    localRoofChallenges: [
      {
        title: "Timberland Limb & Storm Damage",
        description:
          "Surrounded by tall pines and hardwoods, Big Sandy roofs often need structural deck repairs and durable metal or architectural shingle upgrades.",
      },
      {
        title: "Older Roof Layers & Rotted Fascia/Decking",
        description:
          "We strip old roof layers down to the framing, replace any compromised decking, and install a clean, long-lasting roof system.",
      },
    ],
    popularServicesNote:
      "Big Sandy residents count on us for fast storm leak repairs, complete re-decks, residential shingle replacements, and metal roofs.",
    faqs: [
      {
        question: "How fast can you come out to Big Sandy for a roof estimate?",
        answer:
          "Since we're right up Highway 155 in Gilmer, we can usually inspect roofs in Big Sandy and Pritchett within 24 hours.",
      },
    ],
  },
  {
    slug: "diana-tx",
    city: "Diana",
    county: "Upshur County",
    zipCodes: ["75640"],
    distanceFromGilmer: "14 miles east",
    driveTimeFromGilmer: "16 mins east on TX-154",
    highwayCorridor: "US-259 & TX-154 Crossroads",
    tagline: "Hometown Upshur County Roofing for Diana & New Diana",
    metaTitle: "Roofing Contractor in Diana, TX | Shingle, Metal & Roof Repair | Raymond Hardin Roofing",
    metaDescription:
      "Just 14 miles west on TX-154 in Gilmer, Raymond Hardin Roofing has served Diana and New Diana, TX since 1995. Shingle, metal, torch-down rubber & re-decks. Call 903-797-2756.",
    introParagraph:
      "Located just 14 miles west along Highway 154 in Gilmer, Raymond Hardin Roofing is Diana and New Diana's hometown Upshur County roofing contractor. We have proudly roofed homes, shops, and businesses across eastern Upshur County since 1995.",
    localContextParagraph:
      "Whether your home is near New Diana ISD, along US-259 toward Longview or Ore City, or out on acreage along TX-154 toward Harleton, our crew delivers rock-solid shingle, metal, and torch-down rubber roofs.",
    neighborhoodsAndLandmarks: [
      "Diana & New Diana ISD Community",
      "US-259 North & South Corridor",
      "TX-154 East toward Harleton",
      "Walnut Creek & Grice Communities",
    ],
    localRoofChallenges: [
      {
        title: "Open-Pasture Wind Gusts & Pine Canopy Debris",
        description:
          "Properties around Diana experience both strong straight-line winds across open pastures and heavy pine needle drop on wooded lots.",
      },
      {
        title: "Ranch, Shop & Barndominium Metal Roofs",
        description:
          "We install and repair both residential architectural shingle roofs and heavy-duty metal roofs for shops, barns, and homes across Diana.",
      },
    ],
    popularServicesNote:
      "In Diana, we specialize in residential shingle replacements, custom metal roofing, tear-offs, re-decks, and storm damage repairs.",
    faqs: [
      {
        question: "Do you serve Diana, Ore City, and Harleton?",
        answer:
          "Yes! Eastern Upshur County along TX-154 and US-259 is part of our core home territory. Call 903-797-2756 for a free estimate.",
      },
    ],
  },
  {
    slug: "ore-city-tx",
    city: "Ore City",
    county: "Upshur County",
    zipCodes: ["75683"],
    distanceFromGilmer: "17 miles northeast",
    driveTimeFromGilmer: "20 mins via TX-155 / US-259",
    highwayCorridor: "US-259 & Lake O' the Pines Corridor",
    tagline: "Reliable Roofing for Ore City & Lake O' the Pines Properties",
    metaTitle: "Roofing Contractor in Ore City & Lake O' the Pines, TX | Raymond Hardin Roofing",
    metaDescription:
      "Serving Ore City and Lake O' the Pines since 1995. Raymond Hardin Roofing installs shingle roofs, metal roofs, torch-down rubber, tear-offs & re-decks. Call 903-797-2756.",
    introParagraph:
      "From family homes in Ore City to lakefront cabins and residences around Lake O' the Pines, Raymond Hardin Roofing has protected northeast Upshur County properties since 1995.",
    localContextParagraph:
      "Based right here in Upshur County in Gilmer, we know the heavy pine canopy and lake wind conditions around Ore City and Lake O' the Pines. We install long-lasting metal roofs, architectural shingles, and torch-down flat roofs backed by 30+ years of local reputation.",
    neighborhoodsAndLandmarks: [
      "Ore City & US-259 Corridor",
      "Lake O' the Pines Waterfront Communities",
      "TX-155 North & Coffeeville",
      "Cedar Springs & Diana Approaches",
    ],
    localRoofChallenges: [
      {
        title: "Heavy Pine Needle Accumulation at Lake O' the Pines",
        description:
          "Towering pines around the lake drop thick blankets of needles that rot untreated valleys; our metal roofs and wide-valley shingle systems shed debris cleanly.",
      },
      {
        title: "Lakefront Wind & Storm Exposure",
        description:
          "Storms crossing Lake O' the Pines pack high winds and driving rain that demand superior underlayment and fastening.",
      },
    ],
    popularServicesNote:
      "Around Ore City and Lake O' the Pines, metal roofs, full tear-offs with wood re-decking, and torch-down rubber porch transitions are our top requests.",
    faqs: [
      {
        question: "Do you work on lake houses around Lake O' the Pines?",
        answer:
          "Yes! We frequently install and repair metal, shingle, and flat porch roofs on homes and cabins around Lake O' the Pines and Ore City.",
      },
    ],
  },
  {
    slug: "daingerfield-tx",
    city: "Daingerfield",
    county: "Morris County",
    zipCodes: ["75638"],
    distanceFromGilmer: "27 miles northeast",
    driveTimeFromGilmer: "30 mins via US-259 & TX-11",
    highwayCorridor: "US-259 & TX-11 / TX-49 Corridor",
    tagline: "Proven East Texas Roofing for Daingerfield, Lone Star & Morris County",
    metaTitle: "Roofing Contractor in Daingerfield & Lone Star, TX | Raymond Hardin Roofing",
    metaDescription:
      "Serving Daingerfield, Lone Star, and Hughes Springs since 1995. Shingle roofs, metal roofs, torch-down flat roofs, tear-offs, and re-decks. Call 903-797-2756.",
    introParagraph:
      "Serving Morris County homeowners and businesses in Daingerfield, Lone Star, and Hughes Springs since 1995, Raymond Hardin Roofing brings 30+ years of dependable East Texas workmanship to every job.",
    localContextParagraph:
      "Just 30 minutes away in Gilmer, our family-owned crew travels up US-259 and TX-11 to provide complete residential and commercial roofing—including shingle replacements, custom metal roofs, torch-down rubber flat roofs, tear-offs, and structural re-decking.",
    neighborhoodsAndLandmarks: [
      "Daingerfield & Daingerfield State Park Area",
      "Lone Star & Lone Star Lake (Ellison Creek Reservoir)",
      "Hughes Springs & TX-11 Corridor",
      "Cason & US-259 Corridor",
    ],
    localRoofChallenges: [
      {
        title: "Piney Woods Moisture & Storm Debris",
        description:
          "Surrounded by the dense timber around Daingerfield State Park and Lone Star Lake, roofs require tough underlayment, solid wood decking, and algae-resistant materials.",
      },
      {
        title: "Commercial & Industrial Buildings Along US-259",
        description:
          "We service both residential homes and commercial metal and flat-roof buildings across Lone Star and Daingerfield.",
      },
    ],
    popularServicesNote:
      "In Daingerfield and Lone Star, homeowners and businesses rely on us for metal roofing, architectural shingle tear-offs, re-decks, and commercial flat roof repairs.",
    faqs: [
      {
        question: "Do you provide free estimates in Daingerfield, Lone Star, and Hughes Springs?",
        answer:
          "Yes! We serve all of Morris County with free on-site roof inspections and straightforward estimates. Call 903-797-2756.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): ServiceAreaCity | undefined {
  return SERVICE_AREA_CITIES.find((city) => city.slug === slug);
}
