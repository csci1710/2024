// This file contains all of the information that should be easily accessible by components of the site

// Importantly, all external links are stored here so that
// between course updates, this is the only file that needs to
// be checked for updates

// DON'T TOUCH THIS
// Able to reference content in the public folder (PUB + "/...")
export const PUB = process.env.PUBLIC_URL;

// Edit stuff below this line

export const lectureWeeks: LectureWeek[] = [
  {
    name: "Week 1",
    dailyLectures: [
      {
        name: "What is LfS?",
        date: "Jan 25",
        notesLink: "https://hackmd.io/@lfs/rJMz6s0os",
        // recordingLink: "https://www.google.com",
        // liveCodeLink: "https://www.google.com",
      },
      {
        name: "Property-Based Testing",
        date: "Jan 27",
        // notesLink: "https://www.google.com",
        // recordingLink: "https://www.google.com",
        // liveCodeLink: "https://www.google.com",
      },
      {
        name: "Modeling Systems in Forge",
        date: "Jan 30",
        // notesLink: "https://www.google.com",
        // recordingLink: "https://www.google.com",
        // liveCodeLink: "https://www.google.com",
      },
    ],
  },
  //{
  //   name: "Week 2",
  //   dailyLectures: [
  //     {
  //       name: "what is lfs text adssdfhg",
  //       date: "Jan 28",
  //       notesLink: "https://www.google.com",
  //       recordingLink: "https://www.google.com",
  //       liveCodeLink: "https://www.google.com",
  //     },
  //     {
  //       name: "what is lfs hg",
  //       date: "Jan 28",
  //       notesLink: "https://www.google.com",
  //       recordingLink: "https://www.google.com",
  //       liveCodeLink: "https://www.google.com",
  //     },
  //   ],
  // },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "Jan 27 → Feb 2, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Forge 1",
    dateRange: "Feb 3 → Feb 9, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Forge 2",
    dateRange: "Feb 10 → Feb 16, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Forge 3",
    dateRange: "Mar 3 → Mar 9, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Model Checking 1: Stack/Ring",
    dateRange: "Mar 10 → Mar 16, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "Model Checking 2: Elevator Critique",
    dateRange: "Mar 17 → Mar 23, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SAT 1",
    dateRange: "Apr 7 → Apr 13, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SMT",
    dateRange: "Apr 14 → Apr 20, 2023",
    // href: "https://www.google.com",
  },
  {
    name: "SAT 2",
    dateRange: "Apr 21 → Apr 27, 2023",
    // href: "https://www.google.com",
  },
  {
    // Rickroll ;)
    name: "Hardest Assignment Ever...",
    dateRange: "Oct 25 → Oct 26, 2009",
    href: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  // {
  //   name: "...",
  //   dateRange: "...",
  // },
  // // ...
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

// export const forgeDocsLink: string = "";
// export const EdStemLink: string = "";

export const FAQLink: string =
  "https://docs.google.com/document/d/e/2PACX-1vQek5FgRtgmr7rdxOnq5qzTIaRoVcc0dN4dERg5qu4oJ4hTCAmWJkrBbNWUdm_zsMRtQOmzpG17fWQK/pub";

export const policies: Resource[] = [
  { name: "Syllabus", href: "https://docs.google.com/document/d/1dol5vJem0Rzvbk0QTJ77z7eQCQTClxZuXWG6VGreajE/edit?usp=sharing" },
  // { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const importantLinks: Resource[] = [
  // { name: "Syllabus", href: "https://www.google.com" },
  // { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const guides: Resource[] = [   
  // { name: "Collaboration Policy", href: "https://www.google.com" },
];

export const professor: staffMember = {
  name: "Tim Nelson",
  image: PUB + "/images/staff/tim.jpeg",
  alt_image: PUB + "/images/staff/tim_frog.jpeg",
  alt_objectPosition: "90% 50%",
  pronouns: "he/they",
  bio: 'I’m a first-generation college student who attended community college, a state college, the "college" of an industry job, and a STEM university. Now I teach at Brown. You might call this a collage of colleges, although not quite a universe of universities.',
  favorite_amphibian:
    "Frog Puppet (who is unnamed and thus legally distinct from any Disney-owned IP)",
  role: "Professor",
  // favorite_amphibian_image: "",
};

export const htas: staffMember[] = [
  {
    name: "David Fryd",
    image: PUB + "/images/staff/david.jpeg",
    objectPosition: "center 35%",
    alt_image: PUB + "/images/staff/david_frog.jpeg",
    alt_objectPosition: "80% 50%",
    pronouns: "he/him",
    bio: "Hey everyone! I'm David, and I'm a transfer first-semester senior studying CS. I love making music, photography, and SCUBA diving. (Aspiring Amphibian Aficionado). Really excited to meet you all! :) ",
    favorite_amphibian: "Red-eyed Tree Frog",
    role: "HTA",
  },
  {
    name: "Megan Frisella",
    image: PUB + "/images/staff/megan.jpeg",
    objectPosition: "center 65%",
    alt_image: PUB + "/images/staff/megan_frog.jpeg",
    pronouns: "she/her",
    bio: " I’m a Junior studying Math and CS. I’m a huge fan of cats, frisbee, and formal methods. Please AMA about these things :) Hope to see you in my hours!",
    favorite_amphibian: "Newt (Scamander)",
    role: "HTA",
  },
];

export const utas: staffMember[] = [
  {
    name: "Yi Hao",
    image: PUB + "/images/staff/yihao.jpg",
    alt_image: PUB + "/images/staff/yihao_frog.jpeg",
    alt_objectPosition: "center 65%",
    pronouns: "he/him",
    bio: "Hi! My name is Yi Hao and I'm a Sophomore from Singapore studying Computer Science. In my free time, I enjoy going on walks or watching shows.",
    favorite_amphibian: "Poison Dart Frog",
    role: "UTA",
  },

  {
    name: "Conrad Zimmerman",
    image: PUB + "/images/staff/conrad.jpg",
    objectPosition: "center 15%",
    alt_image: PUB + "/images/staff/conrad_frog.jpeg",
    alt_objectPosition: "center 25%",
    pronouns: "she/her",
    bio: "I'm a RUE student who studies math and plays Pokemon Go! Before that I graduated from a community college, developed software, and taught school. I love coffee, formal methods, cute dogs, and first order logic.",
    favorite_amphibian: "Frog and Toad (Arnold Lobel)",
    role: "UTA",
  },
  {
    name: "Kendra Lee",
    image: PUB + "/images/staff/kendra.jpeg",
    objectPosition: "center 35%",
    alt_image: PUB + "/images/staff/kendra_frog.jpeg",
    pronouns: "she/her",
    bio: "Hi! I’m Kendra Lee, a Junior studying CS. I love food and coffee, so if you have any restaurant or cafe recs, let me know!",
    favorite_amphibian: "The Frog from Peppa Pig",
    role: "UTA",
  },
  {
    name: "Ese Ajueyitsi",
    image: PUB + "/images/staff/ese.jpg",
    pronouns: "he/him",
    alt_image: PUB + "/images/staff/ese_frog.jpeg",
    bio: "Hey Guys! My name is Ese, and I am a senior studying Computer Science. Say hi if you see me flying around campus on my broom (E-Scooter).",
    favorite_amphibian: "Black Rain Frog",
    role: "UTA",
  },
  {
    name: "Ezra Rocha",
    image: PUB + "/images/staff/ezra.jpg",
    alt_image: PUB + "/images/staff/ezra_frog.jpeg",
    pronouns: "he/him",
    bio: "Hi! I'm a junior from Dallas concentrating in CS. In my free time I love watching sci-fi shows and playing board games.",
    favorite_amphibian: "Lavender Axolotl",
    role: "UTA",
  },
  {
    name: "Snoop Frogg",
    image: PUB + "/images/staff/snoop.jpg",
    objectPosition: "center 40%",
    alt_image: PUB + "/images/staff/snoop_alt.jpg",
    pronouns: "he/they",
    bio: '"Rapper, producer, formal method and modeler."',
    favorite_amphibian: "Snoop Frogg, duh",
    role: "UTA",
  },
];

export const gradtas: staffMember[] = [
  {
    name: "Siddhartha Prasad",
    image: PUB + "/images/staff/siddhartha.jpg",
    alt_image: PUB + "/images/staff/siddhartha_frog.jpeg",
    bio: "ChatGPT hater. Ask me about Danny Devito.",
    pronouns: "he/him",
    favorite_amphibian: "Newt",
    role: "Grad TA",
  },
  {
    name: "Algo-ribbit",
    image: PUB + "/images/staff/algo_ribbit.jpeg",
    alt_image: PUB + "/images/staff/algo_ribbit_alt.jpeg",
    bio: "What's up! I'm Algo-ribbit, a computer science nerd and TA for a logic course. When I'm not teaching, I love to get outside and explore the world around me. I'm a big fan of nature and enjoy taking photos of the beautiful scenery. I also like to travel and discover new cultures. I'm always looking to learn more and improve my skills. And, I'm excited to see where this journey will take me!",
    pronouns: "she/her",
    favorite_amphibian: "(me, obviously)",
    role: "Grad TA",
  },
];

export const calendarLink =
  "https://calendar.google.com/calendar/u/0?cid=Y18xNTEzZDg4ZWYyNDMzNDNjNmRhMDk1MzAyYWFkZjYxY2M2M2Y2ODJiNGM1NzRmODA2NjUxMDBiMDNmMDNmNGEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";

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
