import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown2 from "./dropdown";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3 container">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Bootstrap" width="100" height="70" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active m-2" aria-current="page" href="#" style={{ fontSize: '24px', color: "yellow" }}>Planetas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active m-2" aria-current="page" href="#" style={{ fontSize: '24px', color: "yellow" }}>Personajes</a>
                    </li>
                </ul>
            </div>
            <div className="ml-auto">
                {/* <Link to="/demo">
                    <button className="btn bg-dark text-warning">Favorites</button>
                </Link> */}
                <Dropdown2 />
            </div>
        </nav>
    );
};
