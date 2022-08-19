import "./footer.css";

import { NavLink } from "react-router-dom";

const Footer = () =>
{
    return (
            <div>
                <footer className="footer_">
                <div className="text-center p-3 ">
                Copyright © 2022
                    <NavLink to="/" className="nav-link"> WebTech.com</NavLink>
                </div>
                </footer>
            </div>
    );
}

export default Footer;