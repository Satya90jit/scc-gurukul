import { ExpandMore } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import AllCourseMenu from "./AllCoursesMenu";
import PublicResponsiveNavbar from "./PublicResponsiveNavbar";

export interface INavArr {
  _id: string;
  title: string;
  path: string;
  icon?: JSX.Element;
}

const PublicNavbar = () => {
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-[999]">
      <section className="hidden mx-auto lg:px-[12rem] lg:flex items-center justify-between gap-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img
              src="logo.jpeg"
              alt="logo"
              className="md:h-12 h-10 rounded-full"
            />
          </Link>
          <ul className="flex items-center justify-center gap-10">
            <AllCourseMenu title="All Courses" />
            <HoverDropdown title="FAQ" path="/seizure" />
            <HoverDropdown title="Blog" path="/ngo" />
          </ul>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Link href="/">
            <button className="shake flex items-center gap-2 bg-blue-500 h-10 px-4 rounded-full text-white capitalize text-sm tracking-wider font-semibold">
              <FiPhoneCall className="text-white shake-animation common-transition text-lg" />
              Get Free Advice
            </button>
          </Link>
          <Tooltip title="Login" placement="right" arrow>
            <a href="/login">
              <button className="bg-secondary/20 text-[#0000ff] rounded-full p-2 flex items-center justify-center gap-1.5">
                <IoMdLogIn className="!text-xl" />
              </button>
            </a>
          </Tooltip>
        </div>
      </section>
      <section className="main-container lg:hidden">
        <PublicResponsiveNavbar />
      </section>
    </nav>
  );
};

const HoverDropdown = ({
  title,
  arr,
  path,
}: {
  title: string;
  arr?: INavArr[];
  path?: string;
}) => {
  const router = useRouter();
  return (
    <div className="group relative py-6">
      <button
        className="flex items-center gap-0.5 font-medium capitalize text-gray-800 group-hover:text-secondary"
        onClick={() => (path ? router.push(path) : "")}
      >
        {title}
        {arr ? (
          <ExpandMore className="group-hover:!-rotate-180 common-transition" />
        ) : null}
      </button>
      {arr ? (
        <aside className="absolute top-full left-0 rounded-b-md w-60 flex flex-col scale-0 origin-top-left bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] group-hover:scale-100 common-transition overflow-hidden">
          {arr?.map((item, i: number) => (
            <div
              className="w-full flex items-center gap-2 py-2.5 cursor-pointer px-4 border-b hover:text-secondary hover:bg-secondary/5 common-transition"
              key={i}
              // onClick={() => router.push(item.path)}
            >
              {item.title === "Insights" ? (
                <a
                  href={item.path}
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Recommended for security reasons
                  className="flex items-center gap-2"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-full bg-secondary/10 text-secondary">
                    {item?.icon}
                  </span>
                  <p className="capitalize">{item?.title}</p>
                </a>
              ) : (
                <div
                  onClick={() => router.push(item.path)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-9 h-9 grid place-items-center rounded-full bg-secondary/10 text-secondary">
                    {item?.icon}
                  </span>
                  <p className="capitalize">{item?.title}</p>
                </div>
              )}
            </div>
          ))}
        </aside>
      ) : null}
    </div>
  );
};

export default PublicNavbar;
