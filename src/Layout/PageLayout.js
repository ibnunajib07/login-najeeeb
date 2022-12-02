import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./pageLayout.css";

import Header from "../components/Header/Header";

export const PageLayout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (

        <Header />
        // <div className="layout-container">
        //     <div className="sidebar">
        //         <NavLink className="sidebar-items" to={"/dashboard"}>
        //             Dashboard
        //         </NavLink>
        //         <NavLink className="sidebar-items" to={"/sidebar-page-one"}>
        //             Page One
        //         </NavLink>
        //         <NavLink className="sidebar-items" to={"/sidebar-page-two"}>
        //             Page Two
        //         </NavLink>
        //     </div>
        //     <div className="right-side-container">
        //         <div className="navbar">
        //             <NavLink className="sidebar-items" to={"/about"}>
        //                 About
        //             </NavLink>
        //             <NavLink className="sidebar-items" to={"/profile"}>
        //                 Profile
        //             </NavLink>
        //             <button onClick={() => logout()}>
        //                 LOGOUT
        //             </button>
        //         </div>
        //         <div className="content">
        //             <Outlet />
        //         </div>
        //         <div className="footer">
        //             Copyright September 12, 2022 @ nzrfrz
        //         </div>
        //     </div>
        // </div>
    );
};