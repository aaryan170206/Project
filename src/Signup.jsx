import { useState } from "react";
import { Link } from "react-router-dom";


const Sign = () => {
    const [showPassword,setShowPassword] = useState(true);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    return (
        <div>
            <div className="d-flex justify-content-center">
            <div className="card"
            style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
            height:"550px",
            width:"700px",
            marginTop:"50px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "15px"}}>
                <div className="card-body text-light">
                    <div className="card-subtitle">
                        <div className="row justify-content-between">
                            <h5 className="text-center mb-3">Let's Get Started</h5>  
                            <div className="col-auto ms-5">
                                <p>To join with us enter the following-</p>
                            </div>
                        </div>

                        <div className="row justify-content-start ms-5">
                            <div className="col-auto justify-content-between">
                            <form>
                                <div className="row justify-content-start mx-5"> 
                                    <div className="col-auto mt-2">
                                        <h5>Name</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start mx-5 mb-3">
                                    <div className="col-auto border-2 border-end border-danger">
                                        <input type="text" 
                                        placeholder="First Name"
                                        className="text-center rounded-3"
                                        style={{
                                            width:"200px",
                                            height:"40px", 
                                        }}/>
                                    </div>

                                    <div className="col-auto border-2 border-start border-danger">
                                        <input type="text" 
                                        placeholder="Last Name"
                                        className="text-center rounded-3"
                                        style={{
                                            width:"200px",
                                            height:"40px" 
                                        }}/>
                                    </div>
                                </div>
                                
                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Email</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input type="email"
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                
                                    </div>
                                </div>

                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Password</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input 
                                    type={showPassword ? "password" : "text"}
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                            
                                        <i
                                            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} 
                                                position-absolute text-dark`}
                                            style={{
                                            right: "145px",
                                            top: "64%",
                                            transform: "translateY(-50%)",
                                            cursor: "pointer"
                                            }}
                                            onClick={()=> setShowPassword(!showPassword)}
                                        ></i>
                                    </div>
                                </div>

                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Confirm Password</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input 
                                    type={showPassword ? "password" : "text"}
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-auto align-items-center">
                                        <Link to="/Sign/Next"className="btn btn-info my-1">Next</Link>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        </div>
             
    );
}
 
export default Sign;