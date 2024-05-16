import React from "react";
import { BsXCircle } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import { dashboard, marketplace, tables, kanban, profile, signin } from "../dashboard/DashboardIcons";
export default function Header({ toggleNavVisibility, isNavVisible }) {
  return (
    <>
    <div className={`dashboard-navigation ${isNavVisible ? "visible" : ""}`}>
        <button className="close-nav" onClick={toggleNavVisibility}>
          <BsXCircle/>
        </button>
        <div className="dashboard-logo">
          <Link to="/">&lt;/UI DEVELOPER&gt;</Link>
        </div>
        <div className="dashboard-links">
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNavVisibility}><img src={dashboard} alt="Dashboard" /> Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/marketplace" onClick={toggleNavVisibility}><img src={marketplace} alt="Marketplace" /> Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/tables" onClick={toggleNavVisibility}><img src={tables} alt="Tables" /> Tables</NavLink>
            </li>
            <li>
              <NavLink to="/kanban" onClick={toggleNavVisibility}><img src={kanban} alt="Kanban" /> Kanban</NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={toggleNavVisibility}><img src={profile} alt="Profile" /> Profile</NavLink>
            </li>
            <li>
              <NavLink to="/signin" onClick={toggleNavVisibility}><img src={signin} alt="Sign In" /> Sign In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
