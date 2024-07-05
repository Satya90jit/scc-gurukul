import {
  BadgeOutlined,
  CalculateOutlined,
  KeyboardDoubleArrowRight,
  LogoutOutlined,
} from "@mui/icons-material";
import { Avatar, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useState } from "react";

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const openProfile = Boolean(profileAnchorEl);
  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <nav className="sticky top-5 z-[90] w-full h-16 flex items-center mb-5">
      <section className="w-full bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl py-1">
        <div className="px-4 w-full flex justify-between gap-4">
          {/* <ResponsiveDrawer /> */}
          <div className="flex items-center text-md">
            <CalculateOutlined className="pr-2 text-violet-600 !text-2xl" />
            <span className="pr-1">Financial Investment Course</span>
            <KeyboardDoubleArrowRight className="!text-lg text-violet-700" />
          </div>
          <aside className="w-1/4 flex gap-5 items-center justify-end">
            <div className="group">
              <Button
                id="basic-button"
                aria-controls={openProfile ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openProfile ? "true" : undefined}
                onClick={handleProfileClick}
              >
                <p className="pr-3 text-gray-900">Hi,Mohit</p>
                <Avatar
                  src="/math1.jpeg"
                  sx={{
                    height: "2.5rem",
                    width: "2.5rem",
                    backgroundColor: "#0e0e66",
                  }}
                ></Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={profileAnchorEl}
                open={openProfile}
                onClose={handleProfileClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleProfileClose}>
                  <aside className="flex flex-col px-3 pb-2">
                    <p className="text-lg font-semibold capitalize">Mohit ji</p>
                    <p className="text-lg font-medium">mohit@gaiml.com</p>
                  </aside>{" "}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfileClose}>
                  <Link href="/admin/my-profile">
                    <p className="flex gap-2 items-center px-3 hover:bg-primary/10 py-2 text-base tracking-wider font-medium cursor-pointer">
                      <BadgeOutlined className="!text-primary !text-3xl" />
                      MyProfile
                    </p>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <div className="flex gap-2 items-center px-3 hover:bg-primary/10 cursor-pointer py-2 text-base tracking-wider font-medium">
                    <LogoutOutlined className="!text-primary !text-3xl" />
                    <p className=""> LogOut</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
          </aside>
        </div>
      </section>
    </nav>
  );
};

export default AdminNavbar;
