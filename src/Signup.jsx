import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Back from "./assets/Login.jpg";


const Sign = () => {
    const [loading, setLoading] = useState(false);
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

       await Swal.fire({
        title: "OTP Sent!",
        text: "Please check your email for the verification code.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        });
        return true;
    } 
    catch (error) {
        console.error(error);
       Swal.fire({
        title: "Failed",
        text: "Unable to send OTP. Please try again.",
        icon: "error",
        });
        return false;
    }
    };
    
    const history = useHistory();

    const handleNext = async () => {
    if (!isFormValid) return;

    setLoading(true);

    try{
        if (!isEmailValid) {
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address.",
            icon: "warning",
            });
            return;
        }

        if (!isStrongPassword) {
        Swal.fire({
        title: "Weak Password",
        text: "Please create a stronger password.",
        icon: "warning",
        });
        return;
        }
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
        (u) => u && u.email === email.trim()
        );

        if (existingUser) {
        Swal.fire({
            title: "Account Exists",
            text: "This email is already registered.",
            icon: "warning",
        });

        return;
        }
        const success = await sendOTP();

        if (success) {
        sessionStorage.setItem(
            "pendingUser",
            JSON.stringify({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password,
                joinedOn: new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                }),
        })
    );

    history.push("/NewAcc");
}
    } 
    finally {
        setLoading(false);
    }
    };
    
    return (
    <div
    style={{
    backgroundImage: `url(${Back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    }}
    >
        <div className="container">
            <div className="row justify-content-center mb-5 ">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                    <div className="card w-100%"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                    width:"100%",
                    maxWidth:"600px",
                    margin:"50px auto",
                    minHeight:"500px",
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

                                <div className="row justify-content-center px-3 mb-2">
                                    <div className="col-12 justify-content-between">

                                    {/*User Data*/}
                                    <form>

                                        {/*Name Field*/}
                                        
                                        <div className="row justify-content-center my-5">
                                             <div className="col-12 col-lg-2">
                                                <label className="form-label fw-bold mb-0">
                                                    Name
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-5">
                                                <input type="text"
                                                onChange={(e) => setFirstName(e.target.value)} 
                                                placeholder="First Name"
                                                className="form-control border-success"
                                                style={{
                                                    width: "100%",
                                                    maxWidth:"400px",
                                                    height:"40px", 
                                                }}/>
                                            </div>
                                            <div className="col-12 col-lg-5">
                                                <input type="text" 
                                                placeholder="Last Name"
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="form-control border-success"
                                                style={{
                                                    width: "100%",
                                                    maxWidth:"400px",
                                                    height:"40px" 
                                                }}/>
                                            </div>
                                        </div>
                                        
                                        {/*Email Field*/}
                                        
                                        <div className="row justify-content-center my-5">
                                            <div className="col-12 col-lg-2">
                                                <label className="form-label fw-bold mb-0">
                                                    Email
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-10">
                                            <input type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="border-success rounded-3 mb-3"
                                            placeholder="Enter Email" 
                                            style={{
                                            width:"100%",
                                            maxWidth:"600px",
                                            height:"45px" 
                                            }}/>

                                            {/*Vaild Email*/}
                                            {!isEmailValid && email !== "" && (
                                                <p className="text-danger">Please enter a valid email address.</p>
                                            )}
                                            </div>
                                        </div>

                                        {/*Password Field*/}
                        
                                        <div className="row justify-content-center my-5">
                                            <div className="col-12 col-lg-2">
                                                <label className="form-label fw-bold mb-0">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="col-12 col-lg-5 position-relative">
                                                <div className="position-relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        className="form-control border-success pe-5"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />

                                                    <i
                                                        className={`bi text-dark ${
                                                            showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                                                        } position-absolute`}
                                                        style={{
                                                            right: "15px",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    ></i>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-5">
                                                <div className="position-relative">
                                                    <input
                                                        type={confirmShowPassword ? "text" : "password"}
                                                        className="form-control border-success pe-5"
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />

                                                    <i
                                                        className={`bi text-dark ${
                                                            confirmShowPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                                                        } position-absolute`}
                                                        style={{
                                                            right: "15px",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() =>
                                                            setConfirmShowPassword(!confirmShowPassword)
                                                        }
                                                    ></i>
                                                </div>
                                            </div>
                                                {showPasswordWarning && !isStrongPassword && (
                                                <div
                                                className="col-12 col-lg-8 mt-3 p-3 rounded text-center"
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
                                                    <div className="progress mt-2" style={{ height: "8px", width:"250px" }}>
                                                        <div
                                                            className={`progress-bar ${strengthColor}`}
                                                            role="progressbar"
                                                            style={{ width: `${strength}%` }}
                                                        ></div>
                                                    </div>

                                                    <small className="text-light text-center">
                                                        Password Strength: <strong>{strengthText}</strong>
                                                    </small>
                                                    </>
                                                )}
                                                {confirmPassword !== "" && !isPasswordMatch && (
                                                <p className="text-danger text-center">
                                                    Passwords do not match.
                                                </p>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && (
                                                <p className="text-success text-center">
                                                    Passwords match.
                                                </p>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && !isStrongPassword && (
                                                <small className="text-warning text-center">
                                                    Password is too weak.
                                                </small>
                                                )}

                                                {confirmPassword !== "" && isPasswordMatch && isStrongPassword && (
                                                <p className="text-info text-center">
                                                    Password is strong.
                                                </p>
                                                )}
                                            
                                        </div>

                                        {/*Button( dissabled by default) Field*/}
                                        <div className="row justify-content-center">
                                            <div className="col-auto align-items-center">
                                               <button
                                                    type="button"
                                                    className="btn btn-info rounded-pill px-5 py-2 fw-bold shadow"
                                                    disabled={!isFormValid || loading}
                                                    onClick={handleNext}>
                                                    {loading ? (
                                                        <>
                                                            <span
                                                                className="spinner-border spinner-border-sm me-2"
                                                                role="status"
                                                            ></span>
                                                            Sending OTP...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-person-plus-fill me-2"></i>
                                                            Create Account
                                                        </>
                                                    )}
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
    </div>   
    );
}
 
export default Sign;