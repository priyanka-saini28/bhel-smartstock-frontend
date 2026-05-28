import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaClipboardList,
  FaBarcode,
  FaClock,
  FaBoxOpen,
  FaChartBar,
  FaCog,
  FaUsers
} from "react-icons/fa";

import bhelLogo from "../../assets/logo/bhel-logo.png";

const Sidebar = () => {

  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/"
    },
    {
      title: "Matcode",
      icon: <FaBarcode />,
      path: "/matcodes"
    },

    {
      title: "SIV",
      icon: <FaClock />,
      path: "/siv"
    },
    {
      title: "Pending SIV",
      icon: <FaClock />,
      path: "/pending-siv"
    },
    {
      title: "SRV",
      icon: <FaCog />,
      path: "/srv"
    },


    {
      title: "Inventory",
      icon: <FaBoxOpen />,
      path: "/inventory"
    },

    {
      title: "Analysis",
      icon: <FaChartBar />,
      path: "/analysis"
    },


    
  ];

  return (

    <aside
      className="
        fixed
        left-0
        top-0
        w-[210px]
        h-screen
        bg-[#003399]
        text-white
        z-50
        overflow-y-auto
      "
    >

      {/* Logo */}
      <div className="flex justify-center py-6">

        <img
          src={bhelLogo}
          alt="BHEL Logo"
          className="w-36 object-contain"
        />

      </div>

      {/* Menu Items */}
      <div className="flex flex-col">

        {menuItems.map((item, index) => (

          <Link
            to={item.path}
            key={index}
            className={`
              flex
              items-center
              gap-4
              px-6
              py-5
              border-b
              border-blue-700
              transition-all
              duration-300
              cursor-pointer

              ${
                location.pathname === item.path
                  ? "bg-blue-700"
                  : "hover:bg-blue-700"
              }
            `}
          >

            {/* Icon */}
            <span className="text-xl">
              {item.icon}
            </span>

            {/* Title */}
            <span className="text-[18px]">
              {item.title}
            </span>

          </Link>

        ))}

      </div>

    </aside>

  );
};

export default Sidebar;