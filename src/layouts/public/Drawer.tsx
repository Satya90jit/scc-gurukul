import useAdminSidebarItems from "@/hooks/useAdminSidebarItems";
import { ExpandLess, ExpandMore, Logout } from "@mui/icons-material";
import { Collapse, List, ListItemButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

const Drawer = () => {
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const router = useRouter();
  const MenuItems = useAdminSidebarItems();

  return (
    <section
      className={`lg:block hidden sticky top-5 left-0 min-w-[15rem] w-60 h-[calc(100vh-40px)] pb-20 bg-white rounded-3xl shadow-[rgba(0,_98,_90,_0.2)_0px_0px_12px]`}
    >
      <div className="flex justify-center items-center gap-2 h-24">
        <img
          src="main-logo.jpeg"
          alt="Math-Wala"
          className="w-10 cursor-pointer"
        />
        <p className="text-gray-800 font-medium text-lg">Maths Wala</p>
      </div>

      {/* //? main menus section */}
      <div className="flex flex-col w-full">
        {MenuItems?.map((menuItem: any) => (
          <Fragment key={menuItem?._id}>
            <Tooltip
              title={menuItem?.title}
              followCursor
              arrow
              placement="top-end"
            >
              <div
                className={`w-full group flex items-center justify-between px-4 py-3 text-gray-500 hover:text-white box-border rounded-lg  hover:bg-black transition-all duration-150 ease-in-out cursor-pointer 
                `}
                onClick={() => {
                  if (menuItem?.route) return router?.push(menuItem?.route);
                  menuItem?.submenus &&
                    setSelectedSubMenu((prev) =>
                      prev === menuItem._id ? "" : menuItem._id
                    );
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 group-hover:text-white common-transition">
                    {menuItem?.icon}
                  </span>
                  <p className={`font-medium`}>{menuItem?.title}</p>
                </div>
                {menuItem?.submenus ? (
                  selectedSubMenu === menuItem?._id ? (
                    <span className="">
                      <ExpandLess />
                    </span>
                  ) : (
                    <span className="">
                      <ExpandMore />
                    </span>
                  )
                ) : null}
              </div>
            </Tooltip>

            {/* //? submenus section */}
            {menuItem?.submenus ? (
              <Collapse
                in={selectedSubMenu === menuItem?._id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {menuItem?.submenus?.map((submenu: any) => (
                    <ListItemButton
                      key={submenu?._id}
                      onClick={() => router.push(submenu?.route)}
                      sx={{ pl: 5 }}
                      selected={router.pathname === submenu.route}
                      className={`!flex !items-center !gap-1 hover:!bg-primary/10 !text-gray-500 hover:!text-primary !border-l-4 common-transition  ${
                        router.asPath === submenu.route
                          ? "!bg-primary/10 !text-primary !border-primary"
                          : "!border-transparent"
                      }`}
                    >
                      {submenu?.icon}
                      <h4 className="font-medium whitespace-nowrap">
                        {submenu?.title}
                      </h4>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </Fragment>
        ))}

        <Tooltip
          title="logout"
          followCursor
          arrow
          placement="top-end"
          sx={{
            zIndex: "9900",
          }}
        >
          <div
            className={`w-full group flex items-center justify-between text-gray-500 hover:text-red-600 px-5 py-3 hover:bg-red-500/10 common-transition cursor-pointer`}
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:text-red-400">
                <Logout />
              </span>
              <p className="font-medium whitespace-nowrap">LogOut</p>
            </div>
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Drawer;
