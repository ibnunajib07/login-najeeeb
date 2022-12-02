import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const isUserLogin = () => {
    const user = localStorage.getItem("userCredentials");
    if (!user) {
        return false;
    }
    else {
        return true;
    }
};

export const ProtectedRoutes = () => {
    const user = isUserLogin();

    return (
        user ? <Outlet /> : <Navigate to={"/login"} replace />
    );
};