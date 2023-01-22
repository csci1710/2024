import { homeworkAssignments } from "../SITE_DATA";
import { classNames } from "../App";

const pageTitle = "Homework";

type AssignmentTableProps = {
  tablename: string;
  assignments: { name: string; dateRange: string; href?: string }[];
};

export default function AssignmentTable(props: AssignmentTableProps) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <p className="text-3xl font-title">{props.tablename}</p>
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {props.assignments.map((assignment) => (
                  <tr key={assignment.name}>
                    {assignment.href ? (
                      <td>
                        <a
                          href={assignment.href}
                          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-bold underline text-primary-500 sm:pl-6"
                        >
                          {assignment.name}
                        </a>
                      </td>
                    ) : (
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-400 sm:pl-6">
                        {assignment.name}
                      </td>
                    )}

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {assignment.dateRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
