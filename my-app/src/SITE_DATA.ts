// This file contains all of the information that should be easily accessible by components of the site

// Staff images
import tim from "./images/staff/tim.jpeg";

export const lectureWeeks: LectureWeek = {
  name: "Week 1",
  dailyLectures: [
    {
      name: "Introduction",
      date: "January 28",
      notesLink: "https://www.google.com",
      recordingLink: "https://www.google.com",
    },
    {
      name: "Introduction",
      date: "January 28",
    },
  ],
};

type Lecture = {
  name: string;
  date: string; // Jan 28
  notesLink?: string;
  recordingLink?: string;
};

type LectureWeek = {
  name: string; // week X
  dailyLectures: Lecture[];
};

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
    dateRange: "January 28, 2022 → Ffsdsdfsfadsfdfsasebruary 3, 2022",
    href: "https://www.google.com",
  },
];

export const projectAssignments: Assignment[] = [];

export const casestudyAssignments: Assignment[] = [];

export type Assignment = {
  name: string;
  dateRange: string;
  href?: string; // If left blank, assignment appears as disabled
};

export type staffMember = {
  name: string;
  image: string;
  pronouns: string;
  description: string;
  favorite_amphibian: string;
  // favorite_amphibian_image: string;
};

export const professor: staffMember = {
  name: "Tim Nelson",
  image: tim,
  pronouns: "he/him/they/them",
  description: "I am a professor",
  favorite_amphibian: "Frog",
  // favorite_amphibian_image: "",
};
