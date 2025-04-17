import React, { useState, useContext } from "react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiMenu,
  HiX,
} from "react-icons/hi";
import user from "../assets/UserPlaceholder.png";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { user } = useContext(AuthContext);

  return (
    <>
      {/* Hamburger menu button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar (hidden on small, shown on md+ or when open) */}
      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        <Sidebar aria-label="Responsive sidebar">
          <SidebarLogo href="#" img={user} alt="logo">
            {user ? user.displayName : ""}
          </SidebarLogo>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="https://thereadingnook-production.up.railway.app/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
              <SidebarItem
                href="https://thereadingnook-production.up.railway.app/admin/dashboard/upload"
                icon={HiOutlineCloudUpload}
              >
                Upload
              </SidebarItem>
              <SidebarItem href="https://thereadingnook-production.up.railway.app/admin/dashboard/manage" icon={HiInbox}>
                Manage Books
              </SidebarItem>

              <SidebarItem href="https://thereadingnook-production.up.railway.app/shop" icon={HiShoppingBag}>
                books
              </SidebarItem>
              <SidebarItem href="https://thereadingnook-production.up.railway.app/login" icon={HiArrowSmRight}>
                Sign In
              </SidebarItem>
              <SidebarItem href="https://thereadingnook-production.up.railway.app/logout" icon={HiTable}>
                Log Out
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem href="https://thereadingnook-production.up.railway.app/about" icon={HiViewBoards}>
                About
              </SidebarItem>
              <SidebarItem href="#" icon={BiBuoy}>
                Help
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
};

export default SideBar;
