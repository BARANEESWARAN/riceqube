import React, { useEffect } from "react";
import { Image } from "antd";
import { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { useMsal } from "@azure/msal-react";
import logo from "../../../assets/headerlogo.jpeg";
import { QuestionCircleOutlined, PoweroffOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
import AntIcon from "../../actoms/Icon/Icon";
import Button from "../../actoms/Button/Button";






function Header() {
  const [setIsAuthenticated] = useState(false);
  // const { instance } = useMsal();

  const navigate = useNavigate();
  
// <-------Access Tocken Verify--------->
// useEffect(() => {

//     // Check if there's an access token in local storage or a cookie
//     const token = localStorage.getItem("accessToken");
//     if (!token) {
//         navigate("/")
//     }
// }, [navigate]);





  //  <*/--------Logout function----*/>

  const handleLogout = () => {
    // const ins = instance.logoutRedirect({})
    localStorage.removeItem("app_name");
    localStorage.removeItem("app_id");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("invoiceno");
    localStorage.removeItem("status");
    setIsAuthenticated(false);
    navigate("/");
  };

  //  <*/--------homepage nevigation----*/>
  const handle_homepage = () => {
    navigate("/homepage");
    localStorage.removeItem("invoiceno");
    localStorage.removeItem("status");
    localStorage.removeItem("app_name");
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_left">
          <Image
            preview={false}
            className="header_logo"
            src={logo}
            alt="GTI"
            onClick={handle_homepage}
          />
        </div>
        <div className="header_right">
          <a href={"google.com"} target="_blank" rel="noreferrer">
            <AntIcon Icon={QuestionCircleOutlined} />
          </a>
          <Button
            className="logout-btn"
            style={{ backgroundColor: "yellow", color: "#000" }}
            onClick={handleLogout}
            Icon={PoweroffOutlined}
            label={"Logout"}
            bgColor={"red"}
            color={"#fff"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
