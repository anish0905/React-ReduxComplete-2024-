import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavbarModule from "./NavbarModal";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  let data = [
    "Logo",
    "Design",
    "spotlight",
    " Business",
    " Education",
    "Plans and pricing",
    " Learn",

    " Sign up",
    "Business",
    "Education",
    "Logo",
    "Design",
    "spotlight",
    " Business",
    " Education",
    "Plans and pricing",
    " Learn",

    " Sign up",
    "Business",
    "Education",
  ];
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    console.log("clicked");
    setOpen(true);
  };

  return (
    <div className="nav-flex">
      <div className="hamburger-menu">
        <MenuIcon />
      </div>
      <div className="nav2">
        <ul>
          <li>Logo</li>
          <li>Design spotlight</li>
          <li onClick={handleOpen}>
            Business <ArrowDropDownIcon />
          </li>
          <li>
            Education <ArrowDropDownIcon />
          </li>
          <li>
            Plans and pricing <ArrowDropDownIcon />
          </li>
          <li>Learn</li>
        </ul>
      </div>

      <div className="nav3">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>

      {/*Conditionally render Navbar Module when open  */}

      {open && <NavbarModule isOpen={open} onClose={handleClose} data={data} />}
    </div>
  );
};

export default Navbar;
