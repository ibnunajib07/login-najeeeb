import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PageLayout } from "../Layout/PageLayout";

import { ProtectedRoutes } from "./ProtectedRoutes";
import { Dashboard } from "../Pages/Dashboard";
import { Profile } from "../Pages/Profile";
import { About } from "../Pages/About";
import { SidebarPageOne } from "../Pages/SidebarPageOne";
import { SidebarPageTwo } from "../Pages/SidebarPageTwo";

import { PublicRoutes } from "./PublicRoutes";
import { AuthLayout } from "../Auth/AuthLayout";
import { Login } from "../Auth/Login";
import { Registration } from "../Auth/Registration";

import { Error } from "../Pages/Error";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoutes />}>
                <Route path="/" element={<AuthLayout />}>
                    <Route index path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/" element={<Navigate to={'/login'} replace />} />
                </Route>
            </Route>
            <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/" element={<PageLayout />}>
                    <Route index path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/sidebar-page-one" element={<SidebarPageOne />} />
                    <Route path="/sidebar-page-two" element={<SidebarPageTwo />} />
                    <Route path="/" element={<Navigate to={'/dashboard'} replace />} />
                </Route>
            </Route>
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to={'/error'} replace />} />
        </Routes>
    );
};