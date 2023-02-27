// This file contains all of the information that should be easily accessible by components of the site

// Importantly, all external links are stored here so that
// between course updates, this is the only file that needs to
// be checked for updates

// SECURITY NOTE:
/* 
This entire file is sent to the client,
Any links that appear here (even if commented
out or set to "go live" later) are technically
accessible to people who care to look for them.

If you happen to be one of the savvy students that
has discovered this "treasure trove" of unreleased
material, congratulations! Neat find ;) However, please
be aware that even if an unreleased link exists here, it's probably
not live for a reason, and you probably shouldn't use anything
that we didn't intend for you to use yet. 

This is a tradeoff we make by choosing to simplify hosting of
the website with no significant backend logic. Now, go take
a security class!
*/

// DON'T TOUCH THIS
// Able to reference content in the public folder (PUB + "/...")
export const PUB = process.env.PUBLIC_URL;

// ------ EDIT STUFF BELOW THIS LINE ------

export const announcementInfo = {
  // Appears at the top of the screen attached to navbar,
  // if an announcement exists
  message: "We'd love to hear what you think, submit anonymous feedback!",
  buttonText: "Give Feedback",
  buttonLink:
    "https://docs.google.com/forms/d/1KreaxonPm0yHkpdu0Pg9bagNk3ygip3K7fcQNIsajhQ/viewform?edit_requested=true",
  // Set & Forget tools:
  autoReleaseDate: "Feb 3, 2023 09:45:00 EST", // Automatically shows announcement on this date/time EST
  autoDismissDate: "Feb 4, 2023 09:00:00 EST", // Automatically removes announcement on this date/time EST
  // Announcement will be shown on page load and manually dismissable between the above two dates
};

export const lectureWeeks: LectureWeek[] = [
  {
    name: "Week 1",
    dailyLectures: [
      {
        name: "What is LfS?",
        date: "Jan 25",
        notesLink: "https://hackmd.io/@lfs/rJMz6s0os",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=72c885e8-f244-4211-998e-af850163ddae",
        // liveCodeLink: "https://www.google.com",
      },
      {
        name: "From Test-Cases to Properties",
        date: "Jan 27",
        notesLink: "https://hackmd.io/@lfs/SJX6Or-2i",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4dfc8183-c365-498e-9821-af850163ddee",
        liveCodeLink:
          process.env.PUBLIC_URL + "/livecode/test_jan27_hypothesis.py",
      },
    ],
  },
  {
    name: "Week 2",
    dailyLectures: [
      {
        name: "Intro to Modeling Systems (1)",
        date: "Jan 30",
        notesLink: "https://hackmd.io/@lfs/HJu2XHr2o",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a0638390-2a9f-4136-a7f5-af850163de09",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/jan30_ttt.frg",
      },
      {
        name: "Intro to Modeling Systems (2), Using GPT-3 in 1710",
        date: "Feb 01",
        notesLink: "https://hackmd.io/@lfs/HJcvwQunj",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=54210906-5067-4705-929d-af850163de26",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb01_ttt.frg",
      },
      {
        name: "Intro to Modeling Systems (3): Traces, Examples",
        date: "Feb 03",
        notesLink: "https://hackmd.io/@lfs/rkXCRYq2i",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=454dc37b-ac45-47f1-a208-af850163de3c",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb03_ttt.frg",
        otherLinks: [
          {
            name: "Viz Script",
            link: process.env.PUBLIC_URL + "/livecode/feb03_ttt.js",
          },
          {
            name: "Tests",
            link: process.env.PUBLIC_URL + "/livecode/feb03_ttt.tests.frg",
          },
        ],
      },
    ],
  },
  {
    name: "Week 3",
    dailyLectures: [
      {
        name: "Testing Models",
        date: "Feb 06",
        notesLink: "https://hackmd.io/@lfs/rkboXnp2o",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3e51c6a5-8fb3-4ae9-8af9-af850163de50",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb06_ttt.frg",
        otherLinks: [
          {
            name: "Tests",
            link: process.env.PUBLIC_URL + "/livecode/feb06_ttt.tests.frg",
          },
        ],
      },
      {
        name: "Frequent Questions, Modeling with Traces",
        date: "Feb 08",
        notesLink: "https://hackmd.io/@lfs/BJZZPX-Ts",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=279ddca0-4628-4aeb-bd88-af850163de69",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb08_ttt.frg",
      },
      {
        name: "Wheats, Doing Nothing (Productively)",
        date: "Feb 10",
        notesLink: "https://hackmd.io/@lfs/SJDRo3Qpj",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6e309483-7c40-4585-879f-af850163de7e",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb10_ttt.frg",
      },
    ],
  },
  {
    name: "Week 4",
    dailyLectures: [
      {
        name: "Forge 1, and the Problem with Traces",
        date: "Feb 13",
        notesLink: "https://hackmd.io/@lfs/BymP9hv6o",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b548aae3-b80d-4654-bddf-af850163de94",
        liveCodeLink: process.env.PUBLIC_URL + "/livecode/feb13_ttt.frg",
      },
      {
        name: "Counterexamples to Induction",
        date: "Feb 15",
        notesLink: "https://hackmd.io/@lfs/rJECSSqaj",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c0c6888d-502a-44ee-ab14-af850163deaa",
        liveCodeLink:
          process.env.PUBLIC_URL + "/livecode/feb15_feb17_binarysearch.frg",
      },
      {
        name: "Counterexamples to Induction (Part 2)",
        date: "Feb 17",
        notesLink: "https://hackmd.io/@lfs/rJECSSqaj",
        recordingLink:
          "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=41b96408-8caf-43ee-b35b-af850163dec1",
        liveCodeLink:
          process.env.PUBLIC_URL + "/livecode/feb15_feb17_binarysearch.frg",
        otherLinks: [
          {
            name: "Completed Exercise",
            link:
              process.env.PUBLIC_URL + "/livecode/feb17_bsearch_inclass.frg",
          },
        ],
      },
    ],
  },
  {
    name: "Week 5",
    dailyLectures: [
      {
        name: "Forge 2 Review, Modeling Boolean Logic (syntax), inst",
        date: "Feb 22",
        notesLink: "https://hackmd.io/@lfs/BJOLSiXRs",
         recordingLink:
           "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=157bce7f-f82a-45e7-a90d-af850163deed",
         liveCodeLink:
           process.env.PUBLIC_URL + "/livecode/feb22_boolean.frg",
      },
      {
        name: "Modeling Boolean Logic (semantics)",
        date: "Feb 24",
        notesLink: "https://hackmd.io/@lfs/ByBHeVU0s",
         recordingLink:
           "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=446878ef-b312-462d-8ca9-af850163df07",
         liveCodeLink:
           process.env.PUBLIC_URL + "/livecode/feb24_boolean.frg",
        // otherLinks: [
        //   {
        //     name: "Completed Exercise",
        //     link:
        //       process.env.PUBLIC_URL + "/livecode/feb17_bsearch_inclass.frg",
        //   },
        // ],
      },
    ],
  },
  {
    name: "Week 6",
    dailyLectures: [
      {
        name: "Sets in Forge: Reachability",
        date: "Feb 27",
        notesLink: "https://hackmd.io/@lfs/S1fkYQcRs",
         recordingLink:
           "",
         //liveCodeLink:
         //  process.env.PUBLIC_URL + "/livecode/feb22_boolean.frg",
                 // otherLinks: [
          otherLinks: [{
            name: "Starter",
            link:
              process.env.PUBLIC_URL + "/livecode/feb27_starter.frg",
          },
        ],
      },
      {
        name: "More Sets: Modeling Mutexes",
        date: "Mar 1",
        //notesLink: "https://hackmd.io/@lfs/ByBHeVU0s",
        //  recordingLink:
        //    "",
        //  liveCodeLink:
        //    process.env.PUBLIC_URL + "/livecode/feb24_boolean.frg",
        // otherLinks: [
        //   {
        //     name: "Completed Exercise",
        //     link:
        //       process.env.PUBLIC_URL + "/livecode/feb17_bsearch_inclass.frg",
        //   },
        // ],
      },
      {
        name: "Beyond Assertions and Preservation",
        date: "Mar 3",
        //notesLink: "https://hackmd.io/@lfs/ByBHeVU0s",
        //  recordingLink:
        //    "",
        //  liveCodeLink:
        //    process.env.PUBLIC_URL + "/livecode/feb24_boolean.frg",
        // otherLinks: [
        //   {
        //     name: "Completed Exercise",
        //     link:
        //       process.env.PUBLIC_URL + "/livecode/feb17_bsearch_inclass.frg",
        //   },
        // ],
      },

    ],
  },
];

// For assignments, exclude HREF field to automatically disable the assignment
export const homeworkAssignments: Assignment[] = [
  {
    name: "PBT",
    dateRange: "Jan 27 → Feb 2, 2023",
    href: "https://docs.google.com/document/d/19K2zyhEqgFYEv1V1YyitYoAARJUr08cEogHFAtbSVEQ/pub",
    autoReleaseDate: "Jan 27, 2023 09:45:00 EST",
  },
  {
    name: "Forge 1",
    dateRange: "Feb 3 → Feb 9, 2023",
    href: "https://docs.google.com/document/d/e/2PACX-1vTRRDmcHhvWn17OxcnFRk3o7R2atjYalwU_TX0kpR-HQ_nEy8zHgDHZq-vr0BrizjYdJlOz2SFGjUC7/pub",
    autoReleaseDate: "Feb 3, 2023 13:00:00 EST",
  },
  {
    name: "Forge 2",
    dateRange: "Feb 10 → Feb 17, 2023",
    href: "https://docs.google.com/document/d/e/2PACX-1vRvocYtZqW7radvSC2CBVUOEOLsbC9qm5GdqmPOcnITv_SSCpHNAadQhXXwFVpD75UhcZhJ6hfE56dA/pub",
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
    autoReleaseDate: "Jan 26, 2023 21:28:59 EST",
  },
  // {
  //   name: "...",
  //   dateRange: "...",
  //   autoReleaseDate: "Jan 26, 2023 23:59:59 EST",
  // },
  // // ...
];

export const labAssignments: Assignment[] = [
  {
    name: "(Optional) Async Python",
    dateRange: "Jan 27, 2023",
    href: "https://docs.google.com/document/d/1EGadVobeA058JGtPxED5iRpzNwoSi39TPKU0MjWf26Q/pub",
    autoReleaseDate: "Jan 27, 2023 09:45:00 EST",
  },
  {
    name: "Tic Tac Toe",
    dateRange: "Feb 1 → Feb 2, 2023",
    href: "https://docs.google.com/document/d/e/2PACX-1vQ-_1lGqhtI64z8EjjTXtjb2bgVFVciiv08U9f4gtPoG3_fZCmgLxRN0COOOXbIy_wZJoprTmpxIH9_/pub",
  },
  {
    name: "Ring Election",
    dateRange: "Feb 8 → Feb 9, 2023",
    href: "https://docs.google.com/document/d/e/2PACX-1vQggXOEX__YRulZMhzTSDxpYTp-qLPt6T4Tkj1mZBuQVZJmWjX3An8Q9h23J37_pYajssupeT4M8toQ/pub",
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
    href: "https://docs.google.com/document/d/e/2PACX-1vRvpsSR2qXtBdF0jtcmN-z5T7DlyT-uFNbDd9Wa83pyj5xn9yuMV9d59cn0-grpINGh9yNPP5haF60q/pub",
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
    name: "Hotel Locking Chckpt. 1",
    dateRange: "Feb 22 → Feb 27, 2023",
    href: "https://docs.google.com/document/d/e/2PACX-1vRjdgtYkh5e34baOBn_OVlcLgYapaxNaoH8ax1sFXJTm6rfXEoJtBsS7VU8ojdGN7TJoyehBD2ObXch/pub",
  },
  {
    name: "Hotel Locking Chckpt. 2",
    dateRange: "Mar 3 → Mar 9, 2023",
  },
  {
    name: "Hotel Locking Chckpt. 3",
    dateRange: "Mar 10 → Mar 16",
  },
];

// export const forgeDocsLink: string = "";
// export const EdStemLink: string = "";

export const FAQLink: string =
  "https://docs.google.com/document/d/e/2PACX-1vQek5FgRtgmr7rdxOnq5qzTIaRoVcc0dN4dERg5qu4oJ4hTCAmWJkrBbNWUdm_zsMRtQOmzpG17fWQK/pub";

export const policies: Resource[] = [
  {
    name: "Syllabus",
    href: "https://docs.google.com/document/d/1dol5vJem0Rzvbk0QTJ77z7eQCQTClxZuXWG6VGreajE/edit?usp=sharing",
  },
  // { name: "Collaboration Policy", href: "" },
];

export const importantLinks: Resource[] = [
  {
    name: "EdStem",
    href: "https://edstem.org/us/courses/31922/discussion/",
  },
  { name: "Hours", href: "https://hours.cs.brown.edu/login" },
  {
    name: "Anonymous Feedback Form",
    href: "https://docs.google.com/forms/d/1KreaxonPm0yHkpdu0Pg9bagNk3ygip3K7fcQNIsajhQ/viewform?edit_requested=true",
  },
  {
    name: "Brown CS Health and Wellness",
    href: "https://browncs-health-and-wellness.github.io/",
  },
];

export const guides: Resource[] = [
  {
    name: "Setup & Installation",
    href: "https://docs.google.com/document/d/1EBlnRyujtkrfrYBhRRl88bMzgrSiF_NEtDU1Mcfvsh0/pub",
  },
  {
    name: "Forge Documentation",
    href: "https://csci1710.github.io/forge-documentation/",
  },
  {
    // Goes live later in semester
    name: "Python Z3",
    href: "", // Greyed out for now
    // href: "https://docs.google.com/document/d/1ri_-SadZ-IWqrg3ZNY6tJRB_0OSDdwJRYNtdHkSehuc/preview",
  },
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
  // Arbitrary links with arbitrary names:
  otherLinks?: { name: string; link: string }[]; // NOTE: Nothing preventing name conflict between notes/recording/livecode name
};

export type LectureWeek = {
  name: string; // week X
  dailyLectures: Lecture[];
};

export type Assignment = {
  name: string;
  dateRange: string;
  href?: string; // If left blank, assignment appears as disabled
  autoReleaseDate?: string; // Will treat href as "blank" until this date/time (EST)
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
