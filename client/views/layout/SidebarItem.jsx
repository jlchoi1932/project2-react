import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  if (item.childrens) {
    return (
      <li
        className={open ? "sidebar-item open" : "sidebar-item"}
        onClick={toggleMenu}
      >
        <div className="sidebar-title flex">
          <div className="flex-start">
            {item.icon}
            <span>{item.title}</span>
          </div>
          <KeyboardArrowDownIcon
            className="toggle"
            sx={{ fontSize: 20, color: "#ffffff", marginRight: 1 }}
          />
        </div>
        <ul className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="sidebar-item">
        <Link to={item.path || "#"} className="flex-start ">
          {item.icon}
          {item.title}
        </Link>
      </li>
    );
  }
}
