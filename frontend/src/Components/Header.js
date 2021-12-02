import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNative } from "react-router-dom";
import "../Styles/Header.css";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation(); //! khi ta tự gõ địa chỉ qua trang thi css tự động nhay qua ô mà chúng ta chọn luôn

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <>
      <>
        <div className="header">
          <p className="logo">Contact App</p>
          <div className="header-right">
            <Link to="/">
              <p
                className={`${activeTab === "Home" ? "active" : ""}`}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </p>
            </Link>
            <Link to="/add">
              <p
                className={`${activeTab === "AddContact" ? "active" : ""}`}
                onClick={() => setActiveTab("AddContact")}
              >
                Add Contact
              </p>
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
