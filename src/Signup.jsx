import { useState } from "react";
import { Link,useHistory } from "react-router-dom";


const Sign = () => {
    //Show Password
    const [showPassword,setShowPassword] = useState(true);

    //Form Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Form Validation
    const isFormValid =
                        firstName.trim() !== "" &&
                        lastName.trim() !== "" &&
                        email.trim() !== "" &&
                        password.trim() !== "" &&
                        confirmPassword.trim() !== "" &&
                        password === confirmPassword &&
                        /\S+@\S+\.\S+/.test(email);
    const history = useHistory();

    //Button Dissable
    const handleNext = () => {
    if (!isFormValid) return;

    history.push("/Sign/Next");
    };
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

                            {/*User Data*/}
                            <form>

                                {/*Name Field*/}
                                <div className="row justify-content-start mx-5"> 
                                    <div className="col-auto mt-2">
                                        <h5>Name</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start mx-5 mb-3">
                                    <div className="col-auto border-2 border-end border-danger">
                                        <input type="text"
                                        onChange={(e) => setFirstName(e.target.value)} 
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
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="text-center rounded-3"
                                        style={{
                                            width:"200px",
                                            height:"40px" 
                                        }}/>
                                    </div>
                                </div>
                                
                                {/*Email Field*/}
                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Email</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                
                                    </div>
                                </div>

                                {/*Password Field*/}
                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Password</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input 
                                    type={showPassword ? "password" : "text"}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                            
                                        <i
                                            className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} 
                                                position-relative text-dark`}
                                            style={{
                                            right: "30px",
                                            top: "5%",
                                            transform: "translateY(-50%)",
                                            cursor: "pointer"
                                            }}
                                            onClick={()=> setShowPassword(!showPassword)}
                                        ></i>
                                    </div>
                                </div>

                                {/*Confirm Password Field*/}
                                <div className="row justify-content-start mx-5">
                                    <div className="col-auto mt-2">
                                        <h5>Confirm Password</h5>
                                    </div>
                                </div>
                                <div className="row justify-content-start ms-5 mb-3">
                                    <div className="col-auto">
                                    <input 
                                    type={showPassword ? "password" : "text"}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="rounded-3" 
                                    style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>
                                    </div>
                                </div>

                                {/*Button( dissabled by default) Field*/}
                                <div className="row justify-content-center">
                                    <div className="col-auto align-items-center">
                                        <button
                                        type="button"
                                        className="btn btn-info"
                                        disabled={!isFormValid}
                                        onClick={handleNext}
                                        >
                                            Next
                                        </button>
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