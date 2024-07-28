// This component needs to render three `NavLink` components. They will be for `/`,
// `/directors`, and `/actors`, in this order (test checks for this). The `NavLink`
// for `/` should render `Home`, `directors` should render `Directors`, and
// `actors` should render `Actors`. Each page should render the NavBar.

import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav className="navbar">

      <NavLink to={'/'}> Home </NavLink>

      <NavLink to={'/Directors'}> Directors </NavLink>

      <NavLink to={'/Actors'}> Actors </NavLink>

     


    
    </nav>
    );
};

export default NavBar;
