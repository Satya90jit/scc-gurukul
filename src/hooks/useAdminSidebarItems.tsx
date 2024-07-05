import {
  SchoolOutlined,
  PeopleOutline,
  LocationOnOutlined,
  StorefrontOutlined,
  WorkOutline,
  AttachMoneyOutlined,
  AccountBalanceWalletOutlined,
  BarChartOutlined,
  ContactMailOutlined,
  InfoOutlined,
  GavelOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

const useAdminSidebarItems = () => {
  return [
    {
      _id: "1",
      title: "Study",
      route: "/admin/study",
      icon: <SchoolOutlined />,
    },
    {
      _id: "2",
      title: "Batches",
      route: "/admin/batches",
      icon: <PeopleOutline />,
    },
    {
      _id: "3",
      title: "MV Centres",
      route: "/admin/pw-centres",
      icon: <LocationOnOutlined />,
    },
    {
      _id: "4",
      title: "MV Store",
      route: "/admin/pw-store",
      icon: <StorefrontOutlined />,
    },
    {
      _id: "5",
      title: "Upskilling - Job Assistance",
      route: "/admin/upskilling",
      icon: <WorkOutline />,
    },
    {
      _id: "6",
      title: "Refer & Earn",
      route: "/admin/refer-earn",
      icon: <AttachMoneyOutlined />,
    },
    {
      _id: "7",
      title: "My Wallet",
      route: "/admin/my-wallet",
      icon: <AccountBalanceWalletOutlined />,
    },
    {
      _id: "8",
      title: "Our Results",
      route: "/admin/our-results",
      icon: <BarChartOutlined />,
    },
    {
      _id: "9",
      title: "Contact Us",
      route: "/admin/contact-us",
      icon: <ContactMailOutlined />,
    },
    {
      _id: "10",
      title: "About Us",
      route: "/admin/about-us",
      icon: <InfoOutlined />,
    },
    {
      _id: "11",
      title: "Terms & Conditions",
      route: "/admin/terms-conditions",
      icon: <GavelOutlined />,
    },
  ];
};

export default useAdminSidebarItems;
