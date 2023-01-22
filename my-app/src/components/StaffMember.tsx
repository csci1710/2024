import { staffMember } from "../SITE_DATA";

export default function StaffMember(member: staffMember) {
  return (
    <div className="w-40 bg-white shadow-md">
      <img src={member.image}></img>
      <p>{member.name}</p>
    </div>
  );
}
