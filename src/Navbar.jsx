import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className="navbar d-flex justify-content-end" style={{marginInline:"80px"}}>
            <div className="links">
                <Link to="/" className="btn btn-outline-light mx-2">Login</Link>
                <Link to="/Home" className="btn btn-outline-light mx-2">Home</Link>
                <Link to="/About" className="btn btn-outline-light mx-2">About</Link>
                <Link to="/Contact" className="btn btn-outline-light mx-2">Contact</Link>
                <a href="#sidebar" 
                data-bs-toggle="offcanvas" 
                aria-controls="sidebar" 
                role="button">
                    <i className="bi bi-gear-wide-connected btn text-light fs-3"></i>
                </a>

                <div className="offcanvas offcanvas-end bg-dark"
                data-bs-backdrop="false" 
                tabindex="-1" 
                id="sidebar" 
                aria-labelledby="sidebar-lable">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-light" id="sidebar-lable">Settings:</h5>
                        <button type="button" className="btn text-light align-item-end" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to="/" className="btn btn-outline-light mx-2">Logout</Link>
                    </div>
                </div>                 
            </div>
        </div>
    );
}
 
export default Nav;