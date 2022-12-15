import "./navbar.scss";
import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <span className="logo">Fleet Social</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined className="darkModeIcon" onClick={toggle} />
        ) : (
          <DarkModeOutlined className="darkModeIcon" onClick={toggle} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt={currentUser.name} />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
