// import froggy from process.env.PUBLIC_URL+ "../public/froggy.png";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroDivider from "./components/divider-images/hero-divider/HeroDivider";
import DividerA from "./components/divider-images/symmetrical-dividers/DividerA";
import AssignmentTable from "./components/AssignmentTable";
import {
  homeworkAssignments,
  labAssignments,
  projectAssignments,
  casestudyAssignments,
  lectureWeeks,
  FAQLink,
  PUB,
} from "./SITE_DATA";
import Staff from "./components/Staff";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import LecturesTable from "./components/LecturesTable";
import Resources from "./components/Resources";
import FooterDivider from "./components/divider-images/hero-divider/FooterDivider";

// Helper function to join class names on ternary conditionals
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  // the index of the section currently in view (used for navbar purposes)
  const [inViewSection, setInViewSection] = useState<undefined | number>(0);
  const [aboutRef, aboutInView] = useInView();
  const [assignmentsRef, assignmentsInView] = useInView();
  const [lecturesRef, lecturesInView] = useInView();
  const [resourcesRef, resourcesInView] = useInView();
  const [staffRef, staffInView] = useInView();

  // Detects the part of the page currently in view to the user
  useEffect(() => {
    [
      aboutInView,
      assignmentsInView,
      lecturesInView,
      resourcesInView,
      staffInView,
    ]
      .reverse()
      .forEach((val, index) => {
        if (
          !aboutInView &&
          !assignmentsInView &&
          !lecturesInView &&
          !resourcesInView &&
          !staffInView
        ) {
          setInViewSection(undefined);
        }

        if (val) {
          setInViewSection(4 - index);
          // console.log(4 - index);
        }
      });
  }, [
    aboutInView,
    assignmentsInView,
    lecturesInView,
    resourcesInView,
    staffInView,
  ]);

  return (
    <div className="">
      <header className="fixed top-0 z-50 w-full">
        <Navbar inView={inViewSection} />
      </header>
      <main>
        <body className="">
          {/* <p>asdasdasda</p> */}
          <section
            id="intro"
            className="herobackground flex flex-col h-[30rem] items-center justify-center bg-[#0B391B] text-neutral-50 "
          >
            <div className="backdrop-blur-md bg-neutral-800/30 rounded-2xl">
              <h1 className="blackstroke-lg font-title text-8xl px-4 py-4 text-center ">
                LOGIC FOR SYSTEMS
              </h1>
              <h3 className="blackstroke-sm font-title text-5xl pb-4 text-center">
                CSCI 1710
              </h3>
            </div>
          </section>

          <HeroDivider />

          <section
            id="about"
            ref={aboutRef}
            className="text-center flex flex-col items-center justify-center "
          >
            <h2 className="text-6xl font-title">About</h2>

            <div className="p-4" />
            <h4 className="font-bold pb-6 text-2xl">“What do you want?” </h4>
            <div className=" w-5/6 lg:w-3/4 text-lg">
              <p>
                This question is perilous, yet indispensable in life. And it
                remains vital in designing, understanding, and building systems.
                How will you check that you’ve achieved your goal? What is the
                cost, and which assumptions are you making along the way? Do you
                really want what you think you do, and will your code (or other
                artifact) actually work?
              </p>
              <div className="p-3" />
              <p>
                These questions matter, whether you’re crafting a new data
                structure, finishing up a programming assignment, designing a
                processor, or arguing over the rules of Monopoly with your
                family. In this course, you’ll use concrete software tools
                (e.g., model checkers and SAT solvers) to bring the power of
                automated reasoning to bear on these and other quandaries in,
                and outside of, computer science.
              </p>
              <div className="p-3" />
              <p className="flex flex-col items-center justify-center font-semibold">
                Logic for Systems is built on three broad learning categories:
                <ul className="list-disc pt-2 font-normal w-fit text-md flex flex-col text-left items-center justify-center">
                  <li className="w-3/4">
                    Modeling systems and making good abstraction choices;
                  </li>
                  <li className="w-3/4">
                    Reasoning about systems automatically using logic; and
                  </li>
                  <li className="w-3/4">
                    The foundational algorithms behind the tools used both in
                    this class and in industry.
                  </li>
                </ul>
              </p>
              <div className="p-3" />
              <p>
                The course culminates in a student-proposed, staff-mentored
                project that applies to a real-world system. Past projects have
                involved everything from distributed hash-tables to baseball
                games!
              </p>
              <div className="p-3" />
              <p>
                Prerequisite:{" "}
                <i>
                  <b>Any intro sequence!</b>
                </i>{" "}
                (CSCI 0160, CSCI 0180, CSCI 0190, or CSCI0200).
              </p>
              <div className="p-3" />
              <p className="italic text-neutral-500">
                Check back soon for the course syllabus!
              </p>
              <div className="p-3" />
              <p className="">
                If you're unsure about whether this is the right course for you,
                check out our{" "}
                <a
                  className="text-primary-500 underline font-bold"
                  href={FAQLink}
                >
                  FAQ
                </a>
                !
              </p>
              <div className="p-3" />
            </div>
            {/* add the frog image from the images folder */}
            <img
              src={PUB + "/images/froggy.png"}
              alt="The class froggy logo"
              className="min-w-40 w-1/6"
            />
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="assignments"
            ref={assignmentsRef}
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Assignments</h2>
            <div className="p-4" />
            <p className="italic text-neutral-500">
              (Unreleased assignments shown for more info during shopping
              period)
            </p>
            <div className="p-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <AssignmentTable
                tablename="Homeworks"
                assignments={homeworkAssignments}
              />
              <AssignmentTable
                tablename="Labs (In-Person)"
                assignments={labAssignments}
              />
              <AssignmentTable
                tablename="Projects"
                assignments={projectAssignments}
              />
              <AssignmentTable
                tablename="Case Studies"
                assignments={casestudyAssignments}
              />
            </div>
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="lectures"
            ref={lecturesRef}
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Lectures</h2>
            <div className="p-4" />
            {lectureWeeks.length === 0 && (
              <p className="text-neutral-500">
                Nothing here yet! See you in class :)
              </p>
            )}
            <LecturesTable weeks={lectureWeeks} />
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="resources"
            ref={resourcesRef}
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Resources</h2>
            <div className="p-4" />
            <Resources />
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="staff"
            ref={staffRef}
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Staff</h2>
            <div className="p-4" />
            <Staff />
          </section>
        </body>
        <p className="text-center p-16">
          © Spring 2023 cs1710 TA Staff |{" "}
          <a className="text-primary-500 underline" href="http://cs.brown.edu/">
            Computer Science Department
          </a>{" "}
          |{" "}
          <a className="text-primary-500 underline" href="http://brown.edu/">
            Brown University
          </a>
        </p>
        <FooterDivider />
      </main>
    </div>
  );
}

export default App;
