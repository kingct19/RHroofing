export type CityPhoto = {
  src: string;
  alt: string;
  credit: string;
  license: string;
  href: string;
};

export const CITY_PHOTOS: Record<string, CityPhoto> = {
  "gilmer-tx": {
    src: "/images/cities/gilmer.jpg",
    alt: "Buffalo Street in downtown Gilmer",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Gilmer_September_2018_10_(Buffalo_Street).jpg",
  },
  "longview-tx": {
    src: "/images/cities/longview.jpg",
    alt: "Downtown Longview",
    credit: "pasa47",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Downtown_Longview_-_29195600114.jpg",
  },
  "tyler-tx": {
    src: "/images/cities/tyler.jpg",
    alt: "Tyler skyline",
    credit: "CletusDitto",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Tyler_Texas_Skyline_2012.jpg",
  },
  "gladewater-tx": {
    src: "/images/cities/gladewater.jpg",
    alt: "Gladewater city limit sign",
    credit: "Billy Hathorn",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Gladewater,_TX_sign_IMG_4913.JPG",
  },
  "white-oak-tx": {
    src: "/images/cities/white-oak.jpg",
    alt: "White Oak municipal building",
    credit: "Billy Hathorn",
    license: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:White_Oak,_TX,_Municipal_building_IMG_4931.JPG",
  },
  "pittsburg-tx": {
    src: "/images/cities/pittsburg.jpg",
    alt: "Pittsburg-Camp County Public Library",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Pittsburg_August_2015_01_(Pittsburg-Camp_County_Public_Library).jpg",
  },
  "mount-pleasant-tx": {
    src: "/images/cities/mount-pleasant.jpg",
    alt: "Downtown Mount Pleasant",
    credit: "Michael Barera",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mount_Pleasant_May_2018_05_(Jo%27s_Downtown).jpg",
  },
  "mineola-tx": {
    src: "/images/cities/mineola.jpg",
    alt: "Mineola train depot",
    credit: "Renelibrary",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Mineola_Train_Depot_(1_of_1).jpg",
  },
  "quitman-tx": {
    src: "/images/cities/quitman.jpg",
    alt: "Wood County Courthouse in Quitman",
    credit: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Wood_courthouse_tx_2010.jpg",
  },
  "big-sandy-tx": {
    src: "/images/cities/big-sandy.jpg",
    alt: "Downtown Big Sandy",
    credit: "Renelibrary",
    license: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Downtown_Big_Sandy_Wiki_(1_of_1).jpg",
  },
  "ore-city-tx": {
    src: "/images/cities/ore-city.jpg",
    alt: "Lake O' the Pines near Ore City",
    credit: "U.S. Army Corps of Engineers",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:Lake_O_the_Pines_Texas.jpg",
  },
  "daingerfield-tx": {
    src: "/images/cities/daingerfield.jpg",
    alt: "Cumberland Presbyterian Church in Daingerfield",
    credit: "Nicolas Henderson",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Cumberland_Presbyterian_Church,_Daingerfield,_Texas_(7154211890).jpg",
  },
};

export const CITY_CARD_LINES: Record<string, string> = {
  "gilmer-tx":
    "Our shop is here. Shingle, metal, and flat roofs for houses and downtown buildings.",
  "longview-tx":
    "About 20 minutes south. Residential and commercial roofs across Gregg County.",
  "tyler-tx":
    "Smith County roofs from the Gilmer shop, including tear-offs and metal.",
  "gladewater-tx":
    "About 15 minutes north on US-271. Houses and downtown buildings.",
  "white-oak-tx":
    "Gregg County houses and small commercial roofs, a short drive from Gilmer.",
  "pittsburg-tx":
    "Camp County houses, farms, and lake houses, about 19 miles up US-271.",
  "mount-pleasant-tx":
    "Titus County houses and businesses, straight up US-271 from Gilmer.",
  "mineola-tx":
    "Wood County houses and brick storefronts near the depot.",
  "quitman-tx":
    "West of Gilmer on Highway 154, including cabins at Lake Fork.",
  "big-sandy-tx":
    "Upshur County neighbors, about 15 minutes from the shop.",
  "diana-tx":
    "Eastern Upshur County, about 14 miles west on Highway 154.",
  "ore-city-tx":
    "Northeast Upshur County, including cabins around Lake O' the Pines.",
  "daingerfield-tx":
    "Morris County houses and businesses, including Lone Star and Hughes Springs.",
};

export function cityPhoto(slug: string): CityPhoto | undefined {
  return CITY_PHOTOS[slug];
}
