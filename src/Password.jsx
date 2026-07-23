import { useState } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Pass = () => {
    const history = useHistory();

    //Check Email
    const [email, setEmail] = useState("");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    //OTP Generation
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
        };

    //OTP sent
    const sendOTP = async () => {
    const newOTP = generateOTP();

    sessionStorage.setItem("otp", newOTP);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("otpExpiry", Date.now() + 30000); // expires in 30 seconds

    try {
        await emailjs.send(
            "service_rrmctpu",//Service Id/Type
            "template_a8d6z0l",//Template
            {
                to_email: email,
                otp: newOTP,
            },
            "QzHWrAFuYYzwk8GRQ" //Public Key
        );

        await Swal.fire({
        title: "OTP Sent!",
        text: "Please check your email for the verification code.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        });
        return true;

    } catch (error) {
       Swal.fire({
        title: "Failed",
        text: "Unable to send OTP. Please try again.",
        icon: "error",
        });

        return false;
    }
    };


    const handleNext = async () => {
    if (!isEmailValid) {
        Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "warning",
        });
        return;
    }

    // Check if the email exists
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
    (u) => u && u.email.trim() === email.trim()
    );

    if (!user) {
       Swal.fire({
        title: "Account Not Found",
        text: "No account exists with this email.",
        icon: "error",
        });
        return;
    }

    const success = await sendOTP();

    if (success) {
        history.push("/Confirm");
    }
    };

    
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center align-items-around">
                <div className="col-auto">
                    <div className="card my-5"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                    height:"550px",
                    width:"600px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "15px"}}>
                        <div className="card-body text-center">
                            <div className="card-title">
                                <h1 className="text-light">Password Reset</h1>
                            </div>

                            <div className="card-subtitle mt-3">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <p className="text-light">
                                                Enter the registered email:
                                            </p>
                                            <input
                                            className="text-center"
                                            type="email"
                                            placeholder="Registered Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button
                                    className="btn btn-info my-4"
                                    type="button"
                                    onClick={handleNext}
                                    >
                                        Send OTP
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Pass;