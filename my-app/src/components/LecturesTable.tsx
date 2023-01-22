import { Fragment } from "react";
import { classNames } from "../App";
import { Lecture, LectureWeek, lectureWeeks } from "../SITE_DATA";
// import type LectureWeek from "../SITE_DATA";

type LecturesTableProps = {
  weeks: LectureWeek[];
};

export default function LecturesTable(props: LecturesTableProps) {
  return (
    <div>
      {props.weeks.map((week, idx) => (
        <Fragment key={week.name}>
          <div
            className={
              idx !== 0 ? "mt-6 pt-6 border-t-2 border-neutral-600" : ""
            }
          />
          <div className={"flex flex-col"}>
            <h4 className="font-title text-3xl "> {week.name}</h4>
            <div className="p-2" />

            {week.dailyLectures.map((lecture) => (
              <div className="mt-2 text-xl">
                <LectureDay lecture={lecture} />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function LectureDay(props: { lecture: Lecture }) {
  return (
    <div className="flex text-center items-center justify-center space-x-2 text-neutral-900 px-4">
      <p className="font-bold">
        <span className="text-neutral-600 font-medium">
          {props.lecture.date}:{" "}
        </span>
        {props.lecture.name}
      </p>
      <div className="flex space-x-2">
        {props.lecture.notesLink && (
          <a
            href={props.lecture.notesLink}
            className="text-primary-500 underline"
          >
            Notes
          </a>
        )}
        {props.lecture.recordingLink && (
          <a
            href={props.lecture.recordingLink}
            className="text-primary-500 underline"
          >
            Recording
          </a>
        )}
        {props.lecture.liveCodeLink && (
          <a
            href={props.lecture.liveCodeLink}
            className="text-primary-500 underline"
          >
            Livecode
          </a>
        )}
      </div>
    </div>
  );
}
