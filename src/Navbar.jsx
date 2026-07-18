import { Link, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const location = useLocation();

    //Offcanvas Id Card
    const history = useHistory();
    const currentUser = JSON.parse(
    sessionStorage.getItem("currentUser")
    );
    const pageNames = {
    "/Home": "Home",
    "/Services": "Services",
    "/About": "About",
    "/Contact": "Contact",
    "/Health": "Healthcare",
    "/Finance": "Finance",
    "/Security": "Cyber Security",
    "/Defence": "Defence",
    "/Transport": "Transportation",
    "/Ecom": "E-Commerce",
    "/Agriculture": "Agriculture",
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
            zIndex: 9999,
            background: "rgba(0,0,0,.4)"}}>
            <h3 className="text-light fw-bold mb-0 mx-5 text-decoration-underline"
            style={{ letterSpacing: "1px" }}>
                {currentPage}
            </h3>

            <div className="links">
                <Link to="/Home" className="btn btn-outline-light mx-2">Home</Link>
                <Link to="/Services" className="btn btn-outline-light mx-2">Services</Link>
                <Link to="/About" className="btn btn-outline-light mx-2">About</Link>
                <Link to="/Contact" className="btn btn-outline-light mx-2">Contact</Link>
                <button
                className="btn btn-outline-light mx-2"
                onClick={handleLogout}>
                    Logout
                </button>
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
                </div>                 
            </div>
        </div>
    );
}
 
export default Nav;