import React from "react";
import { Link } from "react-router-dom";

//class component
function Navbar() {
    return (
        <header className="header-global">
            <nav id="navbar-main" className="navbar d-flex flex-row align-items-center navbar-main navbar-expand-lg navbar-dark justify-content-between">
                <ul className="navbar-nav navbar-nav-hover flex-row align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" role="button">
                            <span className="nav-link-inner-text">📺 Start</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" role="button">
                            <span className="nav-link-inner-text">Login</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" role="button">
                            <span className="nav-link-inner-text">Sign Up</span>
                        </Link>
                    </li>
                </ul>
                <div className="time text-center">
                    <span className="time text-uppercase">1:47 PM</span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;