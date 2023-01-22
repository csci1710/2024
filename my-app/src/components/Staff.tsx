import { professor } from "../SITE_DATA";
import StaffMember from "./StaffMember";

export default function Staff() {
  return (
    <div className="w-full flex flex-col items-center">
      <StaffMember {...professor} />
    </div>
  );
}
