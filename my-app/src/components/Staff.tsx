import { professor, htas, utas, staffMember } from "../SITE_DATA";
import StaffMember from "./StaffCard/StaffMember";

export default function Staff() {
  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div className="w-full lg:w-1/2 ">
        <h2 className="mb-2 text-3xl font-bold font-title tracking-tight sm:text-4xl">
          Professor
        </h2>
        <StaffSection staff={[professor]} />
      </div>

      <div className="w-full">
        <h2 className="mb-2 text-3xl font-bold font-title tracking-tight sm:text-4xl">
          HTAs
        </h2>
        <StaffSection staff={htas} />
        <h2 className="mb-2 text-3xl font-bold font-title tracking-tight sm:text-4xl">
          UTAs
        </h2>
        <StaffSection staff={utas} />
      </div>
    </div>
  );
}

function StaffSection(props: { staff: staffMember[] }) {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {props.staff.map((member: staffMember) => (
              <li
                key={member.name}
                className={props.staff.length == 1 ? "col-span-2" : ""}
              >
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="rounded-lg object-cover shadow-lg"
                      src={member.image}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{member.name}</h3>
                        <p className="text-indigo-600">{member.name}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
