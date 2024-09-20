import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/offres"> Tableau d'offres </Link>
        </li>
        <li>
          <Link to="/offresEntreprise"> Creer un offre </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
