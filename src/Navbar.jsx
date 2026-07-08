const Nav = () => {
    return (
        <div className="navbar d-flex justify-content-end" style={{marginInline:"80px"}}>
            <div className="links">
                <a href="/" className="btn btn-outline-light mx-2">Login</a>
                <a href="/home" className="btn btn-outline-light mx-2">Home</a>
                <a href="/about" className="btn btn-outline-light mx-2">About</a>
                <a href="/contact" className="btn btn-outline-light mx-2">Contact</a>
            </div>
        </div>
    );
}
 
export default Nav;