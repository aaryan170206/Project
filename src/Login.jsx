import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "animate.css";
import { AnimatePresence,motion } from "framer-motion";
import Swal from "sweetalert2";

const Log = () => {
    const history = useHistory();
    const [show, setShow] = useState(true);

   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //Credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    //Show Password
    const [showPassword,setShowPassword] = useState(false);

    //Button
    const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => {
        return (
            u &&
            u.email.trim() === email.trim() &&
            u.password === password
        );
    });

    if (user) {
        sessionStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        Swal.fire({
            title: `Welcome ${user.firstName}!`,
            text: "Login successful.",
            icon: "success",
             timer: 1500,         
        showConfirmButton: false,
        }).then(() => {
            history.push("/Home");
        });
        return;
    }
    if (!isEmailValid) {
    Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        confirmButtonColor: "#f39c12",
    });
    return;
    }
     else {
        Swal.fire({
            title: "Login Failed",
            text: "Invalid email or password.",
            icon: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#dc3545",
        });
    }
    };
    
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="row min-vh-100 align-items-center justify-content-center">

                    {/* Welcome Message */}               
                    <motion.div
                    className="col-12 col-md-6 order-1 order-md-1 d-flex justify-content-center"
                    initial={isMobile ? false : { x: 370, y: 50, opacity: 0 }}
                    animate={isMobile ? {} : { x: -35, y: 50, opacity: 1 }}
                    transition={
                        isMobile
                            ? {}
                            : {
                                duration: 1,
                                ease: "easeInOut",
                            }
                        }
                        whileHover={{ scale: 1.1 }}>
                            <div className="card py-3 mb-3" 
                                style={{
                                width: "100%",
                                maxWidth: "275px",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                borderRadius: "15px",}}>

                                <h3 className="text-light align-items-center">
                                <Button
                                    variant="link"
                                    className="text-decoration-none"
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShow(show => !show)}>
                                    <i
                                        className="bi bi-arrow-right fs-4 d-inline-flex justify-content-center align-items-center text-light rounded-circle p-4"
                                        style={{
                                            width: "25px",
                                            height: "25px",
                                            cursor: "pointer",
                                        }}
                                        >
                                    </i>
                                </Button>
                                    Click to Login
                                </h3>      
                            </div> 
                        
                    </motion.div>

                    {/*Login Card */}
                    <div className="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center">
                        <AnimatePresence>
                        {show && (
                            <motion.div
                                initial={{ y: 90, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 90, opacity: 0 }}
                                transition={{
                                    duration: 0.9,
                                    ease: "easeOut"
                                }}
                                className="mt-5"
                                >    
                            <div className="card py-3 mb-3" 
                                style={{backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        height:"550px",
                                        maxWidth:"600px",
                                        minWidth: "280px",
                                        width:"100%",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        borderRadius: "15px"}}>

                                <div className="card-body text-center animate__animated animate__slideInUp">
                                    <div className="card-title text-light mb-5">
                                        <h1>Welcome Back:</h1>
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
                                                placeholder="Enter Your Email"
                                                className="form-control text-dark border-success"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div className="row align-items-center justify-content-center mb-4">
                                            <div className="col-3">
                                                <label className="text-light fs-5">Password</label>
                                            </div>

                                            <div className="col-6">
                                                <div className="input-group">
                                                    <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="form-control text-dark border-success"
                                                    placeholder="Password"
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
                                                <p className=" text-center mb-4 text-light fs-6">
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