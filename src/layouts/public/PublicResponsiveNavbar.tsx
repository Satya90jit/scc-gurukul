import { Close, ExpandMore, Menu } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, memo, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdLogIn } from "react-icons/io";
import { INavArr } from "./PublicNavbar";

interface INavItem {
  _id: string;
  title: string;
  path?: string;
  arr?: INavArr[];
}

const PublicResponsiveNavbar = memo(() => {
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
});
export default PublicResponsiveNavbar;

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
