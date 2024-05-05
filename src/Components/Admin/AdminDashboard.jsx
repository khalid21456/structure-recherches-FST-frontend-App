import React from "react";
import ReactDOM from "react-dom"
import axios from "axios";
import "../../style/AdminDashboard.css"
import DashboardNav from "./DashboardNav";
import AdminAccueil from "./AdminComponents/AdminAccueil";

export default function AdminDashboard() {
    return (
        <div className="AdminDashboard-container overflow-auto bg-gray-100">
            <DashboardNav/>
            <div id="dashboardContent" className="mt-3 ml-3">
                <AdminAccueil/>
            </div>
        </div>
    )
}