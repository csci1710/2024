// This file contains all of the information that should be easily accessible by components of the site

// Staff images
import tim from "./images/staff/tim.jpeg";

export const lectureWeeks: LectureWeek[] = [
  {
    name: "Week 1",
    dailyLectures: [
      {
        name: "Introduction",
        date: "Jan 28",
        notesLink: "https://www.google.com",
        recordingLink: "https://www.google.com",
        liveCodeLink: "https://www.google.com",
      },
      {
        name: "what is lfs random text adssdfhg",
        date: "Jan 28",
      },
    ],
  },
  {
    name: "Week 2",
    dailyLectures: [],
  },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "January 28, 2022 → February 3, 2022",
    href: "https://www.google.com",
  },
  {
    name: "Forge 1",
    dateRange: "Some Date, -> Some Other Date",
    // asdasd
  },
  // ...
];

export const labAssignments: Assignment[] = [
  {
    name: "Tic Tac Toe",
    dateRange: "January 28, 2022 → February 3, 2022",
    href: "https://www.google.com",
  },
  {
    name: "Ring Election",
    dateRange: "Some Date, -> Some Other Date",
    // href: "https://www.google.com",
  },
];

export const projectAssignments: Assignment[] = [];

export const casestudyAssignments: Assignment[] = [];

export const forgeDocsLink: string = "";
export const EdStemLink: string = "";

export const policies: Resource[] = [
  { name: "Syllabus", href: "https://www.google.com" },
  { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const guides: Resource[] = [
  { name: "Syllabus", href: "https://www.google.com" },
  { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const importantLinks: Resource[] = [
  { name: "Syllabus", href: "https://www.google.com" },
  { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const professor: staffMember = {
  name: "Tim Nelson",
  image: tim,
  pronouns: "he/him/they/them",
  bio: "I am a professor",
  favorite_amphibian: "Frog",
  // favorite_amphibian_image: "",
};

export const htas: staffMember[] = [
  {
    name: "David Fryd",
    image: "",
    pronouns: "he/him",
    bio: "I am a TA",
    favorite_amphibian: "Frog",
  },
  {
    name: "David Fryd",
    image: "",
    pronouns: "he/him",
    bio: "I am a TA",
    favorite_amphibian: "Frog",
  },
  {
    name: "David Fryd",
    image: "",
    pronouns: "he/him",
    bio: "I am a TA",
    favorite_amphibian: "Frog",
  },
];

export const utas: staffMember[] = [];

// Type definitions

export type Resource = {
  name: string;
  href: string;
};

export type Lecture = {
  name: string;
  date: string; // Jan 28
  notesLink?: string;
  recordingLink?: string;
  liveCodeLink?: string;
};

export type LectureWeek = {
  name: string; // week X
  dailyLectures: Lecture[];
};

export type Assignment = {
  name: string;
  dateRange: string;
  href?: string; // If left blank, assignment appears as disabled
};

export type staffMember = {
  name: string;
  image: string;
  pronouns: string;
  bio: string;
  favorite_amphibian: string;
  // favorite_amphibian_image: string;
};
