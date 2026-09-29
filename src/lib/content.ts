import classroomImage1 from "@/assets/volunteer-classroom1.jpg";
import classroomImage2 from "@/assets/volunteer-classroom2.jpg";
import childrensBookImage from "@/assets/volunteer-childrens-book.jpg";

/*
 * Everything on the page is driven from this file. Swap the placeholder
 * details below for the real ones and the whole site updates.
 */

export const profile = {
  name: "Dr. Jeremiah Kim",
  credentials: "DDS",
  role: "Craniofacial Orthodontist · Children's Book Author",
  about:
    "I practice ...",
  email: "jeremiah.yr.kim@gmail.com",
  phone: "(661) 481-6070"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Research", href: "#research" },
  { label: "Outside the Clinic", href: "#volunteer" },
];

export type TrainingEntry = {
  year: string;
  title: string;
  detail: string;
};

export const training: TrainingEntry[] = [
  {
    year: "2018",
    title: "B.A. Biology with Honors, Architecture",
    detail: "Williams College · Bruce Sanderson Prize in Architecture",
  },
  {
    year: "2023",
    title: "Doctor of Dental Medicine",
    detail: "Harvard University · Gerald Shklar Memorial Award",
  },
  {
    year: "2026",
    title: "Orthodontic Residency",
    detail: "Albert Einstein College of Medicine · Chief Resident, Montefiore Aware of Excellence",
  },
  {
    year: "2027",
    title: "Craniofacial Orthodontics Fellowship",
    detail: "Children's Hospital Los Angeles",
  }
];

export type Publication = {
  year: string;
  title: string;
  citation: string;
  journal: string;
  url: string;
};

/* Replace each url with the real article link (DOI or publisher page). */
export const publications: Publication[] = [
  {
    year: "2024",
    title: "Skeletal Class II correction with clear aligners: a 3-year retrospective",
    citation: "Marsh E, Okafor D, Lindqvist A",
    journal: "Journal of Orthodontic Advances",
    url: "https://example.org/jao-2024-marsh",
  },
  {
    year: "2023",
    title: "Digital impressions vs. traditional molds in adult orthodontics",
    citation: "Marsh E, Reyes P",
    journal: "Journal of Clinical Dentistry",
    url: "https://example.org/jcd-2023-marsh",
  },
  {
    year: "2022",
    title: "Long-term stability of mandibular expansion in adolescents",
    citation: "Okafor D, Marsh E, Chen L",
    journal: "American Orthodontic Review",
    url: "https://example.org/ao-2022-marsh",
  },
  {
    year: "2021",
    title: "Patient-reported outcomes in self-ligating bracket systems",
    citation: "Marsh E, Lindqvist A",
    journal: "Journal of Orthodontic Advances",
    url: "https://example.org/jao-2021-marsh",
  },
  {
    year: "2019",
    title: "Growth-modification timing in Class III malocclusion",
    citation: "Chen L, Marsh E",
    journal: "American Orthodontic Review",
    url: "https://example.org/ao-2019-marsh",
  },
];

/*
 * "Outside the Clinic" cards. Each card shows its first photo with the title
 * on top. Clicking a card opens a full-size viewer where visitors can flip
 * through every photo in this section with the < and > arrows.
 *
 * To add more photos to a card, put another { image, alt, caption } entry in
 * its photos list (and import the image at the top of this file).
 */
export type VolunteerPhoto = {
  image: string;
  /* Description for screen readers and if the image fails to load. */
  alt: string;
  /* Text shown when hovering over the enlarged photo. Falls back to the
     card's blurb when left out. */
  caption?: string;
  /* Optional: which part of the photo stays visible when it is cropped
     to fit the card, e.g. "center", "top", "30% 50%". */
  position?: string;
};

export type VolunteerItem = {
  title: string;
  blurb: string;
  photos: VolunteerPhoto[];
};

export const volunteer: VolunteerItem[] = [
  {
    title: "School Visits",
    blurb: "Talking with middle and high school students about careers in dentistry.",
    photos: [
      {
        image: classroomImage1,
        alt: "Jeremiah presenting to a classroom of students in front of a screen",
        caption: "Talking with middle and high school students about careers in dentistry.",
        position: "35% 50%",
      },
    ],
  },
  {
    title: "Classroom Lessons",
    blurb: "Teaching students how teeth and oral health work, with models and slides.",
    photos: [
      {
        image: classroomImage2,
        alt: "Jeremiah teaching a class with images of dental arches on a screen",
        caption: "Teaching students how teeth and oral health work, with models and slides.",
        position: "40% 50%",
      },
    ],
  },
  {
    title: "Children's Book",
    blurb: "The Mouth Guardians: a children's book that makes dentistry and oral health fun for kids.",
    photos: [
      {
        image: childrensBookImage,
        alt: "Jeremiah holding his children's book, The Mouth Guardians",
        caption: "A children's book that makes dentistry and oral health fun for kids.",
        position: "50% 40%",
      },
    ],
  },
];
