import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const isUserLogin = () => {
    const user = localStorage.getItem("user");
    if (!user) {
        return false;
    }
    else {
        return true;
    }
};

export const PublicRoutes = () => {
    const user = isUserLogin();

    return (
        user ? <Navigate to={"/dashboard"} replace /> : <Outlet />
    );
};