import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";


const Sign = () => {
    //Password Validation
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);

    //OTP Generator
    const [generatedOTP, setGeneratedOTP] = useState("");

    //Show Password
    const [showPassword,setShowPassword] = useState(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState(false);

    //Form Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Password Validation
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    //Strength Bar
    const strength =
    (hasMinLength ? 20 : 0) +
    (hasUpperCase ? 20 : 0) +
    (hasLowerCase ? 20 : 0) +
    (hasNumber ? 20 : 0) +
    (hasSpecialChar ? 20 : 0);

    let strengthText = "";
    let strengthColor = "";

    if (strength === 0) {
        strengthText = "";
    } else if (strength <= 40) {
        strengthText = "Weak";
        strengthColor = "bg-danger";
    } else if (strength <= 60) {
        strengthText = "Medium";
        strengthColor = "bg-warning";
    } else if (strength <= 80) {
        strengthText = "Strong";
        strengthColor = "bg-info";
    } else {
        strengthText = "Very Strong";
        strengthColor = "bg-success";
    }

    //Password Check
    const isStrongPassword =
        hasMinLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;


    //Button Dissable
    const handleLog = () => {
    history.push("/");
    };

    //OTP sent
    const sendOTP = async () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();

    sessionStorage.setItem("otp", newOTP);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("otpExpiry", Date.now() + 30000); // expires in 30 seconds
    setGeneratedOTP(newOTP);

    try {
        await emailjs.send(
            "service_rrmctpu",
            "template_fk7btuu",
            {
                to_email: email,
                otp: newOTP,
                name: firstName,
            },
            "QzHWrAFuYYzwk8GRQ"
        );

        alert("OTP sent successfully!");
        return true;
    } catch (error) {
        console.error(error);
        alert("Failed to send OTP");
        return false;
    }
    };
    
    

    const history = useHistory();

    const handleNext = async () => {
    if (!isFormValid) return;

    if (!isEmailValid) {
        alert("Enter a valid email.");
        return;
    }

    if (!isStrongPassword) {
    alert("Please create a stronger password.");
    return;
    }

    console.log("Sending OTP...");

    const success = await sendOTP();

    console.log("OTP sent. Navigating...");

    if (success) 
    {
    //Local Storage
    const users =
    JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        firstName,
        lastName,
        email,
        password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    history.push("/NewAcc");
    }
    };
    

    //Valid Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    
    const isPasswordMatch = password === confirmPassword;

    //Form Validation
    const isFormValid =
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== "" &&
        confirmPassword.trim() !== "" &&
        password === confirmPassword &&
        isPasswordMatch &&
        /\S+@\S+\.\S+/.test(email);

    return (
        <div>
            <div className="row justify-content-center mb-5">
                <div className="col-auto align-items-center">
                    <div className="card"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                    minHeight: "600px",
                    width:"700px",
                    marginTop:"50px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "15px"}}>
                        <div className="card-body text-light">
                            <div className="card-subtitle">
                                <div className="row justify-content-between">
                                    <h4 className="text-center mb-3">Let's Get Started</h4>  
                                    <div className="col-auto ms-5">
                                        <p className="fs-5">To join with us enter the following-</p>
                                    </div>
                                </div>

                                <div className="row justify-content-start ms-5">
                                    <div className="col-auto justify-content-between">

                                    {/*User Data*/}
                                    <form>

                                        {/*Name Field*/}
                                        
                                        <div className="row justify-content-start my-3">
                                            <div className="col-auto">
                                                <label><h5>Name</h5></label>
                                                <input type="text"
                                                onChange={(e) => setFirstName(e.target.value)} 
                                                placeholder="First Name"
                                                className="border-success rounded-3 ms-5 me-2 my-3"
                                                style={{
                                                    width:"200px",
                                                    height:"40px", 
                                                }}/>
                                        
                                                <input type="text" 
                                                placeholder="Last Name"
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="border-success rounded-3 ms-3 my-3"
                                                style={{
                                                    width:"200px",
                                                    height:"40px" 
                                                }}/>
                                            </div>
                                        </div>
                                        
                                        {/*Email Field*/}
                                        
                                        <div className="row justify-content-start my-3">
                                            <div className="col-auto">
                                            <label><h5>Email</h5></label>
                                            <input type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="border-success rounded-3 ms-5 my-3"
                                            placeholder="Enter Email" 
                                            style={{
                                            width:"430px",
                                            height:"45px" 
                                            }}/>

                                            {/*Vaild Email*/}
                                            {!isEmailValid && email !== "" && (
                                                <p className="text-danger">Please enter a valid email address.</p>
                                            )}
                                            </div>
                                        </div>

                                        {/*Password Field*/}
                        
                                        <div className="row justify-content-start my-3">
                                            <div className="col-auto">
                                                <label><h5>Password</h5></label>
                                                <input
                                                type={showPassword ? "text" : "password"}
                                                className="border-success rounded-3 ms-4 my-3"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                onFocus={() => setShowPasswordWarning(true)}
                                                onBlur={() => setShowPasswordWarning(false)}
                                                style={{
                                                    width:"200px",
                                                    height:"45px" 
                                                    }}/>
                                                    
                                                <i
                                                    className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} 
                                                        position-relative text-dark`}
                                                    style={{
                                                    right: "30px",
                                                    top: "0%",
                                                    transform: "translateY(-50%)",
                                                    cursor: "pointer"
                                                    }}
                                                    onClick={()=> setShowPassword(!showPassword)}
                                                ></i>
                                                

                                                <input
                                                type={confirmShowPassword ? "text" : "password"}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="border-success rounded-3 my-3"
                                                style={{
                                                    width: "200px",
                                                    height: "45px"
                                                }}/>
                                                
                                                <i
                                                    className={`bi ${
                                                        confirmShowPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                                                    } position-relative text-dark`}
                                                    style={{
                                                        right: "30px",
                                                        top: "0%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer"
                                                    }}
                                                    onClick={() =>setConfirmShowPassword(!confirmShowPassword)}
                                                ></i>

                                                {showPasswordWarning && !isStrongPassword && (
                                                    <div
                                                className="mt-3 p-3 rounded text-center"
                                                style={{
                                                backgroundColor: "rgba(255,255,255,0.08)",
                                                border: "1px solid rgba(255,255,255,0.15)"}}>
                                                    <small className="text-warning fw-bold d-block mb-2">
                                                        Password must contain:
                                                    </small>

                                                    <div className={hasMinLength ? "text-success" : "text-danger"}>
                                                        {hasMinLength ? "✅" : "❌"} At least 8 characters
                                                    </div>

                                                    <div className={hasUpperCase ? "text-success" : "text-danger"}>
                                                        {hasUpperCase ? "✅" : "❌"} One uppercase letter
                                                    </div>

                                                    <div className={hasLowerCase ? "text-success" : "text-danger"}>
                                                        {hasLowerCase ? "✅" : "❌"} One lowercase letter
                                                    </div>

                                                    <div className={hasNumber ? "text-success" : "text-danger"}>
                                                        {hasNumber ? "✅" : "❌"} One number
                                                    </div>

                                                    <div className={hasSpecialChar ? "text-success" : "text-danger"}>
                                                        {hasSpecialChar ? "✅" : "❌"} One special character
                                                    </div>
                                                </div>
                                                )}
                                                {password && (
                                                    <>
                                                    <div className="progress mt-2" style={{ height: "8px" }}>
                                                        <div
                                                            className={`progress-bar ${strengthColor}`}
                                                            role="progressbar"
                                                            style={{ width: `${strength}%` }}
                                                        ></div>
                                                    </div>

                                                    <small className="text-light">
                                                        Password Strength: <strong>{strengthText}</strong>
                                                    </small>
                                                    </>
                                                )}
                                                {confirmPassword !== "" && !isPasswordMatch && (
                                                <p className="text-danger">
                                                    Passwords do not match.
                                                </p>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && (
                                                <p className="text-success">
                                                    Passwords match.
                                                </p>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && !isStrongPassword && (
                                                <small className="text-warning">
                                                    Password is too weak.
                                                </small>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && isStrongPassword && (
                                                <p className="text-info">
                                                    Password is strong.
                                                </p>
                                                )}
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
                                                    SignUp
                                                </button>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-auto">
                                                <p>Alerady have an Account -
                                                    <button
                                                type="button"
                                                className="btn text-primary text-decoration-underline"
                                                onClick={handleLog}
                                                >
                                                Login
                                                </button>
                                                </p>
                                                
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
        </div>
             
    );
}
 
export default Sign;