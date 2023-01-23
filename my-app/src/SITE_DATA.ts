// This file contains all of the information that should be easily accessible by components of the site

// Importantly, all external links are stored here so that
// between course updates, this is the only file that needs to
// be checked for updates

// Staff images
import tim from "./images/staff/tim.jpeg";
import yihao from "./images/staff/yihao.jpg";
import conrad from "./images/staff/conrad.jpg";
import kendra from "./images/staff/kendra.png";
import ese from "./images/staff/ese.jpg";
import ezra from "./images/staff/ezra.jpg";
import megan from "./images/staff/megan.png";
import david from "./images/staff/david.jpeg";
import david_frog from "./images/staff/david_frog.png";
import snoop from "./images/staff/froggy.png";

export const lectureWeeks: LectureWeek[] = [
  // {
  //   name: "Week 1",
  //   dailyLectures: [
  //     // {
  //     //   name: "What is LFS?",
  //     //   date: "Jan 25",
  //     //   // notesLink: "https://www.google.com",
  //     //   // recordingLink: "https://www.google.com",
  //     //   // liveCodeLink: "https://www.google.com",
  //     // },
  //     // {
  //     //   name: "what is lfs random  adssdfhg",
  //     //   date: "Jan 28",
  //     //   notesLink: "https://www.google.com",
  //     //   recordingLink: "https://www.google.com",
  //     //   liveCodeLink: "https://www.google.com",
  //     // },
  //     // {
  //     //   name: "what is lfs random text adssdfhg",
  //     //   date: "Jan 28",
  //     //   notesLink: "https://www.google.com",
  //     //   recordingLink: "https://www.google.com",
  //     //   liveCodeLink: "https://www.google.com",
  //     // },
  //   ],
  // },
  // // {
  // //   name: "Week 2",
  // //   dailyLectures: [
  // //     {
  // //       name: "what is lfs text adssdfhg",
  // //       date: "Jan 28",
  // //       notesLink: "https://www.google.com",
  // //       recordingLink: "https://www.google.com",
  // //       liveCodeLink: "https://www.google.com",
  // //     },
  // //     {
  // //       name: "what is lfs hg",
  // //       date: "Jan 28",
  // //       notesLink: "https://www.google.com",
  // //       recordingLink: "https://www.google.com",
  // //       liveCodeLink: "https://www.google.com",
  // //     },
  // //   ],
  // // },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "Jan 27 → Feb 2, 2023",
    // href: "https://www.google.com",
  },
  // {
  //   name: "Forge 1",
  //   dateRange: "Some Date, -> Some Other Date",
  //   // href: "https://www.google.com",
  // },
  {
    name: "...",
    dateRange: "...",
  },
  // ...
];

export const labAssignments: Assignment[] = [
  {
    name: "(Optional) Async Python",
    dateRange: "Jan 25 → Jan 26, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Tic Tac Toe",
    dateRange: "Feb 1 → Feb 2, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Ring Election",
    dateRange: "Feb 8 → Feb 9, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "N Queens",
    dateRange: "Feb 22 → Feb 23, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Memory Management",
    dateRange: "Mar 1 → Mar 2, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Model Checking (Trash)",
    dateRange: "Mar 8 → Mar 9, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Dining Blacksmiths",
    dateRange: "Mar 15 → Mar 16, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SAT prep (col-lab)",
    dateRange: "Apr 5 → Apr 6, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SMT prep (col-lab)",
    dateRange: "Apr 12 → Apr 13, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SAT 2 prep (col-lab)",
    dateRange: "Apr 19 → Apr 20, 2023",
    // href: "https://www.google.com",
  },
];

export const projectAssignments: Assignment[] = [
  {
    name: "Curiosity Modeling",
    dateRange: "Feb 17 → Mar 2, 2023",
  },
  {
    name: "Final Project (Proposal)",
    dateRange: "Apr 7, 2023",
  },
  {
    name: "Final Project",
    dateRange: "Apr 11 → May 13, 2023",
  },
];

export const casestudyAssignments: Assignment[] = [
  {
    name: "Hotel Locking",
    dateRange: "Feb 10 → Mar 2, 2023",
  },
];

export const forgeDocsLink: string = "";
export const EdStemLink: string = "";

export const FAQLink: string =
  "https://docs.google.com/document/d/e/2PACX-1vQek5FgRtgmr7rdxOnq5qzTIaRoVcc0dN4dERg5qu4oJ4hTCAmWJkrBbNWUdm_zsMRtQOmzpG17fWQK/pub";

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
  pronouns: "he/they",
  bio: "Aspiring Amphibian Aficionado",
  favorite_amphibian: "Frog",
  role: "Professor",
  // favorite_amphibian_image: "",
};

export const htas: staffMember[] = [
  {
    name: "David Fryd",
    image: david,
    objectPosition: "center 35%",
    alt_image: david_frog,
    alt_objectPosition: "80% 50%",
    pronouns: "he/him",
    bio: "Hey everyone! I'm David, and I'm a transfer first-semester senior studying CS. I love making music, photography, and SCUBA diving. Really excited to meet you all! :) ",
    favorite_amphibian: "Froggy the Forger",
    role: "HTA",
  },
  {
    name: "Megan Frisella",
    image: megan,
    objectPosition: "center 65%",
    pronouns: "she/her",
    bio: " I’m a Junior studying Math and CS. I’m a huge fan of cats, frisbee, and formal methods. Please AMA about these things :) Hope to see you in my hours!",
    favorite_amphibian: "Newt (Scamander)",
    role: "HTA",
  },
];

export const utas: staffMember[] = [
  {
    name: "Yi Hao",
    image: yihao,
    pronouns: "he/him",
    bio: "Hi! My name is Yi Hao and I'm a Sophomore from Singapore studying Computer Science. In my free time, I enjoy going on walks or watching shows.",
    favorite_amphibian: "Poison Dart Frog",
    role: "UTA",
  },

  {
    name: "Conrad Zimmerman",
    image: conrad,
    objectPosition: "center 15%",
    pronouns: "she/her",
    bio: "I study math and CS and play Pokemon Go! I’m a RUE (Resumed Undergraduate Education) student, transferring to Brown after my community college, and before that I was a software developer and school teacher. I love coffee, formal methods, cute dogs, and first order logic.",
    favorite_amphibian: "Poison Dart Frog",
    role: "UTA",
  },
  {
    name: "Kendra Lee",
    image: kendra,
    objectPosition: "center 35%",
    pronouns: "she/her",
    bio: "Hi! I’m Kendra Lee, a Junior studying CS. I love food and coffee, so if you have any restaurant or cafe recs, let me know!",
    favorite_amphibian: "The frog from Peppa Pig",
    role: "UTA",
  },
  {
    name: "Ese Ajueyitsi",
    image: ese,
    pronouns: "he/him",
    bio: "Hey Guys! My name is Ese, and I am a senior studying Computer Science. Say hi if you see me flying around campus on my broom (E-Scooter).",
    favorite_amphibian: "Black Rain Frog",
    role: "UTA",
  },
  {
    name: "Ezra Rocha",
    image: ezra,
    pronouns: "he/him",
    bio: "Hi! I'm a junior from Dallas concentrating in CS. In my free time I love watching sci-fi shows and playing board games.",
    favorite_amphibian: "Lavender Axolotl",
    role: "UTA",
  },
  {
    name: "Snoop Frogg",
    image: snoop,
    objectPosition: "center 40%",
    pronouns: "he/they",
    bio: '"Rapper, producer, formal method and modeler."',
    favorite_amphibian: "Snoop Frogg",
    role: "UTA",
  },
];

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
  objectPosition?: string; // Fix image alignment if necessary (on mobile wrong part of image gets cut off)
  alt_image?: string; // On image hover, the image changes to alt image
  alt_objectPosition?: string; // Same as objectPosition but for alt image
  pronouns: string;
  bio: string;
  favorite_amphibian: string;
  role: string; // prof/hta/uta/sta...
  // favorite_amphibian_image: string;
};
