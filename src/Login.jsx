import { useState } from "react";
import Button from "react-bootstrap/Button";
import "animate.css";
import { AnimatePresence,motion } from "framer-motion";
const Log = () => {
    
    const [show, setShow] = useState(false);

    const [showPassword,setShowPassword] = useState(true);
    return (
        <div>
            <div className="container-fluid">
                <div className="row min-vh-100 align-items-center justify-content-center">                
                        <motion.div
                        className={`${show ? "col-xl-6" : "col-6"} d-flex justify-content-center align-items-centre`}
                        animate={{
                        x: show ? -25 : 350,
                        y: show ? -75:-75,
                        }}
                        transition={{ duration: 1.0,
                                    ease: "easeInOut"
                         }}
                         whileHover={{ scale: 1.1 }}>
                            <h3 className="text-light align-items-center">
                                Welcome to Login Page
                            </h3>  
                            <Button
                                variant="link"
                                className="text-decoration-none"
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShow(show => !show)}>
                                <i
                                    className="bi bi-arrow-right fs-4 d-inline-flex justify-content-center align-items-center bg-light text-dark rounded-circle"
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        cursor: "pointer",
                                    }}
                                    >
                                </i>
                            </Button>
                        </motion.div>
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
                                        <div className="row justify-content-center my-2">
                                            <div className="col-xl-9">
                                                <label className=" text-light me-4 fs-4">Email:</label>
                                                    <input type="email"
                                                    className="border-danger mb-5 pe-5 bg-dark text-light"
                                                    placeholder="Email"/>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mb-2">
                                            <div className="col-xl-9">
                                                <label className=" text-light me-2 fs-4">Password:</label>
                                                    <input
                                                        type={showPassword ? "password" : "text"}
                                                        className="border-success mb-5 pe-5 bg-dark text-light"
                                                        placeholder="********"/>

                                                    <i
                                                        className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} 
                                                            position-absolute text-light`}
                                                        style={{
                                                        right: "140px",
                                                        top: "43%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer"
                                                        }}
                                                        onClick={()=> setShowPassword(!showPassword)}
                                                    ></i>
                                            </div>
                                        </div>

                                        <div className="row justify-content-start ms-3">
                                            <div className="col-xl-6 mx-3">
                                                <p className=" text-center mb-4 text-light fs-6">
                                                     Remember Me 
                                                    <input type="checkbox"className="mx-1" style={{ accentColor: "#28b463" }}/>
                                                </p>
                                            </div> 
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-xl-9">
                                                <a href="/login" className="btn btn-primary rounded-pill mb-4">Login</a>
                                            </div>   
                                        </div>
                                        
                                        <div className="row my-3 justify-content-center">
                                            <div className="col-xl-4">
                                                <label>
                                                    <a href="/createaccount">Create Account</a>
                                                </label>
                                            </div>

                                            <div className="col-xl-4">
                                                <lable className="mb-4">
                                                    <a href="/password">Forgot Password</a>
                                                </lable>
                                            </div>
                                        </div>

                                        <div className="row justify-content-start mb-3">
                                            
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