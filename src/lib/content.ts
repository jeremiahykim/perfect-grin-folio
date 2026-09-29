import clinicImage from "@/assets/volunteer-clinic.jpg";
import healthFairImage from "@/assets/volunteer-healthfair.jpg";
import mentorshipImage from "@/assets/volunteer-mentorship.jpg";
import missionImage from "@/assets/volunteer-mission.jpg";

/*
 * Everything on the page is driven from this file. Swap the placeholder
 * details below for the real ones and the whole site updates.
 */

export const profile = {
  name: "Dr. Elena Marsh",
  credentials: "DDS, MS",
  eyebrow: "Department of Orthodontics",
  role: "Assistant Professor · Board-Certified Orthodontist",
  about:
    "I practice adult and adolescent orthodontics with a focus on skeletal discrepancy and digital workflow. My clinical and research work centers on predictable, low-intervention treatment for complex cases.",
  stats: [
    { label: "Practice", value: "14 yrs" },
    { label: "Patients", value: "2,300+" },
    { label: "Focus", value: "3 areas" },
  ],
  email: "emarsch@calloway.edu",
  phone: "(555) 014-2280",
  institution: "Calloway University",
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
    year: "2009",
    title: "B.S. Biology",
    detail: "Ridgeway University · graduated magna cum laude",
  },
  {
    year: "2013",
    title: "Doctor of Dental Surgery",
    detail: "Halvern School of Dentistry · Dean's List",
  },
  {
    year: "2016",
    title: "Orthodontic Residency",
    detail: "Calloway University · AAO-accredited program",
  },
  {
    year: "2018",
    title: "Faculty Appointment",
    detail: "Assistant Professor, Department of Orthodontics",
  },
  {
    year: "2021",
    title: "Digital Ortho Fellowship",
    detail: "Meridian Institute · 3D scanning and aligner design",
  },
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

export type VolunteerItem = {
  title: string;
  blurb: string;
  image: string;
  alt: string;
};

export const volunteer: VolunteerItem[] = [
  {
    title: "FreeSmile Clinics",
    blurb: "Weekend screenings for underserved families in the metro area.",
    image: clinicImage,
    alt: "A dentist examining a young child at a free community dental clinic",
  },
  {
    title: "Youth Mentorship",
    blurb: "Mentoring pre-dental students through clinical rotations.",
    image: mentorshipImage,
    alt: "A dentist guiding two students at a workshop table with dental models",
  },
  {
    title: "Global Aid Missions",
    blurb: "Annual trips providing orthodontic care in rural regions.",
    image: missionImage,
    alt: "A volunteer dental team working at a tented rural outreach clinic",
  },
  {
    title: "Health Fairs",
    blurb: "Public education on prevention and early intervention.",
    image: healthFairImage,
    alt: "A dentist speaking with a family at a community health fair table",
  },
];
