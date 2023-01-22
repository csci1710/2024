import React from "react";
import logo from "./logo.svg";
import froggy from "./images/froggy.png";
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
} from "./SITE_DATA";
import Staff from "./components/Staff";

// Helper function to join class names on ternary conditionals
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="">
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>
      <main>
        <body className="mt-16">
          {/* <p>asdasdasda</p> */}
          <section
            id="intro"
            className="herobackground flex flex-col h-[30rem] items-center justify-center bg-[#CDE18F] text-neutral-50 "
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
            className="text-center flex flex-col items-center justify-center "
          >
            <h2 className="text-6xl font-title">About</h2>
            <div className="p-4" />
            <p className=" w-5/6 lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              quibusdam omnis aliquid pariatur ullam! Molestiae, officiis velit
              nisi adipisci temporibus natus! Tenetur, enim. Ad qui suscipit
              itaque est tempore natus! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Eius corporis rerum eaque repudiandae debitis
              nam doloremque voluptatem repellat in non odit labore, eum tempora
              quas accusamus voluptatibus deleniti dolorum iusto? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Obcaecati, asperiores
              repellendus. Aliquam sed omnis ad corrupti quis praesentium
              facilis dolores vitae aperiam ipsum dicta iure nemo nostrum eius,
              maxime quibusdam!
            </p>
            {/* add the frog image from the images folder */}
            <img
              src={froggy}
              alt="The class froggy logo"
              className="min-w-40 w-1/6"
            />
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="assignments"
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Assignments</h2>
            <div className="p-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <AssignmentTable
                tablename="Homeworks"
                assignments={homeworkAssignments}
              />

              <AssignmentTable
                tablename="Projects"
                assignments={projectAssignments}
              />
              <AssignmentTable tablename="Labs" assignments={labAssignments} />
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
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Lectures</h2>
            <div className="p-4" />
            <p className=" w-5/6 lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              quibusdam omnis aliquid pariatur ullam! Molestiae, officiis velit
              nisi adipisci temporibus natus! Tenetur, enim. Ad qui suscipit
              itaque est tempore natus! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Eius corporis rerum eaque repudiandae debitis
              nam doloremque voluptatem repellat in non odit labore, eum tempora
              quas accusamus voluptatibus deleniti dolorum iusto? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Obcaecati, asperiores
              repellendus. Aliquam sed omnis ad corrupti quis praesentium
              facilis dolores vitae aperiam ipsum dicta iure nemo nostrum eius,
              maxime quibusdam!
            </p>
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="resources"
            className="text-center flex flex-col items-center justify-center"
          >
            <h2 className="text-6xl font-title">Resources</h2>
            <div className="p-4" />
            <p className=" w-5/6 lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              quibusdam omnis aliquid pariatur ullam! Molestiae, officiis velit
              nisi adipisci temporibus natus! Tenetur, enim. Ad qui suscipit
              itaque est tempore natus! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Eius corporis rerum eaque repudiandae debitis
              nam doloremque voluptatem repellat in non odit labore, eum tempora
              quas accusamus voluptatibus deleniti dolorum iusto? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Obcaecati, asperiores
              repellendus. Aliquam sed omnis ad corrupti quis praesentium
              facilis dolores vitae aperiam ipsum dicta iure nemo nostrum eius,
              maxime quibusdam!
            </p>
          </section>

          <div className="p-6" />
          <DividerA />

          <section
            id="staff"
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
      </main>
    </div>
  );
}

export default App;
