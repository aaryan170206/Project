import { Link, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/AI & Automatin.jpg";

const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const location = useLocation();

//Offcanvas Id Card
    const history = useHistory();
    const currentUser = JSON.parse(
    sessionStorage.getItem("currentUser")
    );

//Nav Bar Page Name
    const pageNames = {
    "/Home": "Home",
    "/Services": "Our Services",
    "/About": "About Us",
    "/Contact": "Contact Us",
    "/Health": "AI In Healthcare",
    "/Finance": "AI in Finance",
    "/Security": "AI in Cyber Security",
    "/Defence": "AI in Defence",
    "/Transport": "AI in Transportation",
    "/Ecom": "AI in E-Commerce",
    "/Agriculture": "AI in Agriculture",
    "/Education": "AI in Education",
    "/Learn": "Learn More",
    };

    const currentPage = pageNames[location.pathname] || "AI & Automation";

//Logout Button
    const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("pendingUser");

    history.replace("/");
    };
    useEffect(() => {
    let lastScrollY = window.scrollY;

//Nav Bar Permanence
    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            // Scrolling up
            setShowNav(true);
        } else {
            // Scrolling down
            setShowNav(false);
        }

        lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (
        <div className="navbar d-flex justify-content-between align-items-center px-5"
        style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,}}>
            <div className="d-flex align-items-center">
            
                <img
                src={Logo}
                alt="Logo"
                width="60"
                height="60"
                style={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    cursor: "pointer",
                }}/>

                <h3 className="text-light mb-0 ms-3"
                style={{ backdropFilter: "blur(10px)" }}>
                    {currentPage}
                </h3>

                <button
                className="btn btn-outline-light d-lg-none ms-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuSidebar">
                    <i className="bi bi-list fs-3"></i>
                </button>
            </div>

            <div className="links d-none d-md-flex align-items-center">
                <Link to="/Home" className="btn btn-outline-light mx-2"
                style={{backdropFilter: "blur(10px)",}}>
                    Home
                </Link>

                <Link to="/Services" className="btn btn-outline-light mx-2"
                style={{backdropFilter: "blur(10px)",}}>
                    Services
                </Link>

                <Link to="/About" className="btn btn-outline-light mx-2"
                style={{backdropFilter: "blur(10px)",}}>
                    About
                </Link>

                <Link to="/Contact" className="btn btn-outline-light mx-2"
                style={{backdropFilter: "blur(10px)",}}>
                    Contact
                </Link>

                <button
                className="btn btn-outline-light rounded-pill"
                style={{
                    height:"43px",
                    backdropFilter: "blur(10px)"
                }}
                onClick={handleLogout}>
                    Logout
                </button>
        {/*Off Canvas as Virtual ID Card*/}
                <button className="btn border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
                aria-controls="sidebar">
                    <i className="bi bi-person-vcard-fill text-light fs-1"></i>
                </button>

                <div className="offcanvas offcanvas-end bg-dark"
                data-bs-backdrop="false" 
                tabIndex={-1} 
                id="sidebar" 
                aria-labelledby="sidebar-lable">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="sidebar-lable">Personal Information:</h5>
                        <button type="button" className="btn text-light align-item-end" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="card bg-secondary border-light border-3 rounded-4">
                            <div className="text-center mb-4">

                                <i className="bi bi-person-circle fs-1 text-info"></i>

                                <h4 className="mt-2 text-light">
                                    {currentUser?.firstName} {currentUser?.lastName}
                                </h4>

                                <p className="text-light">
                                    {currentUser?.email}
                                </p>

                                <p className="text-light">
                                <strong className="text-info">Joined Date:</strong> {currentUser?.joinedOn}
                                </p>
                            </div>   
                        </div>
                    </div>

                    <div
                        className="offcanvas offcanvas-start bg-dark"
                        tabIndex="-1"
                        id="menuSidebar">

                        <div className="offcanvas-header">

                            <h5 className="text-light">
                                Navigation
                            </h5>

                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                            ></button>

                        </div>

                        <div className="offcanvas-body">

                            <Link
                                to="/Home"
                                className="btn btn-outline-light w-100 mb-3"
                                data-bs-dismiss="offcanvas"
                            >
                                Home
                            </Link>

                            <Link
                                to="/Services"
                                className="btn btn-outline-light w-100 mb-3"
                                data-bs-dismiss="offcanvas"
                            >
                                Services
                            </Link>

                            <Link
                                to="/About"
                                className="btn btn-outline-light w-100 mb-3"
                                data-bs-dismiss="offcanvas"
                            >
                                About
                            </Link>

                            <Link
                                to="/Contact"
                                className="btn btn-outline-light w-100 mb-3"
                                data-bs-dismiss="offcanvas"
                            >
                                Contact
                            </Link>

                            <button
                                className="btn btn-outline-danger w-100 mb-3"
                                onClick={handleLogout}
                                data-bs-dismiss="offcanvas"
                            >
                                Logout
                            </button>

                            <button
                                className="btn btn-outline-info w-100"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#sidebar"
                                data-bs-dismiss="offcanvas"
                            >
                                Profile
                            </button>

                        </div>

                    </div>
                </div>                 
            </div>
        </div>
    );
}
 
export default Nav;