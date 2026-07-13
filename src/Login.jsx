import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "animate.css";
import { AnimatePresence,motion } from "framer-motion";

const Log = () => {
    const history = useHistory();
    const [show, setShow] = useState(true);

    //Credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Show Password
    const [showPassword,setShowPassword] = useState(false);

    //Button
    const handleSubmit = () => {
    if (email === "" || password === "") {
    alert("Invalid credential");
    return;
    }
        history.push("/Home");        
    };
    
    return (
        <div>
            <div className="container-fluid">
                <div className="row min-vh-100 align-items-center justify-content-center">

                    {/* Welcome Message */}               
                    <motion.div
                    className={`${show ? "col-xl-6" : "col-6"} d-flex justify-content-center align-items-center`}
                    initial={{ x: 500, opacity: 0 }}
                    animate={{
                        x: show ? -25 : 350,
                        opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.1 }}>
                        <h3 className="text-secondary align-items-center">
                            Welcome to Login Page
                        </h3>  
                        <Button
                            variant="link"
                            className="text-decoration-none"
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShow(show => !show)}>
                            <i
                                className="bi bi-arrow-right fs-4 d-inline-flex justify-content-center align-items-center bg-secondary text-light rounded-circle p-4"
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    cursor: "pointer",
                                }}
                                >
                            </i>
                        </Button>
                    </motion.div>

                    {/*Login Card */}
                    <div className="col-xl-6 mb-5">
                        <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{ x: 500, opacity: 1 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 500, opacity: 1 }}
                                transition={{
                                    duration: 1.0,
                                    ease: "easeInOut"
                                }}
                                >    
                            <div className="card py-3 mb-3" 
                                style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                                        height:"550px",
                                        width:"600px",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        borderRadius: "15px"}}>

                                <div className="card-body text-center animate__animated animate__slideInRight">
                                    <div className="card-subtitle text-light mb-5">
                                        <h1>Login to our login page:</h1>
                                    </div>

                                    <div className="container">
                                    <form>
                                        <div className="row align-items-center justify-content-center mb-4">
                                            <div className="col-3">
                                                <label className="text-light fs-5">Email</label>
                                            </div>

                                            <div className="col-6">
                                                <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control text-dark border-success"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div className="row align-items-center justify-content-center mb-4">
                                            <div className="col-3">
                                                <label className="text-light fs-5 ms-4">Password</label>
                                            </div>

                                            <div className="col-6">
                                                <div className="input-group">
                                                    <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control text-dark border-success"
                                                    placeholder="********"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}/>

                                                    <span
                                                        className="input-group-text border-success text-dark"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        <i
                                                            className={`bi ${
                                                                showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                                                            }`}
                                                        ></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-start ms-3 mt-5">
                                            <div className="col-xl-6">
                                                <p className=" text-center mb-4 text-light fs-6 ms-4">
                                                    Remember Me 
                                                    <input type="checkbox"className="mx-1" style={{ accentColor: "#28b463" }}/>
                                                </p>
                                            </div> 
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-xl-9">
                                                <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleSubmit}>
                                                    Login
                                                </button>
                                            </div>   
                                        </div>
                                        
                                        <div className="row my-3 justify-content-center">
                                            <div className="col-xl-4">
                                                <label>
                                                   <Link to="/Sign">Create Account</Link>
                                                </label>
                                            </div>

                                            <div className="col-xl-4">
                                                <lable className="mb-4">
                                                    <Link to="/Forgot">Forgot Password</Link>
                                                </lable>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                </div>
                                
                            </div>
                            </motion.div> 
                        )} 
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Log;