import Link from "next/link";

type SidebarProps = {};
const Sidebar = (props: SidebarProps) => {
  return (
    <div className="bg-teal-100 h-full border-black border-2 px-6 py-4">
      <nav className="flex flex-col items-start space-y-3">
        <Link className="hover:text-teal-700" href="/dashboard">
          Home
        </Link>
        <Link className="hover:text-teal-700" href="/dashboard/curriculum">
          Curriculum
        </Link>
        <Link className="hover:text-teal-700" href="/dashboard/profile">
          Profile
        </Link>
        <Link className="hover:text-teal-700" href="/login">
          Log out
        </Link>
      </nav>
    </div>
  );
};
export default Sidebar;
