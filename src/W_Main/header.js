import './header.css';
import { NavLink } from "react-router-dom";

const Header = () =>
{
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar_css">
            <div className="container-fluid ">
            <NavLink to="/" className="navbar-brand card container logo_text2 text-white col-lg-1">WebTech</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <NavLink to="/" className="nav-link text-white">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/about" className="nav-link text-white" >About</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/contact-us" className="nav-link text-white">Contact us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </header>
    );
}

export default Header;