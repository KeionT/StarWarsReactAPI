import { NavLink } from "react-router-dom";

function Header() {
    return(
        <div className="Header">
            <NavLink to={"/"} className="NavLink">
                <h1>Star Wars Ships</h1>
            </NavLink>
        </div>
    );
}

export default Header 