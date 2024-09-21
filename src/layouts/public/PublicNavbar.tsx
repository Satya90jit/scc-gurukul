import { Close, ExpandMore, Menu } from "@mui/icons-material";
import { Collapse, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import {
  FaAtom,
  FaBook,
  FaCalculator,
  FaFlask,
  FaGlobe,
  FaLeaf,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiMaterialsScience } from "react-icons/gi";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineBiotech } from "react-icons/md";

interface INavArr {
  _id: string;
  title: string;
  path: string;
  icon?: JSX.Element;
}
interface INavItem {
  _id: string;
  title: string;
  path?: string;
  arr?: INavArr[];
}
const ALL_COURSES_ARR = [
  {
    title: "Class 1-5",
    path: "/services/class-1-5",
    feature: [
      {
        _id: "1",
        title: "Mathematics",
        path: "mathematics",
        icon: <FaCalculator />,
        description:
          "Building a strong foundation in arithmetic, geometry, and more.",
      },
      {
        _id: "2",
        title: "Science",
        path: "science",
        icon: <FaFlask />,
        description: "Introduction to basic scientific concepts.",
      },
      {
        _id: "3",
        title: "English",
        path: "english",
        icon: <FaBook />,
        description: "Grammar, reading, and comprehension skills.",
      },
      {
        _id: "4",
        title: "Environmental Studies",
        path: "environmental-studies",
        icon: <FaLeaf />,
        description: "Understanding the environment and its importance.",
      },
    ],
  },
  {
    title: "Class 6-8",
    path: "/services/class-6-8",
    feature: [
      {
        _id: "5",
        title: "Mathematics",
        path: "mathematics",
        icon: <FaCalculator />,
        description: "Advanced arithmetic, algebra, and geometry.",
      },
      {
        _id: "6",
        title: "Science",
        path: "science",
        icon: <GiMaterialsScience />,
        description: "Exploring physics, chemistry, and biology basics.",
      },
      {
        _id: "7",
        title: "Social Science",
        path: "social-science",
        icon: <FaGlobe />,
        description: "History, geography, and civics.",
      },
      {
        _id: "8",
        title: "English",
        path: "english",
        icon: <FaBook />,
        description: "Literature, writing, and communication skills.",
      },
    ],
  },
  {
    title: "Class 9-10",
    path: "/services/class-9-10",
    feature: [
      {
        _id: "9",
        title: "Mathematics",
        path: "mathematics",
        icon: <FaCalculator />,
        description: "Preparing for board exams with advanced topics.",
      },
      {
        _id: "10",
        title: "Science",
        path: "science",
        icon: <GiMaterialsScience />,
        description: "In-depth physics, chemistry, and biology.",
      },
      {
        _id: "11",
        title: "Social Science",
        path: "social-science",
        icon: <FaGlobe />,
        description: "Comprehensive history, geography, and political science.",
      },
      {
        _id: "12",
        title: "English",
        path: "english",
        icon: <FaBook />,
        description: "Focused on grammar, literature, and creative writing.",
      },
    ],
  },
  {
    title: "Class 11-12",
    path: "/services/class-11-12",
    feature: [
      {
        _id: "13",
        title: "Mathematics",
        path: "mathematics",
        icon: <FaCalculator />,
        description:
          "Advanced calculus, algebra, and statistics for competitive exams.",
      },
      {
        _id: "14",
        title: "Physics",
        path: "physics",
        icon: <FaAtom />,
        description:
          "Comprehensive lessons in mechanics, optics, and electromagnetism.",
      },
      {
        _id: "15",
        title: "Chemistry",
        path: "chemistry",
        icon: <FaFlask />,
        description: "Organic, inorganic, and physical chemistry.",
      },
      {
        _id: "16",
        title: "Biology",
        path: "biology",
        icon: <MdOutlineBiotech />,
        description: "Detailed study of botany, zoology, and human biology.",
      },
      {
        _id: "17",
        title: "English",
        path: "english",
        icon: <FaBook />,
        description: "Mastering advanced literature and language skills.",
      },
    ],
  },
];
export const NAV_MENU_LISTS: INavItem[] = [
  {
    _id: "1",
    title: "All Courses",
    arr: [
      {
        _id: "1.1",
        title: "Class 1-5",
        path: "/services/class-1-5",
      },
      {
        _id: "1.2",
        title: "Class 6-8",
        path: "/services/class-6-8",
      },
      {
        _id: "1.3",
        title: "Class 9-10",
        path: "/services/class-9-10",
      },
      {
        _id: "1.4",
        title: "Class 11-12",
        path: "/services/class-11-12",
      },
    ],
  },
  {
    _id: "2",
    title: "FAQ",
    path: "/faq",
  },
  {
    _id: "3",
    title: "Blog",
    path: "/blog",
  },
];

const PublicNavbar = () => {
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-[999]">
      <section className="hidden mx-auto px-[12rem] lg:flex items-center justify-between gap-4">
        <div className="flex items-center gap-10">
          <Link href="/">
            <img
              src="logo.jpeg"
              alt="logo"
              className="md:h-12 h-10 rounded-full"
            />
          </Link>
          <ul className="flex items-center justify-center gap-10">
            <AllCourseMenu title="All Courses" arr={ALL_COURSES_ARR} />
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
        <ResponsiveNavbar />
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

const AllCourseMenu = ({ title, arr }: { title: string; arr: any[] }) => {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  return (
    <article
      onMouseEnter={() => setOpen(true)}
      className={`py-6 ${open ? "group" : ""}`}
    >
      <button className="flex items-center gap-0.5 font-medium capitalize text-gray-800 group-hover:text-secondary">
        {title}
        {arr ? (
          <ExpandMore className="group-hover:!-rotate-180 common-transition" />
        ) : null}
      </button>

      <aside className="absolute top-full left-0 opacity-0 group-hover:opacity-100 invisible group-hover:visible translate-y-3 group-hover:translate-y-0 rounded-b-md w-full h-[33rem] 2xl:h-[31rem] flex flex-col bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-200 ease-in-out pt-8 pb-16 overflow-y-scroll">
        <div className="main-container">
          <h4 className="text-2xl font-semibold text-center pb-12 tracking-wide capitalize">
            Empowering Learning, Inspiring Success
          </h4>
          <div className="flex">
            <div className="w-1/4 flex flex-col gap-4 pr-4 border-r">
              <h4 className="text-lg font-semibold pb-1 tracking-wide">
                Explore Courses:
              </h4>
              {arr.map((item, i) => (
                <p
                  key={i}
                  className={`relative capitalize py-3 px-4 rounded-md cursor-pointer overflow-hidden ${
                    activeIndex === i
                      ? "text-secondary bg-secondary/10"
                      : "bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                  }`}
                  onClick={() => router.push(item.path)}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  {item.title}
                  {activeIndex === i && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-full bg-secondary/10 rounded-md -z-10"
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    />
                  )}
                </p>
              ))}
            </div>
            <div className="w-3/4 grid grid-cols-4 gap-4 2xl:grid-cols-4 2xl:gap-6 pl-4">
              {arr[activeIndex].feature?.slice(0, 7)?.map((innerItem: any) => (
                <Link href={`/services/${innerItem?.path}`} key={innerItem._id}>
                  <article
                    className="h-full flex flex-col items-center justify-center text-center gap-2 bg-white border border-secondary/20 rounded-md hover:shadow-[0px_6px_30px_0px_#06072e1a] common-transition p-3"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-blue-700 bg-blue-900/5 p-2 rounded-lg shadow-sm text-2xl">
                      {innerItem.icon}
                    </span>
                    <h4 className="capitalize font-semibold tracking-wide pt-2 text-gray-800">
                      {innerItem.title}
                    </h4>
                    <p className="text-gray-500 capitalize text-sm">
                      {innerItem.description}
                    </p>
                  </article>
                </Link>
              ))}
              {/* <article
                className="h-full grid place-items-center gap-2 bg-white border border-secondary/20 rounded-md hover:shadow-[0px_6px_30px_0px_#06072e1a] common-transition p-3 cursor-pointer"
                onClick={() => router.push(arr[activeIndex].path)}
              >
                <h4 className="capitalize font-medium tracking-wide pt-2 text-secondary/80">
                  See All <East />
                </h4>
              </article> */}
            </div>
          </div>
        </div>
      </aside>
    </article>
  );
};

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState<any>(null);
  const { push } = useRouter();
  const handleClick = (path: string | undefined, id: string) => {
    if (path) {
      return push(path);
    } else {
      if (openList === id) setOpenList(null);
      else {
        const reqId = NAV_MENU_LISTS?.find((item) => item._id === id);
        setOpenList(reqId?._id);
      }
    }
  };
  return (
    <>
      <aside className="flex items-center justify-between py-3 border-b">
        <Link href="/">
          <img src="logo.jpeg" alt="" className="md:h-12 h-10" />
        </Link>
        <p className="text-xl font-bold text-white shadow-sm px-5 py-0.5 rounded-lg bg-blue-900 w-fit shadow-blue-500">
          SCC Gurukul
        </p>
        <div>
          {open ? (
            <span
              className={`text-red-700`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close />
            </span>
          ) : (
            <span
              className={`text-primary`}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Menu />
            </span>
          )}
        </div>
      </aside>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ul className="flex flex-col pb-4 pt-4">
          {NAV_MENU_LISTS.map((item, index) => (
            <Fragment key={item._id}>
              <li
                className="flex items-center justify-between list-none capitalize tracking-wide  cursor-pointer hover:text-primary py-1.5"
                onClick={() => handleClick(item?.path, item._id)}
              >
                {item.title}{" "}
                {item?.arr ? (
                  <ExpandMore
                    fontSize="small"
                    className="group-hover:!-rotate-180 common-transition"
                  />
                ) : null}
              </li>
              <Collapse in={openList === item._id} timeout="auto" unmountOnExit>
                <div className="flex flex-col">
                  {item?.arr?.map((innerItem) => (
                    <p
                      key={innerItem._id}
                      className="text-small py-2 border-b pl-3 capitalize"
                      onClick={() => {
                        setOpen(false);
                        setOpenList(null);
                        push(innerItem.path);
                      }}
                    >
                      {innerItem?.title}
                    </p>
                  ))}
                </div>
              </Collapse>
            </Fragment>
          ))}
          <div className="mt-4">
            <Link href="/">
              <button className="shake flex items-center gap-2 bg-blue-500 h-10 px-4 rounded-full text-white capitalize text-sm tracking-wider font-semibold">
                <FiPhoneCall className="text-white shake-animation common-transition text-lg" />
                Get Free Advice
              </button>
            </Link>
            <Link href="/login">
              <button className="mt-4 bg-secondary/10 border border-secondary text-secondary rounded-md w-fit px-4 py-1 flex items-center justify-center gap-1.5">
                <IoMdLogIn className="!text-xl" /> Login
              </button>
            </Link>
          </div>
        </ul>
      </Collapse>
    </>
  );
};

export default PublicNavbar;
