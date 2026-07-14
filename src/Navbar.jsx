import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <div className="navbar d-flex justify-content-end" style={{marginInline:"80px"}}>
            <div className="links">
                <Link to="/" className="btn btn-outline-light mx-2">Login</Link>
                <Link to="/Home" className="btn btn-outline-light mx-2">Home</Link>
                <Link to="/About" className="btn btn-outline-light mx-2">About</Link>
                <Link to="/Contact" className="btn btn-outline-light mx-2">Contact</Link>
            </div>
        </div>
    );
}
 
export default Nav;