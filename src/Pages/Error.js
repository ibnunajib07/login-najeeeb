import React from "react";
import { useNavigate } from "react-router-dom";

import "./error.css"

export const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="error-page-container">
            <p>
                404 Not Found !!!
            </p>
            <p>
                Are You Lost ???? 
            </p>
            <button className="error-page-button" onClick={() => navigate("/")}>
                BACK
            </button>
        </div>
    );
};